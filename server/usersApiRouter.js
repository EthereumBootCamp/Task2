const router = require('express').Router();
const controller = require('./usersApiController');

  router.route('/')
  .post(controller.createOne)
  .get(controller.retrieve)
  .delete(controller.delete)
  

  router.route('/:id')
  .put(controller.updateOne)
  .get(controller.retrieveOne)
  .delete(controller.deleteOne)
  
  router.route('/role/:role')
  .get(controller.retrieveByRole)
  
module.exports = router;

  
