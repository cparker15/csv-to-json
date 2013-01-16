// See github.com/cparker15/csv-to-json

function parseCSVLine(wholeline) {
    var line = wholeline.split(',');
    fixSplitsInsideQuotes(line);
    trimWhitespace(line);
    trimQuotes(line);
    return line;
}

function fixSplitsInsideQuotes(line) {
    for (var i = 0; i < line.length; i++) {
        var chunk = line[i].replace(/^[\s]*|[\s]*$/g, "");
        var quote = "";
        if (chunk.charAt(0) === '"' || chunk.charAt(0) === "'") {
            quote = chunk.charAt(0);
        }
        if (quote !== "" && chunk.charAt(chunk.length - 1) === quote) {
            quote = "";
        }
        if (quote !== "") {
            var j = i + 1;

            if (j < line.length) {
                chunk = line[j].replace(/^[\s]*|[\s]*$/g, "");
            }

            while (j < line.length && chunk.charAt(chunk.length - 1) !== quote) {
                line[i] += ',' + line[j];
                line.splice(j, 1);
                chunk = line[j].replace(/[\s]*$/g, "");
            }

            if (j < line.length) {
                line[i] += ',' + line[j];
                line.splice(j, 1);
            }
        }
    }
}

function trimWhitespace(line) {
    for (var i = 0; i < line.length; i++) {
        line[i] = line[i].replace(/^[\s]*|[\s]*$/g, "");
    }
}

function trimQuotes(line) {
    for (var i = 0; i < line.length; i++) {
        if (line[i].charAt(0) === '"') {
            line[i] = line[i].replace(/^"|"$/g, "");
        } else if (line[i].charAt(0) === "'") {
            line[i] = line[i].replace(/^'|'$/g, "");
        }
    }
}

function removeEmptyRows(csvRows) {
    var output = [];
    for (var i = 0; i < csvRows.length; i++) {
        if (csvRows[i].replace(/^[\s]*|[\s]*$/g, '') !== "") {
            output.push(csvRows[i])
        }
    }
    return output;
}

function parseRows(csvRows) {
    var fields = [];
    for (var i = 0; i < csvRows.length; i++) {
        fields[i] = parseCSVLine(csvRows[i]);
    }
    return fields;
}

function convertToJson(fields) {
    var objArr = [];
    for (var i = 1; i < fields.length; i++) {
        if (fields[i].length > 0) {
             objArr.push({});
        }
        for (var j = 0; j < fields[i].length; j++) {
            objArr[i - 1][fields[0][j]] = fields[i][j];
        }
    }
    return objArr;
}


function csvToJson (csvText) {
    if (csvText === "") { throw("empty input"); }
    var csvRows = removeEmptyRows(csvText.split(/[\r\n]/g));
    if (csvRows.length < 2) { throw("missing header"); }
    var fields = parseRows(csvRows);
    var objArr = convertToJson(fields);
    var jsonText = JSON.stringify(objArr, null, "\t");
    return jsonText;
}
