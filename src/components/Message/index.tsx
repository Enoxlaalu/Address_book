import * as React from 'react';

import './styles.less';

interface IProps {
    message: string;
}

const Message: React.FC<IProps> = ({ message }) => {
    const [shouldRender, setRender] = React.useState(false);
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        if (message) {
            setRender(true);
            if (message) setText(message);
        }
    }, [message]);

    const onAnimationEnd = () => {
        setRender(false);
        setText('');
    };

    return shouldRender && (
        <div
            className={`message ${message ? 'activeMessage' : ''}`}
            onAnimationEnd={onAnimationEnd}
        >
            {text}
        </div>
    );
};

export default Message;