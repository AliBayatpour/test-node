class HttpError extends Error {
  status;
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}
module.exports = HttpError;
