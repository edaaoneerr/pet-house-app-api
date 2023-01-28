const pool = require('../../db');
const queries =  require('./streetQueries');


  const getStreets = (req, res) => {
 
    pool.query(queries.getStreets, (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getStreetById = (req, res) => {
    const street_id = req.params.id;
    pool.query(queries.getStreetById, [street_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteStreet = (req, res) => {
    
    const id = req.params.id;
    

    pool.query(queries.deleteStreetWithId, [id], (err, result) => {
      
      if (err) {
        throw err;
      }
      else{
        res.json(result.rows);
      }
      
})
   
  };

  const updateStreet = (req, res) => {
    const id = req.params.id;
    const {street_name} = req.body;
    pool.query(queries.updateStreet, [id, street_name], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const addStreet = (req, res) => {

    const {id, street_desc} = req.body;
    pool.query(queries.addStreet, [id, street_name],(err, result) => {
      if (err) throw (err);
      res.json(result.rows);
      
    });
  };

  module.exports = {getStreets, getStreetById, deleteStreet, updateStreet, addStreet};