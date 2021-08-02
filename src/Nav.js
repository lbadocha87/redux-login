import {
    logout,
    selectUser,
    selectUserToken
} from './reducers/userSlice';

import { useSelector, useDispatch } from 'react-redux';

const Nav = () => {
    const user = useSelector(selectUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();


    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user')
        dispatch(logout())
    }

    console.log(token);
    return (
        <nav>
            {user && <p>zalogowany user to: {user.username}</p>}
            {user && <a href="" onClick={handleLogout}>logout</a>}
        </nav>
    )
}

export default Nav;