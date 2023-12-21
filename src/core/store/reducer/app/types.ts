import { UserVM } from "core/view-models/user/user-vm";

// Describing the shape of the session's slice of state
export interface AppStates {
  isEnabledSpinner: boolean;
  openSidenav: boolean;
  sidenavColor: string;
  sidenavType: string;
  transparentNavbar: boolean;
  fixedNavbar: any;
  openNotification: boolean;
  isOpenSideView: boolean;
  role: string;
  coCd: string;
  username: string;
  fullName: string;
  coNm: string;
  phone: string;
  email: string;
  faxNo: string;
  logoUrl: string;
  cancelToken: any;
  activeItem: number;
  user: UserVM | undefined;
  isLoggedIn: boolean;
  session_id: string;
}

// Describing the different ACTION NAMES available
export const SET_ENABLED_SPINNER = "SET_ENABLED_SPINNER";
export const OPEN_SIDENAV = "OPEN_SIDENAV";
export const SIDENAV_TYPE = "SIDENAV_TYPE";
export const SIDENAV_COLOR = "SIDENAV_COLOR";
export const FIXED_NAVBAR = "FIXED_NAVBAR";
export const OPEN_NOTIFICATION = "OPEN_NOTIFICATION";
export const OPEN_SIDEVIEW = "OPEN_SIDEVIEW";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const CANCEL_PREVIOUS_TOKEN = "CANCEL_PREVIOUS_TOKEN";
export const SET_ACTIVE_NAVITEM = "SET_ACTIVE_NAVITEM";
export const SET_USER_LOGGED_IN = "SET_USER_LOGGED_IN";
export const SET_USER_SESSION_ID = "SET_USER_SESSION_ID";

export interface SpinnerSetEnabledAction {
  type: typeof SET_ENABLED_SPINNER;
  payload: boolean;
}
export interface setOpenSidenavAction {
  type: typeof OPEN_SIDENAV;
  payload: boolean;
}
export interface setSidenavTypeAction {
  type: typeof SIDENAV_TYPE;
  payload: string;
}
export interface setSidenavColorAction {
  type: typeof SIDENAV_COLOR;
  payload: string;
}
export interface setFixedNavbarAction {
  type: typeof FIXED_NAVBAR;
  payload: any;
}
export interface setOpenNotificationAction {
  type: typeof OPEN_NOTIFICATION;
  payload: boolean;
}

export interface setOpenSideViewAction {
  type: typeof OPEN_SIDEVIEW;
  payload: boolean;
}

export interface CancelPreviousRequest {
  type: typeof CANCEL_PREVIOUS_TOKEN;
  payload: any;
}
export interface SetActiveNavItem {
  type: typeof SET_ACTIVE_NAVITEM;
  payload: number;
}

// Start new session
export interface SetUserProfileAction {
  type: typeof SET_USER_PROFILE;
  payload: UserVM;
}
export interface SetUserLoggiedIn {
  type: typeof SET_USER_LOGGED_IN;
  payload: boolean;
}

export interface SetUserSessionId {
  type: typeof SET_USER_SESSION_ID;
  payload: string;
}

export type AppActionTypes =
  | SpinnerSetEnabledAction
  | setOpenSidenavAction
  | setSidenavTypeAction
  | setSidenavColorAction
  | setFixedNavbarAction
  | setOpenNotificationAction
  | setOpenSideViewAction
  | CancelPreviousRequest
  | SetActiveNavItem
  | SetUserProfileAction
  | SetUserLoggiedIn
  | SetUserSessionId;
