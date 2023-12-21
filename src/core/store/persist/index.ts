import storage from "redux-persist/lib/storage";

export const PERSIST_CONFIG = {
  key: "root",
  storage,
  whitelist: ["app"], // save specific reducers
  blacklist: [], // don't save specific reducers
};
