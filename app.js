const mongoose = require("mongoose");
const axios = require("axios");
const DataModel = require("./model");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017", (err) => {
  if (err) return console.error(err);
  console.log("mongodb connected");
});
console.log("server is up and running");

// axios instance with base url and app-token
const instance = axios.create({
  baseURL: "https://data.cityofnewyork.us/resource",
  headers: {
    "X-App-Token": process.env.APP_TOKEN,
  },
});

let initialOffset = 100;
const increaseOffsetBy = 20;
const limit = 2;
const iterateCount = 10;

const endpoint = "usc3-8zwd.json",
  filter = "city=New%20York",
  query = `$limit=${limit}&$offset=${initialOffset}`;

for (let i = 0; i < iterateCount; i++) {
  // fetching the data from the api
  (async () => {
    const { data: dataArray } = await instance.get(`${endpoint}?${filter}&${query}`);

    // saving the data into DB
    for (let data of dataArray) {
      // data fields might differ from endpoint to endpoint
      const newData = new DataModel({
        propertyId: data.property_id,
        propertyName: data.property_name,
        yearEnding: data.year_ending,
        address: data.address_1,
        city: data.city,
        postalCode: data.postcode,
        primaryPropertyType: data.primary_property_type_self_selected,
        primaryPropertyTypeManagerSelected: data.primary_property_type_portfolio_manager_calculated,
        largestPropertyUseTypeArea: data.largest_property_use_type_gross_floor_area_ft,
        yearBuilt: data.year_built,
        occupancy: data.occupancy,
        nationalMedianEnergyScore: data.national_median_energy_star_score,
        energyStarScore: data.energy_star_score,
        energyUseKbtuPerFt2: data.site_eui_kbtu_ft,
        energyUseKbtu: data.site_energy_use_kbtu,
        naturalGasUseKbtu: data.natural_gas_use_kbtu,
        generationDate: data.generation_date,
        releaseDate: data.release_date,
        borough: data.borough,
        longitude: data.longitude,
        latitude: data.latitude,
      });

      await newData.save((err, res) => {
        console.log(res);
      });
    }
  })();

  initialOffset += increaseOffsetBy;

}
