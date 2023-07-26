import RadioButtonGroup from "./RadioButtonGroup";
import StarGroup from "./StarGroup";

const Filters = () => {
  return (
    <div className="m-2">
      <RadioButtonGroup />
      <h4 className="text-xs text-gray-500 font-semibold md:text-sm">
        EXPERTISE AND REPUTATION
      </h4>
      <StarGroup ratingType="expertiseAndReputationRating" />
      <h4 className="text-xs font-semibold text-gray-500 md:text-sm">
        CLIENT SATISFACTION
      </h4>
      <div>
        <StarGroup ratingType="clientSatisfactionRating" />
      </div>
    </div>
  );
};

export default Filters;
