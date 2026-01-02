
/**
 * Core Clear Construction - Web App Entry Point
 * 
 * Function to serve the HTML interface
 */
function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Core Clear Construction - Client Portal')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Standard include function to load CSS/JS files into index.html
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Example function to fetch data from Google Sheets in the future
 * You can replace the mock data in constants.tsx with results from this function
 */
function getProjectData() {
  // const ss = SpreadsheetApp.getActiveSpreadsheet();
  // const sheet = ss.getSheetByName('ProjectStatus');
  // return sheet.getDataRange().getValues();
  return { status: "success" };
}
