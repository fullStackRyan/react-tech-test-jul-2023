import axios from "axios";
import {
  Ranking,
  Badge,
  FirmRegion,
  RankingID,
  LawFirmID,
  BadgeID,
  FirmRegionID,
  RegionID,
  RegionAreaID,
  RegionGroupID,
} from "../../types/Types";
import { convertToScaleOfFive } from "../../utils/convertToScaleOfFive";

if (!process.env.REACT_APP_API_KEY) {
  throw new Error("Missing necessary environment variable REACT_APP_API_KEY!");
}

const transformData = (data: any): Ranking => {
  return {
    id: data.id as RankingID,
    firm: {
      id: data.firm.id as LawFirmID,
      name: data.firm.name,
      slug: data.firm.slug,
      imageUrl: data.firm.imageUrl,
      websiteUrl: data.firm.websiteUrl,
      badges: data.firm.badges.map(
        (badge: any): Badge => ({
          id: badge.id as BadgeID,
          name: badge.name,
          slug: badge.slug,
        })
      ),
      awards: data.firm.awards,
      firmRegions: data.firm.firmRegions.map(
        (firmRegion: any): FirmRegion => ({
          id: firmRegion.id as FirmRegionID,
          region: {
            id: firmRegion.region.id as RegionID,
            name: firmRegion.region.name,
            slug: firmRegion.region.slug,
            regionGroup: {
              id: firmRegion.region.regionGroup.id as RegionGroupID,
              name: firmRegion.region.regionGroup.name,
              slug: firmRegion.region.regionGroup.slug,
              regionArea: {
                id: firmRegion.region.regionGroup.regionArea.id as RegionAreaID,
                name: firmRegion.region.regionGroup.regionArea.name,
                slug: firmRegion.region.regionGroup.regionArea.slug,
              },
            },
          },
          booking: firmRegion.booking,
          crossBorderCapability: firmRegion.crossBorderCapability,
          clientSatisfactionRating: convertToScaleOfFive(
            firmRegion.clientSatisfactionRating
          ),
          expertiseAndReputationRating: convertToScaleOfFive(
            firmRegion.expertiseAndReputationRating
          ),
        })
      ),
    },
    trend: data.trend,
    diversity: data.diversity,
    tier: data.tier,
    position: data.position,
  };
};

const getRankings = async () => {
  const config = {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  };

  const response = await axios.get(
    "https://legalease-code-test-api.infra.eu-west-1.wearespork.net/api/v1/rankings?regionId=170&practiceAreaId=326",
    config
  );

  const rankings: Ranking[] = response.data.map(transformData);

  return rankings;
};

const rankingService = {
  getRankings: getRankings,
};

export default rankingService;
