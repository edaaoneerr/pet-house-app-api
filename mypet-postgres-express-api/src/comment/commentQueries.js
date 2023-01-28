const getComments = "SELECT * FROM comment;";
const getCommentById = "SELECT * FROM comment WHERE comment_id = $1;";
const deleteCommentWithId = "DELETE FROM comment WHERE comment_id = $1;";
const updateComment = "UPDATE COMMENT SET COMMENT_DESC = $2 WHERE comment_id = $1;";
const addComment = "INSERT INTO COMMENT (OWNER_ID, COMMENT_DESC) VALUES ($1, $2);";

module.exports = {getComments, getCommentById, deleteCommentWithId, updateComment, addComment};