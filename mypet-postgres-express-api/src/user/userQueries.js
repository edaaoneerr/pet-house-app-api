const getUsers = "SELECT * FROM users;";
const getUserById = "SELECT * FROM users WHERE user_id = $1;";
const deleteUser = "DELETE FROM users WHERE user_id = $1);";
const updateUser = "UPDATE users SET name = $2, surname = $3, username = $4,  user_password = crypt($5, gen_salt('bf')), gender = $6, email = $7, phone_number = $8, address = $9, is_vet = $10 WHERE user_id = $1;";
const addUser = "INSERT INTO users (name, surname, username,  user_password, gender, email, phone_number, address, is_vet, st_id) VALUES ($1, $2, $3, crypt('$4', gen_salt('bf')), $5, $6, $7, $8, $9, (SELECT ST_ID FROM ST WHERE ST_NAME = 'IS_USER'));";

module.exports = {getUsers, getUserById, deleteUser, updateUser, addUser};