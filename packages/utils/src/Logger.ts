export default class Logger {
  static log(level: string, message: string, error?: Error): void {
    const timestamp = new Date().toISOString();
    const stack = error ? error.stack : '';
    const formattedMessage = `[${timestamp}] [${level}] ${message} ${stack}`;
    switch (level.toUpperCase()) {
      case 'DEBUG':
        console.debug(formattedMessage);
        break;
      case 'INFO':
        console.info(formattedMessage);
        break;
      case 'WARN':
        console.warn(formattedMessage);
        break;
      case 'ERROR':
      case 'FATAL':
        console.error(formattedMessage);
        break;
      default:
        console.log(formattedMessage);
    }
  }

  static debug(message: string): void {
    this.log('DEBUG', message);
  }

  static info(message: string): void {
    this.log('INFO', message);
  }

  static warn(message: string): void {
    this.log('WARN', message);
  }

  static error(message: string, error?: Error): void {
    this.log('ERROR', message, error);
  }

  static fatal(message: string, error?: Error): void {
    this.log('FATAL', message, error);
  }
}

// 使用示例
// Logger.info('Application is starting...');
// Logger.error('Failed to load user data', new Error('Network Error'));
