/**
 * csv-to-json: A utility that converts data format from CSV to JSON.
 * Copyright (C) 2009-2013 Christopher Parker <http://www.cparker15.com/>
 *
 * csv-to-json is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * csv-to-json is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with csv-to-json.  If not, see <http://www.gnu.org/licenses/>.
 */

(function () {
    function setMessage (message, error) {
        var messageEl        = document.getElementById('message'),
            errorClass       = 'error',
            messageContainer = document.createElement('p');

        while (messageEl.lastChild) {
            messageEl.removeChild(messageEl.lastChild);
        }

        messageContainer.appendChild(document.createTextNode(message));
        messageEl.appendChild(messageContainer);

        if (error) {
            messageEl.className += ' ' + errorClass;
        } else {
            messageEl.className = messageEl.className.replace(new RegExp(' ' + errorClass, 'g'), '');
        }
    }

    window.onload = function () {
        document.getElementById('convertForm').onsubmit = function () {
            var csvField  = this.elements.csv,
                jsonField = this.elements.json,
                csvText   = csvField.value,
                csvObjects, jsonText;

            try {
                csvObjects = CSV.parse(csvText);

                jsonText = JSON.stringify(csvObjects, null, '\t');

                jsonField.value = jsonText;

                setMessage('CSV successfully converted to JSON.');
            } catch (e) {
                var message = 'Could not convert CSV to JSON: ' + e.message;

                setMessage(message, true);
            }

            return false;
        };
    };
}());
