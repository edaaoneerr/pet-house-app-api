const pool = require('../../db');
const queries = require('./clinicQueries');

const getClinics = (req, res) => {
 
    pool.query(queries.getClinics, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getClinicById = (req, res) => {
    const  clinic_id = req.params.id;
    pool.query(queries.getClinicById, [clinic_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteClinic = (req, res) => {
    
    const id = req.params.id;
    pool.query(queries.deleteClinic, [id], (err, result) => {
           if (err) throw (err);
           res.json(`Clinic with clinic_id ${id} deleted successfully: ${result.rows}`);
       })
   
  };

  const updateClinic = (req, res) => {
    const id = req.params.id;
    const {clinic_name, clinic_address, clinic_phone_number, clinic_description, owner_id} = req.body;
    pool.query(queries.updateClinic, [clinic_name, clinic_address, clinic_phone_number, clinic_description, owner_id], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint c_name_unique") {
           res.json(`Clinic name already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`Clinic with clinic_id ${id} updated successfully : ${result.rows}`);
      
    }}
    );
  }


  const addClinic = (req, res) => {
    const {clinic_name, clinic_address, clinic_phone_number, clinic_description, owner_id} = req.body;
    pool.query(queries.addClinic, [clinic_name, clinic_address, clinic_phone_number, clinic_description, owner_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getClinics, getClinicById, deleteClinic, updateClinic, addClinic};