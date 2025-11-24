export async function runGas(functionName, args = []) {
  return new Promise((resolve, reject) => {
    /* eslint-disable no-undef */
    // @ts-expect-error: google.script.run is a global provided by Google Apps Script
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      [functionName](...args);
  });
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
