const getCardinalDirection = (direction) => {
  const dir = Math.round(direction * 10) / 10;
  // Direction range from 0 to 360 degree
  switch (true) {
    case dir > 337.5 || dir < 22.5:
      return "N";
    case dir > 22.5 && dir < 67.5:
      return "NE";
    case dir > 67.5 && dir < 112.5:
      return "E";
    case dir > 112.5 && dir < 157.5:
      return "SE";
    case dir > 157.5 && dir < 202.5:
      return "S";
    case dir > 202.5 && dir < 247.5:
      return "SW";
    case dir > 247.5 && dir < 292.5:
      return "W";
    case dir > 292.5 && dir < 337.5:
      return "NW";

    case dir === 22.5:
      return "NNE";
    case dir === 67.5:
      return "ENE";
    case dir === 112.5:
      return "ESE";
    case dir === 157.5:
      return "SSE";
    case dir === 202.5:
      return "SSW";
    case dir === 247.5:
      return "WSW";
    case dir === 292.5:
      return "WNW";
    case dir === 337.5:
      return "NNW";

    default:
      return "";
  }
};

export { getCardinalDirection };
