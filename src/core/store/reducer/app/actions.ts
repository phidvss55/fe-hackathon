import { UserVM } from "core/view-models/user/user-vm";
import {
  SpinnerSetEnabledAction,
  SET_ENABLED_SPINNER,
  setOpenSidenavAction,
  OPEN_SIDENAV,
  setSidenavTypeAction,
  SIDENAV_TYPE,
  setSidenavColorAction,
  SIDENAV_COLOR,
  FIXED_NAVBAR,
  setFixedNavbarAction,
  setOpenNotificationAction,
  OPEN_NOTIFICATION,
  OPEN_SIDEVIEW,
  setOpenSideViewAction,
  SET_USER_PROFILE,
  SetUserProfileAction,
  CancelPreviousRequest,
  SetActiveNavItem,
  SetUserLoggiedIn,
  SET_USER_LOGGED_IN,
  SetUserSessionId,
  SET_USER_SESSION_ID,
  CANCEL_PREVIOUS_TOKEN,
} from "./types";

export const onSetActiveNavItem = (payload: number): SetActiveNavItem => ({
  type: "SET_ACTIVE_NAVITEM",
  payload,
});

export const onSetEnabledSpinner = (
  payload: boolean
): SpinnerSetEnabledAction => ({
  type: SET_ENABLED_SPINNER,
  payload,
});

export const setOpenSidenav = (payload: boolean): setOpenSidenavAction => ({
  type: OPEN_SIDENAV,
  payload,
});

export const setSidenavType = (payload: any): setSidenavTypeAction => ({
  type: SIDENAV_TYPE,
  payload,
});

export const setSidenavColor = (payload: any): setSidenavColorAction => ({
  type: SIDENAV_COLOR,
  payload,
});

export const setFixedNavbar = (payload: boolean): setFixedNavbarAction => ({
  type: FIXED_NAVBAR,
  payload,
});

export const setOpenNotification = (
  payload: any
): setOpenNotificationAction => ({
  type: OPEN_NOTIFICATION,
  payload,
});

export const setOpenSideView = (payload: boolean): setOpenSideViewAction => ({
  type: OPEN_SIDEVIEW,
  payload,
});

export const onSetUserProfileAction = (
  payload: UserVM
): SetUserProfileAction => ({
  type: SET_USER_PROFILE,
  payload,
});

export const onSetUserLoggedIn = (payload: boolean): SetUserLoggiedIn => ({
  type: SET_USER_LOGGED_IN,
  payload,
});

export const onSetUserSessionId = (payload: string): SetUserSessionId => ({
  type: SET_USER_SESSION_ID,
  payload,
});

export const onSetCancelToken = (payload: any): CancelPreviousRequest => ({
  type: CANCEL_PREVIOUS_TOKEN,
  payload,
});
