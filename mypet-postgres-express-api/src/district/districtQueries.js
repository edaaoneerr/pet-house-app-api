const getDistricts = "SELECT * FROM district;";
const getDistrictById = "SELECT * FROM district WHERE district_id = $1;";
const deleteDistrictWithId = "DELETE FROM district WHERE district_id = $1;";
const updateDistrict = "UPDATE district SET district_name = $2 WHERE district_id = $1;";
const addDistrict = "INSERT INTO district (DISTRICT_ID, DISTRICT_NAME) VALUES ($1, $2);";

module.exports = {getDistricts, getDistrictById, deleteDistrictWithId, updateDistrict, addDistrict};