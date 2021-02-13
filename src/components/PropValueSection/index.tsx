import * as React from 'react';

import './styles.less';

interface IProps {
    data: [string, string];
}

const Index: React.FC<IProps> = ({ data }) => {
    const [prop, value] = data;

    return (
        <div>
            <span className={'prop'}>{prop}: </span>
            <span>{value}</span>
        </div>
    );
};

export default Index;
