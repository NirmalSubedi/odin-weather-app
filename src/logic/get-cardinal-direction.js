const getCardinalDirection = (winddir) => {
  switch (true) {
    case winddir > 337.5 || winddir < 22.5:
      return "N";
    case winddir > 22.5 && winddir < 67.5:
      return "NE";
    case winddir > 67.5 && winddir < 112.5:
      return "E";
    case winddir > 112.5 && winddir < 157.5:
      return "SE";
    case winddir > 157.5 && winddir < 202.5:
      return "S";
    case winddir > 202.5 && winddir < 247.5:
      return "SW";
    case winddir > 247.5 && winddir < 292.5:
      return "W";
    case winddir > 337.5 && winddir < 22.5:
      return "NW";

    case winddir === 22.5:
      return "NNE";
    case winddir === 67.5:
      return "ENE";
    case winddir === 112.5:
      return "ESE";
    case winddir === 157.5:
      return "SSE";
    case winddir === 202.5:
      return "SSW";
    case winddir === 247.5:
      return "WSW";
    case winddir === 292.5:
      return "WNW";
    case winddir === 337.5:
      return "NNW";

    default:
      return "Unknown";
  }
};

export { getCardinalDirection };
