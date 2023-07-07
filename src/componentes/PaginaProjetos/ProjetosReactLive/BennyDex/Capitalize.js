function capitalize(str) {
  if (typeof str !== "string") {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeWords(str) {
  if (typeof str !== "string") {
    return "";
  }

  return str.split(" ").map(capitalize).join(" ");
}

export default capitalizeWords;
