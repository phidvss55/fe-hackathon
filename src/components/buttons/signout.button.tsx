import { icons } from "assets/icons";
import { routePaths } from "core/navigation/route-paths";
import {
  onSetUserLoggedIn,
  onSetUserSessionId,
} from "core/store/reducer/app/actions";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

type Props = {
  //
};

const SignoutButton: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSignout = () => {
    dispatch(onSetUserLoggedIn(false));
    dispatch(onSetUserSessionId(""));

    history.push(routePaths.auth.SignIn);
  };

  return (
    <button
      type="button"
      onClick={onSignout}
      className="absolute bottom-5 left-8 flex cursor-pointer items-stretch gap-5 rounded-lg bg-primary-green py-5 px-10"
    >
      <img
        alt=""
        loading="lazy"
        src={icons.signout}
        className="fill-zinc-900 aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"
      />
      <div className="text-zinc-900 my-auto self-center text-2xl font-semibold">
        Sign out
      </div>
    </button>
  );
};

export default SignoutButton;
