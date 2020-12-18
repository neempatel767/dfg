module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/keyboard')(router);
  require('./routes/mouse')(router);
  return router;
};