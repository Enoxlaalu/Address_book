import * as React from 'react';
import { getUserCardData } from 'src/utils/HomePage/data';
import Index
    from 'src/components/PropValueSection';
import { IUser } from 'src/redux/types';

interface IProps {
    user: IUser;
    onRowClick: (user: IUser) => void;
}

const UserCard: React.FC<IProps> = ({ user, onRowClick }) => {
    const { picture } = user;
    const userCardData = getUserCardData(user);

    return (
        <div
            className={'userCard'}
            onClick={() => onRowClick(user)}
        >
            <img
                className={'thumbnail'}
                src={picture.thumbnail}
                alt="thumbnail" />
            {
                Array.from(userCardData).map(data => {
                    return <Index key={data[0]} data={data} />;
                })
            }
        </div>
    );
};

export default UserCard;