import {
    getNationality,
    getUsers
} from './selectors';
import { IUser } from 'src/redux/types';

export const fetchUsers = (page: number) => async (dispatch, Store) => {
    const state = Store();
    const users = getUsers(state);
    const nationality = getNationality(state);

    dispatch(setLoading(true));

    try {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=50&nat=${nationality}`);
        const { results } = await response.json();
        dispatch({
            type: 'SET_USERS',
            payload: {
                users: [...users, ...results],
                page
            }
        });
    } catch (e) {
        console.error(e);
    }

    dispatch(setLoading(false));
};

export const setLoading = (loading: boolean) => ({ type: 'SET_LOADING', payload: loading });

export const filterUsersAction = (value: string) => (dispatch, Store) => {
    const state = Store();
    const users = getUsers(state);

    if (!value) {
        dispatch(setFilteredUsers());
        return;
    }

    const searchString = value.trim().toLowerCase();
    const filteredUsers = users.filter(user => {
        const { name } = user;
        const { first, last } = name;
        const fullName = `${first}${last}`.toLowerCase();

        return  fullName.includes(searchString);
    });

    dispatch(setFilteredUsers(filteredUsers, value));
};

export const setFilteredUsers = (filteredUsers: IUser[] = [], value: string = '') => ({
    type: 'SET_FILTERED_USERS',
    payload: {
        filteredUsers,
        filteredValue: value
    }
});

export const setMessage = (message: string) => ({ type: 'SET_MESSAGE', payload: message });

export const chooseNationality = (id: string) => ({ type: 'SET_NATIONALITY', payload: id });