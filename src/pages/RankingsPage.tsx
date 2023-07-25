import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getRankings } from "../redux/rankings/rankingSlice";
import FirmCard from "../components/FirmCard";

function RankingsPage() {
  const { rankings, isLoading } = useSelector(
    (state: RootState) => state.rankings
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankings());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {rankings &&
        rankings.map((ranking) => (
          <FirmCard ranking={ranking} key={ranking.id} />
        ))}
    </>
  );
}

export default RankingsPage;
