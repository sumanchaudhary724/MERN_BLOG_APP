class ErrorResponse extends Error {
  constructor(message) {
    super(message);
    this.codeStatus = this.codeStatus;
  }
}

module.exports = ErrorResponse;
