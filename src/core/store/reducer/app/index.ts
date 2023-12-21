import {
  AppStates,
  AppActionTypes,
  SET_ENABLED_SPINNER,
  OPEN_SIDENAV,
  FIXED_NAVBAR,
  OPEN_NOTIFICATION,
  SIDENAV_COLOR,
  SIDENAV_TYPE,
  OPEN_SIDEVIEW,
  SET_USER_PROFILE,
  CANCEL_PREVIOUS_TOKEN,
  SET_ACTIVE_NAVITEM,
  SET_USER_LOGGED_IN,
  SET_USER_SESSION_ID,
} from "./types";

const initialState: AppStates = {
  isEnabledSpinner: false,
  openSidenav: false,
  sidenavColor: "blue",
  sidenavType: "dark",
  transparentNavbar: true,
  fixedNavbar: true,
  openNotification: false,
  isOpenSideView: false,
  coCd: "",
  username: "",
  fullName: "",
  coNm: "",
  phone: "",
  email: "",
  faxNo: "",
  role: "",
  logoUrl: "",
  cancelToken: undefined,
  // Start new state
  activeItem: 1,
  user: undefined,
  isLoggedIn: false,
  session_id: "",
};

export const appReducer = (
  state = initialState,
  action: AppActionTypes
): AppStates => {
  switch (action.type) {
    case SET_ENABLED_SPINNER: {
      return {
        ...state,
        isEnabledSpinner: action.payload,
      };
    }
    case OPEN_SIDENAV: {
      return {
        ...state,
        openSidenav: action.payload,
      };
    }
    case SIDENAV_TYPE: {
      return { ...state, sidenavType: action.payload };
    }
    case SIDENAV_COLOR: {
      return { ...state, sidenavColor: action.payload };
    }
    case FIXED_NAVBAR: {
      return { ...state, fixedNavbar: action.payload };
    }
    case OPEN_NOTIFICATION: {
      return { ...state, openNotification: action.payload };
    }
    case OPEN_SIDEVIEW: {
      return { ...state, isOpenSideView: action.payload };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_ACTIVE_NAVITEM: {
      return {
        ...state,
        activeItem: action.payload,
      };
    }
    case CANCEL_PREVIOUS_TOKEN: {
      return {
        ...state,
        cancelToken: action.payload,
      };
    }
    case SET_USER_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    case SET_USER_SESSION_ID: {
      return {
        ...state,
        session_id: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
