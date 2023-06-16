import { IAction } from 'shared/store/state';

export const createAction = (ACTION: string, data: any = null): IAction => ({
	type: ACTION,
	payload: data
});
