import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slice/toggleSlice";
import signupModalReducer from "./slice/signupModalSlice";
import signinModalReducer from "./slice/SigninModalSlice";
import blogsReducer from "./slice/blogsSlice";
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    signupModal: signupModalReducer,
    signinModal: signinModalReducer,
    blogs: blogsReducer,
  },
});
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import toggleReducer from "./slice/toggleSlice";
// import signupModalReducer from "./slice/signupModalSlice";
// import signinModalReducer from "./slice/SigninModalSlice";

// const rootReducer = combineReducers({
//   toggle: toggleReducer,
//   signupModal: signupModalReducer,
//   signinModal: signinModalReducer,
// });
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["toggle"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     root: persistedReducer,
//     middleware: [],
//   },
// });
// const persistor = persistStore(store);

// export { store, persistor };
