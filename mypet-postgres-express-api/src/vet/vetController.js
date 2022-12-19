const pool = require('../../db');
const queries =  require('./vetQueries');


  const getVets = (req, res) => {
 
    pool.query(queries.getVets, (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getVetById = (req, res) => {
    const  vet_id = req.params.id;
    pool.query(queries.getVetById, [vet_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteVet = (req, res) => {
    
    const id = req.params.id;
    

    pool.query(queries.deleteVetWithId, [id], (err, result) => {
      if (err) {throw err;}
      else{
        res.json(result.rows);
        const is_vet = req.params.is_vet;
        pool.query(queries.updateUser, [is_vet], (err, result) => {
          if (err) throw (err);
            res.json(result.rows);
          
        });
      }
      
})
   
  };

  const updateVet = (req, res) => {
    const id = req.params.id;
    const {name, surname, username,  user_password, gender, email, phone_number, address, is_vet} = req.body;
    pool.query(queries.updateVet, [id, name, surname, username,  user_password, gender, email, phone_number, address, is_vet], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const addVet = (req, res) => {
    pool.query(queries.addVet, (err, result) => {
      if (err) throw (err);
      res.json(result.rows);
      
    });
  };

  module.exports = {getVets, getVetById, deleteVet, updateVet, addVet};