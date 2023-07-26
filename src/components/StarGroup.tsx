import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRatings } from "../redux/rankings/rankingSlice";
import StarInput from "./StarInput";

type Props = {
  ratingType: string;
};

const StarGroup = ({ ratingType }: Props) => {
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
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = 5 - index;
        return (
          <div
            key={index}
            className={`hover:bg-gray-200 transition-colors duration-200 ${
              (ratingType === "expertiseAndReputationRating" &&
                selectedExpertiseRating === ratingValue) ||
              (ratingType === "clientSatisfactionRating" &&
                selectedClientSatisfaction === ratingValue)
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => handleClick(ratingValue, ratingType)}
          >
            <StarInput numberofStars={ratingValue} />
          </div>
        );
      })}
    </div>
  );
};

export default StarGroup;
