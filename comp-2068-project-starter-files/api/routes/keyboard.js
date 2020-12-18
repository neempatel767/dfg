const {
    index,
    
    create,
    show,
    update,
    destroy
  } = require('../controllers/keyboard');
  const passport = require('passport');
  
  module.exports = router => {
    // localhost:4000/keyboard
    router.get('/keyboard', index);
  
    // localhost:4000/keyboard/id
    router.get('/keyboard/:id', show);
  
    // localhost:4000/keyboard
    router.post('/keyboard', passport.authenticate('jwt', { session: false }), create);
  
    // localhost:4000/keyboard/update
    router.post('/keyboard/update', passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/keyboard/destroy
    router.post('/keyboard/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };