const IsDeligue = (req, res, next) => {
  
    authhandler = req.user && req.user.role === "SUPERVISEUR";
  
    if (authhandler) {
      next()
    } else {
        const error = new Error("You ARE NOT Authorization");
        error.statusCode = 401;
        throw error;
    }
  };
  
  module.exports = IsDeligue ;