import * as React from 'react';

import './styles.less';

interface IProps {
    opened: boolean;
    headerText: string;
    body: JSX.Element;
    closeModal: () => void;
}

const Modal: React.FC<IProps> = ({ opened, headerText, body, closeModal }) => {
    const [shouldRender, setRender] = React.useState(false);

    React.useEffect(() => {
        if (opened) {
            setRender(true);
        }
    }, [opened]);

    const handleModalClosing = () => {
        closeModal();
        setRender(false);
    };

    return shouldRender && (
        <div
            data-testid={'modal'}
            className={'wrapper'}
            onClick={handleModalClosing}
        >
            <div className={'modal'}>
                <div className={'header'}>
                    <span>{headerText}</span>
                    <div
                        className={'cross'}
                        onClick={handleModalClosing}
                    />
                </div>
                <div className={'body'}>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Modal;