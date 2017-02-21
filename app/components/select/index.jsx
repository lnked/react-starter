import Select from 'react-select';
import 'react-select/dist/react-select.css';

var Select = require('react-select');

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', clearableValue: false }
];

function logChange(val) {
    console.log("Selected: " + val);
}

<Select
    name="form-field-name"
    value="one"
    options={options}
    onChange={logChange}
/>


import Select from 'react-select';

/*
 * assuming the API returns something like this:
 *   const json = [
 *     { value: 'one', label: 'One' },
 *     { value: 'two', label: 'Two' }
 *   ]
 */

const getOptions = (input) => {
  return fetch(`/users/${input}.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { options: json };
    });
}

<Select.Async
    name="form-field-name"
    value="one"
    loadOptions={getOptions}
/>


var Select = require('react-select');

var isLoadingExternally = true;

<Select
  name="form-field-name"
    isLoading={isLoadingExternally}
    ...
/>


import { Creatable } from 'react-select';

function render (selectProps) {
  return <Creatable {...selectProps} />;
};


import React from 'react';
import { AsyncCreatable } from 'react-select';

function render (props) {
  // props can be a mix of Async, Creatable, and Select properties
  return (
    <AsyncCreatable {...props} />
  );
}


function cleanInput(inputValue) {
      // Strip all non-number characters from the input
    return inputValue.replace(/[^0-9]/g, "");
}   

<Select
    name="form-field-name"
    onInputChange={cleanInput}
/>



function onInputKeyDown(event) {
    switch (event.keyCode) {
        case 9:   // TAB
            // Extend default TAB behavior by doing something here
            break;
        case 13: // ENTER
            // Override default ENTER behavior by doing stuff here and then preventing default
            event.preventDefault();
            break;
    }
}

<Select
    {...otherProps}
    onInputKeyDown={onInputKeyDown}
/>

<instance>.focus();