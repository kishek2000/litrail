import React from "react";
import { UserTrips, DefinedTrips } from "../constants";

export class User {
  constructor() {
    this.savedTrips = UserTrips;
  }

  addTrip(index) {
    this.savedTrips.push(DefinedTrips[index]);
  }

  deleteTrip(index) {
    this.savedTrips = this.savedTrips.splice(index);
  }
}
