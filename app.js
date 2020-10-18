const
    celsiusInput = document.querySelector('#celsius'),
    fahrenheitInput = document.querySelector('#fahrenheit'),
    result = document.querySelector('.result'),
    submit = document.querySelector('.ok'),
    loadIcon = document.querySelector('.load-icon'),
    tick = document.querySelector('.tick'),
    container = document.querySelector('.container');

submit.addEventListener('click', loader);

function loader(){
    console.log('hello');
    tick.style.display = 'none';
    loadIcon.style.display = 'block';
    setTimeout(results, 2000);
}

function results(){
    loadIcon.style.display = 'none';
    tick.style.display = 'block';
    if (celsiusInput.value === '' && fahrenheitInput.value === ''){
        error();
    } else if (celsiusInput.value !== ''){
        console.log('you input celsius');
        const celsius =  celsiusInput.value;
        celsiusToFahrenheit(celsius);
        const fahrenheit = fahrenheitInput.value;
        fahrenheitToCelsius(fahrenheit);
    } else if (fahrenheitInput.value !== ''){
        const fahrenheit = fahrenheitInput.value;
        fahrenheitToCelsius(fahrenheit);
    }
}

function celsiusToFahrenheit(celsius){
    fahrenheitInput.focus();
    const calculated = (celsius * 9/5) + 32;
    fahrenheitInput.value = calculated.toFixed(2);
}

function fahrenheitToCelsius(fahrenheit){
    celsiusInput.focus();
    const calculated = (fahrenheit - 32) * 5/9;
    celsiusInput.value = calculated.toFixed(2);
}

function error(){
    setTimeout(clearError, 3000);
    console.log('error');
    const error = document.createElement('div');
    error.innerHTML = '<h4 class = "error red darken-4">YOU MUST ENTER A NUMBER!</h4>';
    container.appendChild(error);
}

function clearError(){
    document.querySelector('.error').remove();
}