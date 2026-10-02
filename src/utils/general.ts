import type { FacilityCode } from "@/types/types";
import colors from "../assets/colors.module.scss";

export const bikeFacilities: Record<
  FacilityCode,
  { description: string; mapClass: number; color: string }
> = {
  ABL: {
    description: "Advisory Bike Lane",
    mapClass: 2,
    color: colors.forestGreen ?? "",
  },
  BBBL: {
    description: "Bike Lane Buffered by Bus Lane",
    mapClass: 2,
    color: colors.purple ?? "",
  },
  BL: {
    description: "Bike Lane",
    mapClass: 2,
    color: colors.accentYellow ?? "",
  },
  BBL: {
    description: "Buffered Bike Lane",
    mapClass: 2,
    color: colors.pink ?? "",
  },
  ESR: {
    description: "Enhanced Shared Roadway",
    mapClass: 3,
    color: colors.red ?? "",
  },
  LSB: { description: "Local Service Bikeway", mapClass: 3, color: "#ffffff" },
  NG: {
    description: "Neighborhood Greenway",
    mapClass: 1,
    color: colors.primaryTeal ?? "",
  },
  PBL: {
    description: "Protected Bike Lane",
    mapClass: 4,
    color: colors.blue ?? "",
  },
  SBBL: {
    description: "Shared Bus-Bike Lane",
    mapClass: 2,
    color: colors.maroon ?? "",
  },
  SIR: { description: "Separated in-roadway", mapClass: 4, color: "#ffffff" },
  TRL: {
    description: "Off-Street Path/Trail",
    mapClass: 1,
    color: colors.orange ?? "",
  },
};
