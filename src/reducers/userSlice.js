import {createSlice} from '@reduxjs/toolkit';


const initialState = null;


export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {
      state = action.payload;
      return state;
    },
    logout: (state) => {
        state = null;
        return state;
    },   
  },

});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => {
    console.log(state);
   return state.user
};

export const selectUserToken = (state) => {
    return (state.user)?state.user.jwt_token:'';
 };

export default userSlice.reducer;