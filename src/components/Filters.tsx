import StarInput from "./StarInput";
import RadioButtonGroup from "./RadioButtonGroup";

const Filters = () => {
  return (
    <div className="m-2">
      <RadioButtonGroup />
      <h4 className="text-xs text-gray-500 font-semibold md:text-sm">
        EXPERTISE AND REPUTATION
      </h4>
      <div>
        {[...Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              className="hover:bg-gray-200 transition-colors duration-200"
            >
              <StarInput numberofStars={5 - index} />
            </div>
          );
        })}
      </div>
      <h4 className="text-xs font-semibold text-gray-500 md:text-sm">
        CLIENT SATISFACTION
      </h4>
      <div>
        {[...Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              className="hover:bg-gray-200 transition-colors duration-200"
            >
              <StarInput numberofStars={5 - index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
