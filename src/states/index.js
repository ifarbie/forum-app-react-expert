import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";
import authUserReducer from "./authUser/reducer";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import isPreloadReducer from "./isPreload/reducer";

const store = configureStore({
    reducer: {
      authUser: authUserReducer,
      isPreload: isPreloadReducer,
      users: usersReducer,
      threads: threadsReducer,
      threadDetail: threadDetailReducer,
      loadingBar: loadingBarReducer,
    },
  });
  
  export default store;