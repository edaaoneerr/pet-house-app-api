const pool = require('../../db');
const queries =  require('./districtQueries');


  const getDistricts = (req, res) => {
 
    pool.query(queries.getDistricts, (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getDistrictById = (req, res) => {
    const district_id = req.params.id;
    pool.query(queries.getDistrictById, [district_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteDistrict = (req, res) => {
    
    const id = req.params.id;
    

    pool.query(queries.deleteDistrictWithId, [id], (err, result) => {
      
      if (err) {
        throw err;
      }
      else{
        res.json(result.rows);
      }
      
})
   
  };

  const updateDistrict = (req, res) => {
    const id = req.params.id;
    const {district_name} = req.body;
    pool.query(queries.updateDistrict, [id, district_name], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const addDistrict = (req, res) => {

    const {id, district_name} = req.body;
    pool.query(queries.addDistrict, [id, district_name],(err, result) => {
      if (err) throw (err);
      res.json(result.rows);
      
    });
  };

  module.exports = {getDistricts, getDistrictById, deleteDistrict, updateDistrict, addDistrict};