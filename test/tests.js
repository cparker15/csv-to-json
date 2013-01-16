test("csv2json without header", function() {
    var input = "asdf";
    throws(
        function() { csvToJson(input); },
        /missing header/,
        "should say 'missing header'"
    );
});

test("csv2json empty", function() {
    var input = "";
    throws(
        function() { csvToJson(input); },
        /empty input/,
        "should say 'empty input'"
    );
});

test("csv2json", function() {
    var input = "foo,bar\na,b";
    var actual = csvToJson(input);
    var expected =
    '[\n'+
    '\t{\n'+
    '\t\t"foo": "a",\n'+
    '\t\t"bar": "b"\n'+
    '\t}\n'+
    ']'
    equal(actual, expected)
});

test("trim whitespace", function() {
    equal(trimWhitespace("as df", "as df"));
    equal(trimWhitespace("asdf", "asdf"));
    equal(trimWhitespace(" asdf ", "asdf"));
    equal(trimWhitespace("\tasdf ", "asdf"));
    equal(trimWhitespace("\t asdf ", "asdf"));
    equal(trimWhitespace(" as df ", "as df"));
});

test("trim quotes", function() {
    equal(trimWhitespace("\"asdf\"", "asdf"));
    equal(trimWhitespace("\'asdf\'", "asdf"));
    // ?
    equal(trimWhitespace("\''asdf\'", "asdf"));
    equal(trimWhitespace("\''''''asdf\'", "asdf"));
});

test("remove empty rows", function() {
    deepEqual(removeEmptyRows(['a','b']), ['a','b']);
    deepEqual(removeEmptyRows(['a','','b']), ['a','b']);
});

test("parse csv line", function() {
    deepEqual(parseCSVLine("a,b"), ['a','b']);
});

test("parse rows", function() {
    deepEqual(parseRows(['a,b','c,d']),[['a','b'],['c','d']])
});

test("convert to json", function() {
    deepEqual(convertToJson([['a','b'],['c','d']]), [{a:'c', b:'d'}])
    deepEqual(convertToJson([['a','b'],['c','d'],['e','f']]), [{a:'c', b:'d'},{a:'e',b:'f'}])
});
