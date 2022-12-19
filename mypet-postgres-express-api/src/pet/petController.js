const pool = require('../../db');
const queries = require('./PetQueries');


const getPets = (req, res) => {
 
    pool.query(queries.getPets, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getPetById = (req, res) => {
    const  pet_id = req.params.id;
    pool.query(queries.getPetById, [pet_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deletePet = (req, res) => {
    
    const id = req.params.id;
    pool.query(queries.deletePet, [id], (err, result) => {
           if (err) throw (err);
           res.json(`Pet with Pet_id ${id} deleted successfully.`);
       })
   
  };

  const updatePet = (req, res) => {
    const id = req.params.id;
    const {pet_name, owner_id, gender, vet_id, pet_type, pet_breed} = req.body;
    pool.query(queries.updatePet, [pet_name, owner_id, gender, vet_id, pet_type, pet_breed], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint Pets_Petname_key") {
           res.json(`Petname already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`Pet with Pet_id ${id} updated successfully.`);
      
    }}
    );
  }


  const addPet = (req, res) => {
    const {pet_name, owner_id, gender, vet_id, pet_type, pet_breed} = req.body;
    pool.query(queries.addPet, [pet_name, owner_id, gender, vet_id, pet_type, pet_breed], (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getPets, getPetById, deletePet, updatePet, addPet};