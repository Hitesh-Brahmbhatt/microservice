import { CustomError } from '../errors/custom-error';

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to Database';
  statusCode = 500;

  constructor() {
    super('DB Connection issue');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{
      message: this.reason
    }]
  }
}