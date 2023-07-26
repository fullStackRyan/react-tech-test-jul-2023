export type Ranking = {
  id: RankingID;
  firm: Firm;
  trend: string; // check if this should be a union
  diversity: boolean;
  tier: string; // check if this should be a union
  position: number;
};

export type Firm = {
  id: LawFirmID;
  name: string;
  slug: string;
  imageUrl: string;
  websiteUrl: string;
  badges: Badge[];
  awards: string[]; //It's not clear from the API what type this should be
  firmRegions: FirmRegion[];
};

export type Badge = {
  id: BadgeID;
  name: string;
  slug: string;
};

export type FirmRegion = {
  id: FirmRegionID;
  region: Region;
  booking: boolean;
  crossBorderCapability: string; // check if this should be a union
  clientSatisfactionRating: number;
  expertiseAndReputationRating: number;
};

export type Region = {
  id: RegionID;
  name: string;
  slug: string;
  regionGroup: RegionGroup;
};

export type RegionGroup = {
  id: RegionGroupID;
  name: string;
  slug: string;
  regionArea: RegionArea;
};

export type RegionArea = {
  id: RegionAreaID;
  name: string;
  slug: string;
};

export type RankingState = {
  rankings: Ranking[];
  isLoading: boolean;
  expertiseAndReputationRating?: number | undefined;
  clientSatisfactionRating?: number | undefined;
};

export type RatingPayload = {
  expertiseAndReputationRating?: number | undefined;
  clientSatisfactionRating?: number | undefined;
};

export type RankingID = string;

export type LawFirmID = string;

export type BadgeID = string;

export type FirmRegionID = string;

export type RegionID = string;

export type RegionAreaID = string;

export type RegionGroupID = string;
