// This is a centralized error handler for formating the error message
// and turning all the unexpected errors or the one's that occur in the pixabay api
// to server error.

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? `Error ${statusCode} - An error occurred on the server`
        : `Error ${statusCode} - ${message}`,
    });
};
