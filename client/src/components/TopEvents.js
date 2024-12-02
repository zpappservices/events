import { useRouter } from "next/router";
import StyledImage from "./StyledImage";
import useApiRequest from "@/hooks/useApiRequest";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { formatDate } from "@/utils/time";

const TopEvents = ({ next }) => {
  const router = useRouter();

  const { data, error, loading, request } = useApiRequest({
    method: "get",
    url: "event/getallevent",
  });

  const getAllEvents = async () => {
    await request();
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  if (loading) {
    return (
      <div className="h-[200px] w-full flex justify-between items-center">
        <CircularProgress color="#FF7F50" className="mx-auto" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  const events = data?.data;
  return (
    <div className="w-full">
      <div className="bg-black px-2 py-3">
        <p className="text-[20px] leading-normal text-[#FF7F50] font-bold">
          Top events this week
        </p>
      </div>
      <div className="w-full grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6">
        {events?.length > 0 &&
          events?.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[249px] mx-auto cursor-pointer bg-gray-50 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden"
              onClick={() => router.push(`/${item?.id}`)}
            >
              <div>
                <StyledImage
                  src={item?.image_banner || "/img/event1.svg"}
                  className="w-full"
                />
              </div>

              <div className="py-2 px-3 pb-3">
                <p className="text-lg text-black font-semibold">
                  {item?.title}
                </p>
                <p className="font-inter text-xs font-medium bg-[#FF7F50] w-fit rounded-[8px] px-1.5 text-white">
                  {item?.category}
                </p>
                <p className="text-xs mt-1 font-medium text-black text-ellipsis">
                  <span className="mr-0.5">🗓️</span>{formatDate(item?.StartDate)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopEvents;
