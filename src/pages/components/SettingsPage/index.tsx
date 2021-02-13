import * as React from 'react';
import Header
    from 'src/components/Header';
import Select
    from 'src/components/Select';
import { IReducerState } from 'src/redux/types';

import './styles.less';

type IProps = Partial<IReducerState> & {
    onButtonClick: () => void;
    onSelectChange: (id: string) => void;
};

const SettingsPage: React.FC<IProps> = ({ onButtonClick, onSelectChange, nationality }) => {
    return (
        <main>
            <Header
                title={'Settings Page'}
                onButtonClick={onButtonClick}
                buttonText={'Back to Home Page'}
            >
                <div className={'selectWrapper'}>
                    <span>Select nationality:</span>
                    <Select
                        value={nationality}
                        onSelectChange={onSelectChange}
                    />
                </div>
            </Header>
        </main>
    );
};

export default SettingsPage;