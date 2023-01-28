const pool = require('../../db');
const queries = require('./addressQueries');


const getAddresss = (req, res) => {
 
    pool.query(queries.getAddress, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getAddressById = (req, res) => {
    const  address_id = req.params.id;
    pool.query(queries.getAddressById, [address_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteAddress = (req, res) => {
    
    const id = req.params.id;
    pool.query(queries.deleteAddress, [id], (err, result) => {
           if (err) throw (err);
           res.json(`address with address_id ${id} deleted successfully.`);
       })
   
  };

  const updateAddress = (req, res) => {
    const id = req.params.id;
    const {address_name, owner_id, gender, vet_id, address_type, address_breed} = req.body;
    pool.query(queries.updateAddress, [address_name, owner_id, gender, vet_id, address_type, address_breed], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint addresss_addressname_key") {
           res.json(`addressname already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`address with address_id ${id} updated successfully.`);
      
    }}
    );
  }


  const addAddress = (req, res) => {
    const {address_name, owner_id, gender, vet_id, address_type, address_breed} = req.body;
    pool.query(queries.addAddress, [address_name, owner_id, gender, vet_id, address_type, address_breed], (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getAddress, getAddressById, deleteAddress, updateAddress, addAddress};