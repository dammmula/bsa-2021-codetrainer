import { Router } from 'express';
import { initAuth } from './auth';
import { ApiPath } from '../common';
import { auth, users } from '../services';
import { initUsers } from './users/users-api';

export const initApi = (appRouter: typeof Router) => {
	const apiRouter = appRouter();

	apiRouter.use(
		ApiPath.AUTH,
		initAuth(Router, {
			auth,
		}),
	);

	apiRouter.use(
		ApiPath.USERS,
		initUsers(Router, {
			users,
		}),
	);

	return apiRouter;
};
