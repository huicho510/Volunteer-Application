// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index",{
      login: userLoggedIn(req)
    });
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login",{
      login: userLoggedIn(req)
    });
  });
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup", {
      login: userLoggedIn(req)
    });
  });

  app.get("/about", (req, res) => {
    // If the user already has an account send them to the members page

    res.render("about", {
      login: userLoggedIn(req)
    });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members",{
      login: userLoggedIn(req)
    });
  });
};


const userLoggedIn = function(req){
  let userLoggedIn = false;
    if(req.user) {
      userLoggedIn = true;
    }
    return userLoggedIn;
}
