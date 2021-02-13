import * as React from 'react';
import Index
    from 'src/components/PropValueSection';
import { getModalBodyData } from 'src/utils/HomePage/data';

import './styles.less';
import { IUser } from 'src/redux/types';

interface IProps {
    user: IUser
}

const ModalBody: React.FC<IProps> = ({ user }) => {
    const bodyData = getModalBodyData(user);

    return (
        <>
            {
                Array.from(bodyData).map(data => {
                    return <Index key={data[0]} data={data} />;
                })
            }
        </>
    );
};

export default ModalBody;