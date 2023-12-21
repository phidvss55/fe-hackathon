import { badges } from "assets/badges";
import { icons } from "assets/icons";
import EditProfileButton from "components/buttons/edit-profile.button";
import LeftsideDashboard from "components/dashboard/leftside.component";
import { getPoints } from "core/lib/utils";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "core/store";
import { onThunkGetUserProfile } from "views/example/store/thunk";
import ProfileComponent from "./profile.component";

type Props = RouteComponentProps;

const ProfileContainer: React.FC<Props> = (props: Props) => {
  const { user } = useSelector((store: AppState) => store.app);
  const [claim, isClaim] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn, session_id } = useSelector(
    (state: AppState) => state.app
  );

  useEffect(() => {
    dispatch(onThunkGetUserProfile(session_id));
  }, [isLoggedIn]);

  return (
    <div className="mt-5 flex w-full self-center">
      <LeftsideDashboard />

      <div className="h-full w-[76%] py-6 px-8">
        <p className="mb-5 text-3xl font-bold">Profile</p>
        <div className="flex items-center gap-5">
          {/* User data */}
          <div className="flex flex-1">
            <svg
              width="192"
              height="192"
              viewBox="0 0 192 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M192 96C192 149.019 149.019 192 96 192C42.9807 192 0 149.019 0 96C0 42.9807 42.9807 0 96 0C149.019 0 192 42.9807 192 96ZM11.4701 96C11.4701 142.685 49.3154 180.53 96 180.53C142.685 180.53 180.53 142.685 180.53 96C180.53 49.3154 142.685 11.4701 96 11.4701C49.3154 11.4701 11.4701 49.3154 11.4701 96Z"
                fill="#00E272"
              />
              <path
                d="M168.708 95.9984C168.708 136.111 136.156 168.63 95.9996 168.63C55.8444 168.63 23.292 136.111 23.292 95.9984C23.292 55.8859 55.8444 23.3682 95.9996 23.3682C136.156 23.3682 168.708 55.8859 168.708 95.9984Z"
                fill="#00E272"
              />
              <path
                d="M141.655 140.883C139.12 131.879 132.092 124.832 123.089 122.266L106.48 117.532H96.0086H85.5377L68.9286 122.266C59.9248 124.832 52.8974 131.879 50.3627 140.883L45.793 148.496C58.8462 160.959 76.5253 168.63 96.0086 168.63C115.492 168.63 133.171 160.959 146.226 148.496L141.655 140.883Z"
                fill="#383838"
              />
              <path
                d="M105.795 104.181H96.0094H86.2238L83.1406 120.309C83.1406 120.309 88.6619 126.091 96.0094 126.394C103.358 126.091 108.879 120.309 108.879 120.309L105.795 104.181Z"
                fill="#F0F2F2"
              />
              <path
                d="M117.883 81.5521C117.883 94.7708 108.083 112.474 95.9923 112.474C83.9028 112.474 74.1025 94.7708 74.1025 81.5521C74.1025 68.3334 83.9028 57.6174 95.9923 57.6174C108.083 57.6174 117.883 68.3334 117.883 81.5521Z"
                fill="white"
              />
              <path
                d="M76.8776 83.3982C76.7738 85.9813 75.2347 89.3844 73.5087 89.3148C71.7826 89.2453 70.5232 85.7299 70.6271 83.1468C70.7309 80.5637 72.2151 78.526 73.9411 78.5956C75.6671 78.6651 76.9814 80.8151 76.8776 83.3982Z"
                fill="white"
              />
              <path
                d="M120.966 83.1677C121.054 85.752 119.771 89.2588 118.045 89.3174C116.318 89.3759 114.802 85.9631 114.714 83.3788C114.626 80.7956 115.955 78.653 117.681 78.5957C119.407 78.5371 120.878 80.5833 120.966 83.1677Z"
                fill="white"
              />
              <path
                d="M79.0916 58.5365C75.3476 67.072 90.6106 66.6193 94.903 66.1105C95.9731 65.9835 97.1531 65.6285 98.2109 65.8127C99.3872 66.0177 100.54 66.6315 101.767 66.8206C104.437 67.2318 107.204 67.0268 109.775 66.1983C110.364 66.0092 111.021 65.7908 111.576 66.0616C111.912 66.2264 112.142 66.5424 112.356 66.8499C113.365 68.3008 114.301 69.8395 114.763 71.5453C115.417 73.9602 115.079 76.5129 114.948 79.0107C114.869 80.5591 114.756 86.0477 116.765 86.415C117.07 83.8159 117.371 81.1997 117.673 78.5946C117.673 78.5946 119.847 70.74 119.081 66.629C117.882 60.2058 113.226 52.2475 94.6379 52.4452C81.7154 52.5818 79.1014 58.5133 79.0916 58.5365Z"
                fill="#AEAEAE"
              />
              <path
                d="M84.4374 63.0595C84.4008 63.2633 84.3006 63.4585 84.1223 63.6379C83.6752 64.0869 83.007 64.2065 82.4158 64.4335C80.5359 65.1559 79.3791 67.0082 78.3579 68.7421C77.702 69.8562 77.0277 71.0251 76.9458 72.3149C76.8335 74.0818 77.818 75.6266 78.0562 77.3325C78.2431 78.6772 77.9218 79.9084 77.5517 81.1908C77.3795 81.7887 76.0737 86.9381 75.0109 86.4097L74.1033 78.5942C74.1033 78.5942 71.929 70.7396 72.6961 66.6287C73.4376 62.6556 75.4043 57.8199 80.3527 59.1694C81.3641 59.4452 84.7123 61.5232 84.4374 63.0595Z"
                fill="#AEAEAE"
              />
            </svg>
            <div className="ml-8 flex flex-col gap-3">
              <p className="mb-1 text-2xl font-bold">{user?.usrNm}</p>
              {/* <p className="mb-1 text-xl ">maianh@gmail.com</p> */}
              {/* <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.2675 2.53753L12.3825 0.297072C12.2363 -0.091962 11.7788 -0.106023 11.6175 0.297072L10.7325 2.53753L8.77125 2.88907C8.4225 2.95469 8.2725 3.49371 8.53125 3.81712L9.95625 5.55137L9.61875 7.99338C9.56625 8.42928 9.92625 8.76676 10.2487 8.56521L12.0075 7.40279L13.755 8.54646C14.0775 8.74801 14.4413 8.41053 14.385 7.97463L14.0475 5.53262L15.4725 3.81712C15.7275 3.4984 15.5813 2.95937 15.2325 2.88907L13.2713 2.53753H13.2675ZM9.6 12.0009C8.93625 12.0009 8.4 12.6712 8.4 13.5008V22.5001C8.4 23.3297 8.93625 24 9.6 24H14.4C15.0638 24 15.6 23.3297 15.6 22.5001V13.5008C15.6 12.6712 15.0638 12.0009 14.4 12.0009H9.6ZM1.2 15.0007C0.53625 15.0007 0 15.6709 0 16.5006V22.5001C0 23.3297 0.53625 24 1.2 24H6C6.66375 24 7.2 23.3297 7.2 22.5001V16.5006C7.2 15.6709 6.66375 15.0007 6 15.0007H1.2ZM16.8 19.5003V22.5001C16.8 23.3297 17.3363 24 18 24H22.8C23.4638 24 24 23.3297 24 22.5001V19.5003C24 18.6707 23.4638 18.0004 22.8 18.0004H18C17.3363 18.0004 16.8 18.6707 16.8 19.5003Z"
                    fill="#454B54"
                  />
                </svg>
                <span className="text-base">
                  Leader board No
                  <span className="ml-2 font-semibold">#1</span>
                </span>
              </div> */}
              <div className="flex items-center">
                <img src={icons.pointsIcon} alt="" className="h-8 w-8" />
                <span>{`${user?.totalPoint} Points`}</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  {/* <img src={icons.Claim} alt="" className="h-8 w-8" /> */}
                  <icons.Claim />
                </div>
                <div>
                  <button
                    className="ml-auto flex gap-2 rounded-xl bg-primary-green py-3 px-3 text-lg font-semibold"
                    type="button"
                    onClick={() => isClaim(!claim)}
                  >
                    Claim
                  </button>
                </div>
                {claim && (
                  <div className="text-2xl text-red-500">
                    <p>The Reward is still not available! We are waiting...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Edit profile button */}
          <EditProfileButton />
        </div>

        <ProfileComponent />
      </div>
      {/* leave button */}
      <div className="absolute bottom-5 flex items-stretch gap-5 rounded-lg bg-primary-green py-5 px-10">
        <img
          alt=""
          loading="lazy"
          src={icons.signout}
          className="fill-zinc-900 aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"
        />
        <div className="text-zinc-900 my-auto self-center text-2xl font-semibold">
          Leave
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
