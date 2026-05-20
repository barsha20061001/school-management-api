const db = require("../config/db");
const calculateDistance = require("../utils/distance");

const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({
      success: false,
      message: "Latitude and longitude must be numbers",
    });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });
  });
};

const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      success: false,
      message: "Latitude and longitude are required",
    });
  }

  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);

  db.query("SELECT * FROM schools", (err, schools) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      success: true,
      data: sortedSchools,
    });
  });
};

module.exports = {
  addSchool,
  listSchools,
};

