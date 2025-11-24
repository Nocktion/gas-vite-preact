/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
export function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('client/index')
    .setTitle('Example Page')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

export function createJSONOutput_(content) {
  return ContentService.createTextOutput(JSON.stringify(content)).setMimeType(ContentService.MimeType.JSON);
}

export function createTextOutput_(content) {
  return ContentService.createTextOutput(content).setMimeType(ContentService.MimeType.TEXT);
}
