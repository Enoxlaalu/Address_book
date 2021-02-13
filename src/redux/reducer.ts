import { IReducerState } from 'src/redux/types';

const initialState = {
    loading: false,
    users: [],
    filteredUsers: [],
    filteredValue: '',
    message: '',
    page: 1,
    nationality: localStorage.getItem('nationality') || ''
};

const rootReducer = (state: IReducerState = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                loading: action.payload,
                message: action.payload && 'Loading...'
            };
        }
        case 'SET_USERS': {
            const { users, page } = action.payload;
            return {
                ...state,
                users,
                page
            };
        }
        case 'SET_FILTERED_USERS': {
            const { filteredUsers, filteredValue } = action.payload;

            return {
                ...state,
                filteredUsers,
                filteredValue,
                message: filteredValue && 'Can\'t load users when filter is active :('
            };
        }
        case 'SET_MESSAGE': {
            return {
                ...state,
                message: action.payload
            };
        }
        case 'SET_NATIONALITY': {
            return {
                ...state,
                nationality: action.payload,
                users: []
            };
        }
        default: return state;
    }
};

export default rootReducer;