import { Router } from 'express';
import { SOCKET_EVENTS, TestApiPath } from '../../common';
import { SolutionService } from '../../services';
import { sockets } from '../../socket';

export const initTest = (appRouter: typeof Router, services: { solution: SolutionService }) => {
	const { solution: solutionService } = services;
	const router = appRouter();

	router.post(TestApiPath.RESULT, (req, res, next) =>
		solutionService
			.setResult(req.body)
			.then(({ result, typeTest, solution, user, userId }) => {
				req.io.to(sockets.get(userId) || '').emit(SOCKET_EVENTS.RESULT_TEST_TO_CLIENT, {
					result,
					typeTest,
					solution,
					user,
				});
				res.send({ message: 'ok' });
			})
			.catch(next),
	);

	return router;
};
