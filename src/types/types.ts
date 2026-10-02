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

export type FacilityDistribution = Record<FacilityCode, number>;
