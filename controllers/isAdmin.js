const isAdmin = (req, res, next) => {
  
    authhandler = req.user && req.user.role === "ADMIN";
  
    if (authhandler) {
     next()
    } else {
        const error = new Error("You ARE NOT Authorization");
        error.statusCode = 401;
        throw error;
    }
  };
  
  module.exports = isAdmin;
  