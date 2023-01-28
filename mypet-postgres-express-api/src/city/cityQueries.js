const getCitys = "SELECT * FROM city;";
const getCityById = "SELECT * FROM city WHERE city_id = $1;";
const deleteCityWithId = "DELETE FROM city WHERE city_id = $1;";
const updateCity = "UPDATE city SET CITY_NAME = $2 WHERE city_id = $1;";
const addCity = "INSERT INTO city (CITY_ID, CITY_NAME) VALUES ($1, $2);";

module.exports = {getCitys, getCityById, deleteCityWithId, updateCity, addCity};