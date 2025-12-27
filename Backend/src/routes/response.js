// response.js
module.exports = {
  success: (res, message, data = null) => {
    return res.status(200).json({
      status: "success",
      message: message,
      data: data
    });
  },

  error: (res, message, statusCode = 400) => {
    return res.status(statusCode).json({
      status: "error",
      message: message
    });
  }
};
