// Import MySQL connection
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++ ) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function ogjToSql(ob) {
    var arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for(var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (My Big Dog => 'My Big Dog')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Marky Mark and...' => ["name='Marky Mark and...'"]}
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array to strings to a single comma-seperated string
    return arr.toString();
}