import colors from "../assets/colors.module.scss";

export const bikeFacilities: Record<
  string,
  { description: string; mapClass: number }
> = {
  ABL: { description: "Advisory Bike Lane", mapClass: 2 },
  BBBL: { description: "Bike Lane Buffered by Bus Lane", mapClass: 2 },
  BL: { description: "Bike Lane", mapClass: 2 },
  BBL: { description: "Buffered Bike Lane", mapClass: 2 },
  ESR: { description: "Enhanced Shared Roadway", mapClass: 3 },
  LSB: { description: "Local Service Bikeway", mapClass: 3 },
  NG: { description: "Neighborhood Greenway", mapClass: 1 },
  PBL: { description: "Protected Bike Lane", mapClass: 4 },
  SBBL: { description: "Shared Bus-Bike Lane", mapClass: 2 },
  SIR: { description: "Separated in-roadway", mapClass: 4 },
  TRL: { description: "Off-Street Path/Trail", mapClass: 1 },
};

// TODO: Andrew update feature type
export const applyColor = (feature: any) => {
  const facility = feature.properties?.Facility;
  switch (facility) {
    case "ABL":
      return colors.tealLight;
    case "BBBL":
      return colors.tealDark;
    case "BL":
      return colors.slate;
    case "BBL":
      return colors.blue;
    case "ESR":
      return colors.orange;
    case "LSB":
      return colors.red;
    case "NG":
      return colors.primaryTeal;
    case "PBL":
      return colors.primaryNavy;
    case "SBBL":
      return colors.accentYellow;
    case "SIR":
      return "pink";
    case "TRL":
      return "purple";
    default:
      return "#3388ff";
  }
};
