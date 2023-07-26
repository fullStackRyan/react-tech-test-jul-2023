import { Ranking } from "../types/Types";

export const mockRankings: Ranking[] = [
  {
    id: "1",
    firm: {
      id: "firm1",
      name: "Firm 1",
      slug: "firm-1",
      imageUrl: "firm1.png",
      websiteUrl: "www.firm1.com",
      badges: [],
      awards: [],
      firmRegions: [
        {
          id: "firmRegion1",
          region: {
            id: "region1",
            name: "Region 1",
            slug: "region-1",
            regionGroup: {
              id: "regionGroup1",
              name: "Region Group 1",
              slug: "region-group-1",
              regionArea: {
                id: "regionArea1",
                name: "Region Area 1",
                slug: "region-area-1",
              },
            },
          },
          booking: true,
          crossBorderCapability: "high",
          clientSatisfactionRating: 1,
          expertiseAndReputationRating: 1,
        },
      ],
    },
    trend: "up",
    diversity: true,
    tier: "tier1",
    position: 1,
  },
  {
    id: "2",
    firm: {
      id: "firm2",
      name: "Firm 2",
      slug: "firm-2",
      imageUrl: "firm2.png",
      websiteUrl: "www.firm2.com",
      badges: [],
      awards: [],
      firmRegions: [
        {
          id: "firmRegion2",
          region: {
            id: "region2",
            name: "Region 2",
            slug: "region-2",
            regionGroup: {
              id: "regionGroup2",
              name: "Region Group 2",
              slug: "region-group-2",
              regionArea: {
                id: "regionArea2",
                name: "Region Area 2",
                slug: "region-area-2",
              },
            },
          },
          booking: true,
          crossBorderCapability: "high",
          clientSatisfactionRating: 2,
          expertiseAndReputationRating: 2,
        },
      ],
    },
    trend: "down",
    diversity: true,
    tier: "tier2",
    position: 2,
  },
];
