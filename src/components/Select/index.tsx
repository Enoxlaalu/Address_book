import * as React from 'react';

import './styles.less';

const nationalities = ['All', 'ES', 'FR', 'GB'];

interface IProps {
    onSelectChange: (value: string) => void;
    value: string;
}

const Select: React.FC<IProps> = ({ onSelectChange, value }) => {
    const [opened, setOpened] = React.useState(false);

    const openSelect = () => setOpened(true);

    const onItemClick = (id, e) => {
        const value = id === 'All' ? '' : id;
        e.stopPropagation();
        localStorage.setItem('nationality', value);
        setOpened(false);
        onSelectChange(value);
    };

    return (
        <div
            data-testid={'select'}
            className={'select'}
            onClick={openSelect}
        >
            <span>{value || 'All nationalities'}</span>
            <ul
                data-testid={'list'}
                className={`dropdown ${opened ? 'opened' : ''}`}
            >
                {
                    nationalities.map(id => {
                        return (
                            <li
                                key={id}
                                onClick={(event) => onItemClick(id, event)}
                            >
                                {id}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Select;