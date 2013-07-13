test('parse without header', function () {
    var input = 'asdf';

    throws(
        function () { CSV.parse(input); },
        /missing header/,
        'should say "missing header"'
    );
});

test('parse empty', function () {
    var input = '';

    throws(
        function () { CSV.parse(input); },
        /empty input/,
        'should say "empty input"'
    );
});

test('parse', function () {
    var input    = 'foo,bar\na,b',

        expected = '[\n' +
                       '\t{\n' +
                           '\t\t"foo": "a",\n' +
                           '\t\t"bar": "b"\n' +
                       '\t}\n' +
                   ']',

        actual   = JSON.stringify(CSV.parse(input), null, '\t');

    equal(actual, expected);
});
