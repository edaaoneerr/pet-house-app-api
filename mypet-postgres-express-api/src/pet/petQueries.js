const getPets = "SELECT * FROM pet;";
const getPetById = "SELECT * FROM pet WHERE pet_id = $1;";
const deletePetWithId = "DELETE FROM pet WHERE pet_id = $1;";
const updatePet = "UPDATE pet SET pet_name = $1, owner_id = $2, gender = $3, vet_id = $4, pet_type = $5, pet_breed = $6 WHERE pet_id = $7;";
const addPet = "INSERT INTO pet (pet_name, owner_id, gender, vet_id, pet_type, pet_breed) VALUES ($1, $2, $3, $4, $5, $6);";

module.exports = {getPets, getPetById, deletePetWithId, updatePet, addPet};