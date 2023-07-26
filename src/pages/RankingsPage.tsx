import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getRankings } from "../redux/rankings/rankingSlice";
import FirmCard from "../components/FirmCard";
import { useFilteredFirms } from "../hooks/useFilteredFirms";

function RankingsPage() {
  const {
    rankings,
    isLoading,
    expertiseAndReputationRating,
    clientSatisfactionRating,
  } = useSelector((state: RootState) => state.rankings);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankings());
  }, [dispatch]);

  const filteredRankings = useFilteredFirms(
    rankings,
    expertiseAndReputationRating,
    clientSatisfactionRating
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (filteredRankings.length === 0) {
    return <div>No match rankings</div>;
  }

  return (
    <>
      {filteredRankings &&
        filteredRankings.map((ranking) => (
          <FirmCard ranking={ranking} key={ranking.id} />
        ))}
    </>
  );
}

export default RankingsPage;
