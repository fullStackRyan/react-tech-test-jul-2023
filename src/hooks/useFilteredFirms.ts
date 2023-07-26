import { useMemo } from "react";
import { Ranking } from "../types/Types";

export const useFilteredFirms = (
  ranking: Ranking[],
  expertiseAndReputationRating: number | undefined,
  clientSatisfactionRating: number | undefined
) => {
  return useMemo(() => {
    if (!expertiseAndReputationRating && !clientSatisfactionRating) {
      return ranking;
    }

    return ranking.filter(({ firm }) => {
      return firm.firmRegions.some((region) => {
        if (expertiseAndReputationRating && clientSatisfactionRating) {
          return (
            region.expertiseAndReputationRating ===
              expertiseAndReputationRating &&
            region.clientSatisfactionRating === clientSatisfactionRating
          );
        }
        if (expertiseAndReputationRating) {
          return (
            region.expertiseAndReputationRating === expertiseAndReputationRating
          );
        }
        if (clientSatisfactionRating) {
          return region.clientSatisfactionRating === clientSatisfactionRating;
        }
        return true;
      });
    });
  }, [ranking, expertiseAndReputationRating, clientSatisfactionRating]);
};
