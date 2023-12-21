import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { icons } from "assets/icons";
import LeftsideDashboard from "components/dashboard/leftside.component";
import { images } from "assets/images";
import axios from "axios";
import { useDispatch } from "react-redux";
import { onThunkGetListUsers } from "views/example/store/thunk";
import Row from "./row";

type Props = RouteComponentProps;

const RankContainer: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      onThunkGetListUsers((data: any) => {
        const result = data.data;
        const dataff = {
          top1: { name: result[0]?.usrNm, point: result[0]?.totalPoint },
          top2: { name: result[1]?.usrNm, point: result[1]?.totalPoint },
          top3: { name: result[2]?.usrNm, point: result[2]?.totalPoint },
          other: [
            { rank: "4", name: result[3]?.usrNm, point: result[3]?.totalPoint },
            { rank: "5", name: result[4]?.usrNm, point: result[4]?.totalPoint },
            { rank: "6", name: result[5]?.usrNm, point: result[5]?.totalPoint },
          ],
        };
        setData(dataff);
      })
    );
  }, []);

  return (
    <div className="mt-5 flex w-full self-center">
      <LeftsideDashboard />

      <div className="ml-6 flex w-[76%] flex-col items-stretch px-10">
        {/* Title  */}
        <div className="text-zinc-900 max-md:max-w-full text-3xl font-bold">
          LeaderBoard
        </div>

        {/* rank 1, rank 2, rank 3 */}
        <table className="mt-5">
          <tr>
            {data?.top2?.name && (
              <td>
                <div className="text-zinc-900 my-auto flex h-[424px] flex-col justify-end text-center text-3xl font-bold">
                  <div className="flex justify-center">
                    <img
                      alt=""
                      loading="lazy"
                      src={icons.rank2}
                      className="aspect-square w-[300px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                    />
                  </div>
                  <div>
                    <div className="my-2">{data?.top2?.name}</div>
                    <div>
                      <div className="flex justify-center gap-1">
                        {data?.top2?.point}
                        <img
                          alt=""
                          loading="lazy"
                          src={images.star}
                          className="aspect-[0.82] h-full w-[27px] max-w-full shrink-0 self-start overflow-hidden object-contain object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            )}
            <td>
              <div className="text-zinc-900 my-auto text-center text-5xl font-bold">
                <div className="flex justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    src={images.rank1}
                    className="aspect-square w-[350px] max-w-full shrink-0 overflow-hidden object-contain object-center "
                  />
                </div>
                <div className="my-2">{data?.top1?.name}</div>
                <div>
                  <div className="flex justify-center gap-1">
                    {data?.top1?.point}
                    <img
                      alt=""
                      loading="lazy"
                      src={images.star}
                      className="aspect-[0.82] h-full w-[27px] max-w-full shrink-0 self-start overflow-hidden object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </td>
            {data?.top3?.name && (
              <td>
                <div className="text-zinc-900 items-between my-auto flex h-[424px] flex-col justify-end text-center text-2xl font-bold">
                  <div className="flex flex-col items-center justify-between">
                    <img
                      alt=""
                      loading="lazy"
                      src={images.rank3}
                      className="aspect-square w-[250px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                    />
                  </div>
                  <div>
                    <div className="my-2">{data?.top3?.name}</div>
                    <div>
                      <div className="flex justify-center gap-1">
                        {data?.top3?.point}
                        <img
                          alt=""
                          loading="lazy"
                          src={images.star}
                          className="aspect-[0.82] h-full w-[27px] max-w-full shrink-0 self-start overflow-hidden object-contain object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            )}
          </tr>
        </table>

        {/* rank others */}
        <div className="mt-5 flex w-full justify-center">
          <div className="text-zinc-900 my-auto w-full text-center text-xl font-bold">
            {data?.other?.map(
              (e: any, index: number) =>
                e.name && (
                  <Row
                    key={index}
                    rank={e.rank}
                    name={e.name}
                    point={e.point}
                  />
                )
            )}
          </div>
        </div>
      </div>

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

export default RankContainer;
