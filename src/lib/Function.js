export const kmhToMs = (kmh) => {
  const ms = (kmh * 1000) / 3600;
  return ms.toFixed(2);
};
export const ruWind = (wind) => {
  let tempWind = wind;
  if (tempWind.length > 2) tempWind = tempWind.substring(1);
  tempWind = tempWind.replace("S", "Ю");
  tempWind = tempWind.replace("N", "С");
  tempWind = tempWind.replace("E", "В");
  tempWind = tempWind.replace("W", "З");
  return fullWindName(tempWind) + " ";
};

const fullWindName = (wind) => {
  let tempWind = "";

  if (wind.length === 1) {
    if (wind.indexOf("С") >= 0) tempWind = "Северный";
    if (wind.indexOf("Ю") >= 0) tempWind = "Южный";
  } else {
    if (wind.indexOf("С") >= 0) tempWind = "Северо-";
    if (wind.indexOf("Ю") >= 0) tempWind = "Юго-";
  }
  if (wind.indexOf("З") >= 0) tempWind += "Западный";
  if (wind.indexOf("В") >= 0) tempWind += "Восточный";
  return tempWind;
};
