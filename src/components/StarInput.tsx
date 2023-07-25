import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

type StarInputProps = {
  numberofStars: number;
};

const StarInput = ({ numberofStars }: StarInputProps) => {
  const fullStars = Math.floor(numberofStars);
  const halfStar = numberofStars % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(numberofStars);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="m-1" />
      ))}
      {halfStar ? <FaStarHalfAlt className="m-1" /> : null}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i + fullStars + (halfStar ? 1 : 0)} className="m-1" />
      ))}
    </div>
  );
};

export default StarInput;
