const formatAddress = (address) =>
  address
    .split(" ")
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");

export { formatAddress };
