import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage
    from 'src/pages/components/HomePage';
import {
    fetchUsers,
    filterUsersAction,
    setMessage
} from 'src/redux/actions';
import {
    getFilteredUsers,
    getFilteredValue,
    getLoading,
    getMessage,
    getPage,
    getUsers
} from 'src/redux/selectors';
import { useHistory } from 'react-router-dom';

const MAXIMUM_PAGE = 20;
const PIXEL_GAP = 200;

const HomePageContainer = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const users = useSelector(getUsers);
    const filteredValue = useSelector(getFilteredValue);
    const filteredUsers = useSelector(getFilteredUsers);
    const message = useSelector(getMessage);
    const page = useSelector(getPage);
    const history = useHistory();

    React.useEffect(() => {
        dispatch(fetchUsers(page));
    }, []);

    const handleSectionScroll = (e) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target;

        if (scrollHeight - scrollTop - PIXEL_GAP  <= clientHeight && !loading && !filteredValue) {
            if (page === MAXIMUM_PAGE) {
                dispatch(setMessage('end of users catalog'));
            } else {
                dispatch(fetchUsers(page + 1));
            }
        } else if (message) setMessage('');
    };

    const filterUsers = value => dispatch(filterUsersAction(value));

    const onButtonClick = () => history.push('/settings');

    return (
        <HomePage
            users={filteredValue || filteredUsers.length ? filteredUsers : users}
            handleSectionScroll={handleSectionScroll}
            message={message}
            filterUsers={filterUsers}
            filteredValue={filteredValue}
            onButtonClick={onButtonClick}
        />
    );
};

export default HomePageContainer;