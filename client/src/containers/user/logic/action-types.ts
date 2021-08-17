import { IUserDataState } from './state';

export const SET_USER = 'USER:SET_USER';
export const UPDATE_USER = 'USER:UPDATE_USER';
export const UPDATE_USER_NOTIFICATION = 'UPDATE_USER_NOTIFICATION';
export const CLEAR_USER_NOTIFICATION = 'CLEAR_USER_NOTIFICATION';

export const DELETE_USER = 'USER:DELETE_USER';
export const USER_CHECK_TOKEN = 'USER:CHECK_TOKEN';
export const USER_ACCESS_TOKEN_LOADING = 'USER:LOADING';
export const USER_LOGOUT = 'USER:LOGOUT';

export type TSetUser = {
	user: IUserDataState['user'];
	id?: string;
};

export type TRequestFailed = {
	error: boolean;
	message: string;
};

export type TDeleteUser = {
	id: string;
};

export type TUserAccessTokenLoading = {
	accessToken: IUserDataState['accessToken'];
};
