
function calculate() {
    var display = document.getElementsByName('display')[0];
    var expression = display.value;

    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}


window.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByTagName('input');
    var display = document.getElementsByName('display')[0];

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if button is inside a form

            var value = this.value;

            if (value === '=') {
                calculate();
            } else if (value === 'CLR') {
                display.value = '';
            } else {
                display.value += value;
            }
        });
    }
});
