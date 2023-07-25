import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

type IconTypeFunc = (props: IconBaseProps) => JSX.Element;

export const stars = (rating: number): IconTypeFunc[] => {
  // assumption that 1000 is the highest possible number
  const percentage = Math.round((rating / 1000) * 100);
  const numberOfStars = Math.floor(percentage / 20);
  const halfStar = percentage % 20 >= 10 ? 1 : 0;

  const fullStars: IconTypeFunc[] = Array(numberOfStars).fill(FaStar);
  const halfStars: IconTypeFunc[] = halfStar ? [FaStarHalfAlt] : [];
  const emptyStars: IconTypeFunc[] = Array(5 - numberOfStars - halfStar).fill(
    FaRegStar
  );

  return [...fullStars, ...halfStars, ...emptyStars];
};
