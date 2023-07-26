import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRatings } from "../redux/rankings/rankingSlice";
import RadioButtonGroup from "./RadioButtonGroup";
import StarInput from "./StarInput";

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedExpertiseRating, setSelectedExpertiseRating] = useState<
    number | null
  >(null);
  const [selectedClientSatisfaction, setSelectedClientSatisfaction] = useState<
    number | null
  >(null);

  const handleClick = (ratingValue: number, type: string) => {
    let newRating;
    if (type === "expertiseAndReputationRating") {
      newRating = selectedExpertiseRating === ratingValue ? null : ratingValue;
      setSelectedExpertiseRating(newRating);
    } else {
      newRating =
        selectedClientSatisfaction === ratingValue ? null : ratingValue;
      setSelectedClientSatisfaction(newRating);
    }
    dispatch(
      updateRatings({
        [type]: newRating === null ? null : newRating,
      })
    );
  };

  return (
    <div className="m-2">
      <RadioButtonGroup />
      <h4 className="text-xs text-gray-500 font-semibold md:text-sm">
        EXPERTISE AND REPUTATION
      </h4>
      <div>
        {[...Array(5)].map((_, index) => {
          const ratingValue = 5 - index;
          return (
            <div
              key={index}
              className={`hover:bg-gray-200 transition-colors duration-200 ${
                selectedExpertiseRating === ratingValue ? "bg-gray-200" : ""
              }`}
              onClick={() =>
                handleClick(ratingValue, "expertiseAndReputationRating")
              }
            >
              <StarInput numberofStars={ratingValue} />
            </div>
          );
        })}
      </div>
      <h4 className="text-xs font-semibold text-gray-500 md:text-sm">
        CLIENT SATISFACTION
      </h4>
      <div>
        {[...Array(5)].map((_, index) => {
          const ratingValue = 5 - index;
          return (
            <div
              key={index}
              className={`hover:bg-gray-200 transition-colors duration-200 ${
                selectedClientSatisfaction === ratingValue ? "bg-gray-200" : ""
              }`}
              onClick={() =>
                handleClick(ratingValue, "clientSatisfactionRating")
              }
            >
              <StarInput numberofStars={ratingValue} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
