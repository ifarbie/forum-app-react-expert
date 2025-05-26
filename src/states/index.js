import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";
import authUserReducer from "./authUser/reducer";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import commentsReducer from "./comments/reducer";

const store = configureStore({
    reducer: {
      authUser: authUserReducer,
      users: usersReducer,
      threads: threadsReducer,
      threadDetail: threadDetailReducer,
      loadingBar: loadingBarReducer,
    },
  });
  
  export default store;