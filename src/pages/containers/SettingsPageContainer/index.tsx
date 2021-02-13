import * as  React from 'react';
import SettingsPage
    from 'src/pages/components/SettingsPage';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chooseNationality } from 'src/redux/actions';
import { getNationality } from 'src/redux/selectors';

const SettingsPageContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onButtonClick = () => history.push('/');
    const onSelectChange = (id) => dispatch(chooseNationality(id));
    const nationality = useSelector(getNationality);

    return (
        <SettingsPage
            onButtonClick={onButtonClick}
            onSelectChange={onSelectChange}
            nationality={nationality}
        />
    );
};

export default SettingsPageContainer;