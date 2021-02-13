import { IUser } from 'src/redux/types';

export const getModalBodyData = (user: IUser) => {
    const { location, phone, cell } = user;
    const { street, city, state, postcode } = location;

    return new Map([
        ['Street', street.name],
        ['City', city],
        ['State', state],
        ['Postcode', postcode],
        ['Phone', phone],
        ['Cell', cell]
    ]);
};

export const getUserCardData = (user: IUser) => {
    const { name, login, email } = user;
    const { first, last } = name;
    const {  username } = login;

    return new Map([
        ['First name', first],
        ['Username', username],
        ['Last name', last],
        ['Email', email]
    ]);
};

