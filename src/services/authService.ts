import { AppDispatch } from '../redux_store/store';
import { login } from '../redux_store/authSlice';

export const authenticateUser = (username: string, password: string, dispatch: AppDispatch) => {
  if (username === 'admin' && password === '1234') {
    dispatch(login(username));
    return true;
  } else {
    console.log('Invalid Credentials');
    return false;
  }
};
