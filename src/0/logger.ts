const loggingEnabled = false;

export const logger = (text: string, force?: boolean) => {
  if (loggingEnabled || force) {
    console.log(text);
  }
}