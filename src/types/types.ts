import type { Feature, FeatureCollection, LineString } from "geojson";

// Interace for properties in GeoJSON data
export interface BikeFacilityProperties {
  TranPlanID: string;
  SegmentName: string;
  Status: "ACTIVE" | "PLANNED";
  Facility: FacilityCode;
  YearBuilt: number | null;
  YearRetired: number | null;
  SCS: string | null;
  Shape_Length: number;
  LengthMiles: number;
}

export type BikeFacilityFeature = Feature<LineString, BikeFacilityProperties>;

export type BikeFacilityCollection = FeatureCollection<
  LineString,
  BikeFacilityProperties
>;

export type FacilityCode =
  | "ABL"
  | "BBBL"
  | "BL"
  | "BBL"
  | "ESR"
  | "LSB"
  | "NG"
  | "PBL"
  | "SBBL"
  | "SIR"
  | "TRL";

// Type to track quantity of facilities
export type FacilityDistribution = Record<FacilityCode, number>;
