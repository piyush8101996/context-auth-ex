import { privatePageHoc } from '../hoc/PrivatePageHoc';

const User = () => {
    return (
        <h1>User</h1>
    );
};

export default privatePageHoc(User);