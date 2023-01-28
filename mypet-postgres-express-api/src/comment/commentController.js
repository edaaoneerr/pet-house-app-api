const pool = require('../../db');
const queries =  require('./commentQueries');


  const getComments = (req, res) => {
 
    pool.query(queries.getComments, (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getCommentById = (req, res) => {
    const comment_id = req.params.id;
    pool.query(queries.getCommentById, [comment_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteComment = (req, res) => {
    
    const id = req.params.id;
    

    pool.query(queries.deleteCommentWithId, [id], (err, result) => {
      
      if (err) {
        throw err;
      }
      else{
        res.json(result.rows);
      }
      
})
   
  };

  const updateComment = (req, res) => {
    const id = req.params.id;
    const {comment_desc} = req.body;
    pool.query(queries.updateComment, [id, comment_desc], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const addComment = (req, res) => {

    const {owner_id, comment_desc} = req.body;
    pool.query(queries.addComment, [owner_id, comment_desc],(err, result) => {
      if (err) throw (err);
      res.json(result.rows);
      
    });
  };

  module.exports = {getComments, getCommentById, deleteComment, updateComment, addComment};