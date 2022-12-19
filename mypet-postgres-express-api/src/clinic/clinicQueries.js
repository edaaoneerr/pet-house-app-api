const getClinics = "SELECT * FROM clinic;";
const getClinicById = "SELECT * FROM Clinic WHERE clinic_id = $1;";
const deleteClinicWithId = "DELETE FROM clinic WHERE clinic_id = $1;";
const updateClinic = "UPDATE clinic SET clinic_name = $1, clinic_address = $2, clinic_phone_number = $3, clinic_description = $4, owner_id = $5 WHERE clinic_id = $6;";
const addClinic = "INSERT INTO clinic (clinic_name, clinic_address, clinic_phone_number, clinic_description, owner_id) VALUES ($1, $2, $3, $4, $5);";

module.exports = {getClinics, getClinicById,  deleteClinicWithId, updateClinic, addClinic};