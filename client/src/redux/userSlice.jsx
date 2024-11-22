import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  token: "",
  onlineUser: [],
  socketConnection: null,
};

export const userSlice = createSlice({
  name: "chatUser",
  initialState,
  reducers: {
    setUser: (state, action) => {
        // console.log("Dispatched setUser action payload:", action.payload)

      state._id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.token = "";
      state.socketConnection = null;
    },
    setOnlineUser: (state, action) => {
        console.log("Dispatched setOnlineUser action payload:", action.payload)
      state.onlineUser = action.payload;
    },
    setSocketConnection: (state, action) => {
      state.socketConnection = action.payload;
    },
  },
});

export const { setUser, setToken ,logout, setOnlineUser,setSocketConnection } = userSlice.actions

export default userSlice.reducer
