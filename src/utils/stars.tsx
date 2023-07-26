import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

type IconTypeFunc = (props: IconBaseProps) => JSX.Element;

export const stars = (rating: number): IconTypeFunc[] => {
  const numberOfStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;

  const fullStars: IconTypeFunc[] = Array(numberOfStars).fill(FaStar);
  const halfStars: IconTypeFunc[] = halfStar ? [FaStarHalfAlt] : [];
  const emptyStars: IconTypeFunc[] = Array(5 - numberOfStars - halfStar).fill(
    FaRegStar
  );

  return [...fullStars, ...halfStars, ...emptyStars];
};
