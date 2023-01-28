const pool = require('../../db');
const queries =  require('./cityQueries');


  const getCitys = (req, res) => {
 
    pool.query(queries.getCitys, (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getCityById = (req, res) => {
    const city_id = req.params.id;
    pool.query(queries.getCityById, [city_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteCity = (req, res) => {
    
    const id = req.params.id;
    

    pool.query(queries.deleteCityWithId, [id], (err, result) => {
      
      if (err) {
        throw err;
      }
      else{
        res.json(result.rows);
      }
      
})
   
  };

  const updateCity = (req, res) => {
    const id = req.params.id;
    const {CITY_NAME} = req.body;
    pool.query(queries.updateCity, [id, CITY_NAME], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const addCity = (req, res) => {

    const {id, CITY_NAME} = req.body;
    pool.query(queries.addCity, [id, CITY_NAME],(err, result) => {
      if (err) throw (err);
      res.json(result.rows);
      
    });
  };

  module.exports = {getCitys, getCityById, deleteCity, updateCity, addCity};