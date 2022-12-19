const pool = require('../../db');
const queries = require('./userQueries');
const vetQueries =  require('../vet/vetQueries');

const getUsers = (req, res) => {
 
    pool.query(queries.getUsers, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getUserById = (req, res) => {
    const  user_id = req.params.id;
    pool.query(queries.getUserById, [user_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteUser = (req, res) => {
    
    const id = req.params.id;
    const isVet = req.params.is_vet;
    pool.query(queries.deleteUser, [id], (err, result) => {
      if (isVet) {
        pool.query(vetQueries.deleteVetWithId, [id], (err, result) => {
          if (err) throw (err);
            res.json(`Vet with user_id ${id} deleted successfully.`);
      })
       }
       else{
           if (err) throw (err);
           res.json(`User with user_id ${id} deleted successfully.`);
       }})
   
  };

  const updateUser = (req, res) => {
    const id = req.params.id;
    const {name, surname, username,  user_password, gender, email, phone_number, address, is_vet} = req.body;
    pool.query(queries.updateUser, [id, name, surname, username,  user_password, gender, email, phone_number, address, is_vet], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint users_username_key") {
           res.json(`Username already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`User with user_id ${id} updated successfully.`);
      
    }}
    );
  }


  const addUser = (req, res) => {
    const {name, surname, username,  user_password, gender, email, phone_number, address, is_vet} = req.body;
    pool.query(queries.addUser, [name, surname, username,  user_password, gender, email, phone_number, address, is_vet], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getUsers, getUserById, deleteUser, updateUser, addUser};