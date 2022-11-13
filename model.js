const mongoose = require("mongoose");

const DataModel = new mongoose.Schema({
  propertyId: String,
  propertyName: String,
  yearEnding: Date,
  address: String,
  city: String,
  postalCode: String,
  primaryPropertyType: String,
  primaryPropertyTypeManagerSelected: String,
  largestPropertyUseTypeArea: String,
  yearBuilt: String,
  occupancy: String,
  nationalMedianEnergyScore: String,
  energyStarScore: String,
  energyUseKbtuPerFt2: String,
  energyUseKbtu: String,
  naturalGasUseKbtu: String,
  generationDate: Date,
  releaseDate: Date,
  borough: String,
  longitude: String,
  latitude: String,
});

module.exports = new mongoose.model("DataModel", DataModel);
