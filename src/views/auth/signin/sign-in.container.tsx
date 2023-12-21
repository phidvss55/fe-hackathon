import * as React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { images } from "assets/images";
import InputBase from "components/form/InputBase";
import { routePaths } from "core/navigation/route-paths";
import { useDispatch, useSelector } from "react-redux";
import { onThunkSignIn } from "views/example/store/thunk";
import { SignInReqVM } from "core/view-models/auth/sign-in-vm";
import { AppState } from "core/store";
import { toast } from "react-toastify";
import ModePopup from "components/widgets/mode.popup";
import {
  onSetUserLoggedIn,
  onSetUserSessionId,
} from "core/store/reducer/app/actions";

type Props = RouteComponentProps;

const SignInContainer: React.FunctionComponent<Props> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: AppState) => state.app);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [showMode, setShowMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push(routePaths.dashboard);
    }
  }, [isLoggedIn]);

  const onClickSignIn = () => {
    const payload: SignInReqVM = {
      usrId: form.email,
      usrPwd: form.password,
    };

    dispatch(
      onThunkSignIn(payload, (data) => {
        if (data.data) {
          dispatch(onSetUserSessionId(data.SESSION_ID));
          setShowMode(true);
        }
      })
    );
  };

  const onClickModeModal = () => {
    toast.success("Welcome");
    dispatch(onSetUserLoggedIn(true));
    history.push(routePaths.dashboard);
  };

  const onKeyDownLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSignIn();
    }
  };

  return (
    <div className="bg-white">
      <div className=" max-md:gap-0 flex gap-5">
        <div className="max-md:w-full max-md:ml-0 flex w-[60%] flex-col items-stretch">
          <div className="max-md:max-w-full max-md:px-5 flex w-full grow flex-col bg-white px-52 py-12">
            <img
              alt=""
              loading="lazy"
              src={images.logo}
              className="mt-24 aspect-[3.48] w-[365px] max-w-full self-start overflow-hidden object-contain object-center"
            />
            <div className="text-zinc-900 mt-2.5 w-full self-center text-3xl font-semibold italic">
              Take it easy!
            </div>
            <InputBase
              label=""
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              containerProps={{
                className: "mt-20",
              }}
              placeholder="Enter your username here"
              classNameProps="w-full !h-full"
              customClass="text-neutral-600 max-w-full items-start rounded-lg border border-solid border-gray-400 bg-white py-6 pl-4 pr-16 !text-lg"
              onEventKeyUp={(e) => onKeyDownLogin(e)}
            />

            <InputBase
              label=""
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              type="password"
              containerProps={{
                className: "mt-4",
              }}
              placeholder="Enter your passwrod here"
              classNameProps="w-full"
              customClass="text-neutral-600 max-w-full items-start rounded-lg border border-solid border-gray-400 bg-white py-6 pl-4 pr-16 !text-lg"
              onEventKeyUp={(e) => onKeyDownLogin(e)}
            />

            <button
              onClick={onClickSignIn}
              type="button"
              className=" mt-11 w-full max-w-full items-center justify-center self-center whitespace-nowrap rounded-lg bg-primary-green px-16 py-5 text-lg font-medium text-white"
            >
              Login
            </button>

            <div className="max-md:my-10 mt-12 self-center whitespace-nowrap text-base text-gray-800">
              Don’t have an account?&nbsp;
              <a
                href={routePaths.auth.SignUp}
                className="text-primary-blue-600 hover:text-primary-blue-300"
              >
                Signup
              </a>
            </div>
          </div>
        </div>

        <div className="ml-5 h-[100vh] w-[40%] flex-col items-stretch">
          <img
            alt=""
            loading="lazy"
            src={images.leftLogin}
            className="max-md:max-w-full aspect-[0.74] h-[100vh] w-full grow overflow-hidden object-center"
          />
        </div>
      </div>

      {showMode && <ModePopup onClick={onClickModeModal} />}
    </div>
  );
};

export default SignInContainer;
