import * as React from 'react';

import './styles.less';
import Loader from 'src/components/Loader';
import Message from 'src/components/Message';
import Input from 'src/components/Input';
import Header from 'src/components/Header';
import Modal from 'src/components/Modal';
import ModalBody from 'src/pages/components/ModalBody';
import UserCard from 'src/pages/components/HomePage/UserCard';
import { IReducerState } from 'src/redux/types';

type IProps = Partial<IReducerState> & {
    handleSectionScroll: (e: React.SyntheticEvent) => void;
    filterUsers: (value: string) => void;
    onButtonClick: () => void;
};

const HomePage: React.FC<IProps> = ({
    users,
    handleSectionScroll,
    message,
    filterUsers,
    filteredValue,
    onButtonClick,
}) => {
    const [selectedUser, setSelectedUser] = React.useState(null);

    if (!filteredValue && !users.length) return <Loader />;

    const onRowClick = (user) => setSelectedUser(user);
    const closeModal = () => setSelectedUser(null);

    return (
        <main className={'homePage'}>
            <Header
                title={'Address book'}
                onButtonClick={onButtonClick}
                buttonText={'Settings page'}
            >
                <Input
                    placeholder={'Type to search...'}
                    onChange={filterUsers}
                    value={filteredValue}
                />
            </Header>
            <section onScroll={handleSectionScroll}>
                <div className={'grid'}>
                    {users.map((user) => {
                        return (
                            <UserCard
                                key={user.login.uuid}
                                user={user}
                                onRowClick={onRowClick}
                            />
                        );
                    })}
                    {filteredValue && !users.length ? (
                        <span>No users in a book</span>
                    ) : null}
                </div>
            </section>
            <Message message={message} />
            <Modal
                opened={selectedUser}
                closeModal={closeModal}
                headerText={'User detailed info'}
                body={<ModalBody user={selectedUser} />}
            />
        </main>
    );
};

export default HomePage;
