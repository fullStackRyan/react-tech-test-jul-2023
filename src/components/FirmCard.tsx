import { Ranking } from "../types/Types";
import { stars } from "../utils/stars";

type Props = {
  ranking: Ranking;
};

function FirmCard({ ranking }: Props) {
  const {
    firm: {
      name,
      firmRegions: [
        { expertiseAndReputationRating, clientSatisfactionRating, booking },
      ], // here I am making the assumption there is only one element in the array based on the response
    },
    position,
  } = ranking;

  const gridStyles = booking
    ? "grid grid-cols-[1fr,20fr] auto-rows-min md:grid-rows-2 bg-legalBlue p-2 border-solid border-2 border-white"
    : "grid grid-cols-[1fr,20fr] auto-rows-min md:grid-rows-1 bg-legalGrey p-2 border-solid border-2 border-white opacity-40";

  return (
    <div className={gridStyles}>
      <div className=" flex items-center justify-center md:row-span-2">
        <div className="border-2 rounded-full border-black bg-black text-legalBlue flex items-center justify-center h-3 w-3 md:h-6 md:w-6">
          {position + 1}
        </div>
      </div>
      <div className="text-lg font-bold col-span-20 flex items-center  ">
        {name}
      </div>

      {booking && (
        <div className="col-span-full flex-col justify-start md:flex md:flex-row md:col-start-2  ">
          <div className="m-1">EXPERTISE AND REPUTATION</div>
          <div className="flex flex-row items-center   m-1">
            {stars(expertiseAndReputationRating).map((StarFunc, index) => (
              <span key={index}>
                <StarFunc />
              </span>
            ))}
          </div>
          <div className="m-1">CLIENT SATISFACTION</div>
          <div className="flex flex-row items-center m-1">
            {stars(clientSatisfactionRating).map((StarFunc, index) => (
              <span key={index}>
                <StarFunc />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FirmCard;
