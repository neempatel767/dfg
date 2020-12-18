const {
    index,
    create,
    show,
    update,
    destroy
  } = require('../controllers/mouse');
  const passport = require('passport');
  
  module.exports = router => {
    // localhost:4000/mouse
    router.get('/mouse', index);
  
    // localhost:4000/mouse/id
    router.get('/mouse/:id', show);
  
    // localhost:4000/mouse
    router.post('/mouse', passport.authenticate('jwt', { session: false }), create);
  
    // localhost:4000/mouse/update
    router.post('/mouse/update', passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/mouse/destroy
    router.post('/mouse/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };