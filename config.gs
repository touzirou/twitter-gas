var configSheet = SpreadsheetApp.openById(sheetId()).getSheetByName('config');
var configData = configSheet.getRange(1, 1, configSheet.getLastRow(), configSheet.getLastColumn()).getValues();
var config = {};
configData.forEach(function(e) {
    config[e[0]] = e[1];
});

function sheetId() {
    return SpreadsheetApp.getActiveSpreadsheet().getId();
}


function twitterConsumerKey() {
    return config['twitterConsumerKey'];
}


function twitterConsumerSecret() {
    return config['twitterConsumerSecret'];
}

function twitterAccessTokenKey() {
    return config['twitterAccessTokenKey'];
}

function twitterAccessTokenSecret() {
    return config['twitterAccessTokenSecret'];
}
