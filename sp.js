var inputs, index;

inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {
    inputs[index].type = 'text';
}

// one liner for javascript bookmarklet
// javascript:(function(){var inputs, index;inputs = document.getElementsByTagName('input');for (index = 0; index < inputs.length; ++index) {inputs[index].type = 'text';}})();
