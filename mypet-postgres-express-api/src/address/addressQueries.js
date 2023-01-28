const getAddresss = "SELECT * FROM address;";
const getAddressById = "SELECT * FROM address WHERE address_id = $1;";
const deleteAddressWithId = "DELETE FROM address WHERE address_id = $1;";
const updateAddress = "UPDATE address SET address_name = $1, owner_id = $2, gender = $3, vet_id = $4, address_type = $5, address_breed = $6 WHERE address_id = $7;";
const addAddress = "INSERT INTO address (address_name, owner_id, gender, vet_id, address_type, address_breed) VALUES ($1, $2, $3, $4, $5, $6);";

module.exports = {getAddresss, getAddressById, deleteAddressWithId, updateAddress, addAddress};