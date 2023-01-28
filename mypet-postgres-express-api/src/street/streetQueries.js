const getStreets = "SELECT * FROM street;";
const getStreetById = "SELECT * FROM street WHERE street_id = $1;";
const deleteStreetWithId = "DELETE FROM street WHERE street_id = $1;";
const updateStreet = "UPDATE STREET SET STREET_NAME = $2 WHERE street_id = $1;";
const addStreet = "INSERT INTO STREET (STREET_ID, STREET_NAME) VALUES ($1, $2);";

module.exports = {getStreets, getStreetById, deleteStreetWithId, updateStreet, addStreet};