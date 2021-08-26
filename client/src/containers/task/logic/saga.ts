import { all, put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import { getTaskById } from 'services/task/task.service';
import { setNotificationState } from 'containers/notification/logic/actions';
import { NotificationType } from 'containers/notification/logic/models';
import { fetchTasks } from 'services/home-page.service';
import { WebApi } from 'typings/webapi';

export function* fetchTaskWorker(action: ReturnType<typeof actions.getTask>): any {
	try {
		const { id } = action;
		const task = yield call(() => getTaskById(id));
		yield put(actions.setTask({ task }));
	} catch (error) {
		yield put(
			setNotificationState({
				state: { notificationType: NotificationType.Error, message: 'Challenge not found' },
			}),
		);
		yield put(actions.setNotFound({ notFound: true }));
	}
}

export function* fetchTaskWatcher() {
	yield takeEvery(actionTypes.GET_TASK, fetchTaskWorker);
}

export function* fetchTasksWorker(action: ReturnType<typeof actions.getTask>): any {
	try {
		const { rank, id } = action;
		const tasks = yield call(fetchTasks);
		const filteredTasks = tasks
			.filter((item: WebApi.Entities.IChallenge) => item.rank === rank && item.id !== id)
			.sort(() => 0.5 - Math.random())
			.slice(0, 2);

		yield put(actions.setTasks({ similarTasks: filteredTasks }));
	} catch (error) {
		yield put(
			setNotificationState({
				state: { notificationType: NotificationType.Error, message: 'Similar challenges not found' },
			}),
		);
	}
}

export function* fetchTasksWatcher() {
	yield takeEvery(actionTypes.GET_TASKS, fetchTasksWorker);
}

export default function* taskInfoSaga() {
	yield all([fetchTaskWatcher(), fetchTasksWatcher()]);
}
