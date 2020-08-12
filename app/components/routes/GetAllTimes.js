import { Time } from "./Time";

export function GetAllTimes(tripFinal, totalTrips) {
  const arr = [];
  for (let x = 1; x <= totalTrips; x++) {
    arr.push({
      startTime: Time(
        Math.floor(
          (tripFinal.times["startHour"] * 60 +
            x * tripFinal.times["timesInterval"]) /
            60
        ),
        (
          "0" +
          ((tripFinal.times["startHour"] * 60 +
            x * tripFinal.times["timesInterval"]) %
            60)
        ).slice(-2)
      ),
      endTime: Time(
        Math.floor(
          (tripFinal.times["startHour"] * 60 +
            x * tripFinal.times["timesInterval"] +
            tripFinal.times["totalMinutes"]) /
            60
        ),
        (
          "0" +
          ((tripFinal.times["startHour"] * 60 +
            x * tripFinal.times["timesInterval"] +
            tripFinal.times["totalMinutes"]) %
            60)
        ).slice(-2)
      ),
      startStopExtended: tripFinal.times["startStopExtended"],
      endStopExtended: tripFinal.times["endStopExtended"],
      nextTripTime: `${tripFinal.times["timesInterval"] * x} MIN`,
      duration: tripFinal.details["duration"],
      cost: tripFinal.details["cost"],
      uniqueId: x,
    });
  }
  return arr;
}
