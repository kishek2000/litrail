import React from "react";
import { UserTrips, DefinedTrips } from "../constants";

export class User {
  constructor() {
    this.savedTrips = [];
    this.tripHistory = [];
  }

  addTrip(id) {
    this.savedTrips.push(GetTrip(id));
  }

  getSavedTrips() {
    return this.savedTrips;
  }

  deleteTrip(id) {
    this.savedTrips = this.savedTrips.filter((trips) => {
      return trips.id !== id;
    });
  }

  addToTripHistory(id) {
    const today = new Date();
    this.tripHistory.push({ trip: GetTrip(id), date: today });
  }
}

function GetTrip(id) {
  const Trip = DefinedTrips.filter((trip) => {
    return trip.id === id;
  });
  return Trip[0];
}
