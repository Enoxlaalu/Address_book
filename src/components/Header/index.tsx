import * as React from 'react';
import Button
    from 'src/components/Button';

import './styles.less';

interface IProps {
    onButtonClick: () => void;
    title: string;
    buttonText: string;
}

const Header: React.FC<IProps> = ({ onButtonClick, children, title, buttonText }) => {
    return (
        <header className={'header'}>
            <Button
                className={'headerButton'}
                text={buttonText}
                onClick={onButtonClick}
            />
            <h1>{title}</h1>
            {children}
        </header>
    );
};

export default Header;