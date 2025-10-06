import { login, logout } from './userSlice';
import { saveUserCart } from './usersSlice';

export const loginUser = (userCredentials) => (dispatch, getState) => {
  const allUsers = getState().users.allUsers;

  const foundUser = allUsers.find(
    (user) =>
      user.email === userCredentials.email &&
      user.password === userCredentials.password
  );

  if (foundUser) {
    const userCart = foundUser.cart || [];

    dispatch(
      login({
        ...foundUser,
        cart: userCart,
      })
    );
    return { success: true };
  } else {
    return { success: false, message: '이메일 주소나 비밀번호가 틀립니다.' };
  }
};

export const logoutUser = () => (dispatch, getState) => {
  const { userData, cart } = getState().user;

  if (userData && userData.id) {
    dispatch(
      saveUserCart({
        userId: userData.id,
        cartItems: cart,
      })
    );
  }

  dispatch(logout());
};
