var restify = require('restify');

exports.validateForm = function (req, res, next) {
  // No way this thing will not validate the request
  res.json({
    success: true,
    data: {
      valid: true
    }
  });
  return next();
};

exports.registerEvent = function(req, res, next) {
  event = new Event({
    foreign_id: req.body.event.id,
    url: req.body.event.url
  });

  event.save((err) => {
    if(err)
      return next(err);

    res.json({
      success: true
    });
    return next();
  });
};

exports.serviceInformation = function(req, res, next) {
  res.json({
    success: true,
    data: {
      "application_frontend_sref": "applications.apply",
      "view_participants_sref": "applications.view_participants",
      "organizer_view_sref": "applications.organizer"
    }
  });
  return next();
};

exports.deadlineChange = function(req, res, next) {
  res.json({
    success: true
  });
  return next();
}


exports.listEventApplications = function(req, res, next) {
  res.json({
    user: req.user,
    event: req.event
  });
  return next();
};