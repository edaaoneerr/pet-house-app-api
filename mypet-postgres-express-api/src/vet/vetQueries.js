const getVets = "SELECT * FROM vet;";
const getVetById = "SELECT * FROM vet WHERE vet_id = $1;";
const deleteVetWithId = "DELETE FROM vet WHERE Vet_id = $1;";
const updateVet = "UPDATE USERS SET name = $2, surname = $3, username = $4,  user_password = crypt('$5', gen_salt('bf')), gender = $6, email = $7, phone_number = $8, address = $9, is_vet = $10 WHERE uuid('$1') IN (SELECT user_id FROM vet WHERE vet.user_id = users.user_id);";
const addVet = "INSERT INTO VET (Vet_id, st_id) VALUES ((SELECT Vet_ID FROM Vet WHERE IS_VET = TRUE ORDER BY c_date DESC LIMIT 1), (SELECT ST_ID FROM ST WHERE ST_NAME='IS_VET'));";

module.exports = {getVets, getVetById, deleteVetWithId, updateVet, addVet};