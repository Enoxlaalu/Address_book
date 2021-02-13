export interface IReducerState {
    loading: boolean,
    users: IUser[],
    filteredUsers: IUser[],
    filteredValue: string,
    message: string,
    page: number,
    nationality: string
}

export interface IUser {
    name: {
        first: string,
        last: string
    },
    login: {
        username: string,
        uuid: string
    },
    email: string,
    picture: {
        thumbnail: string
    },
    location: {
        street: {
            name: string
        },
        city: string,
        state: string,
        postcode: string
    },
    phone: string,
    cell: string
}