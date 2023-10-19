function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDisplay = document.getElementById('result');
    
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDisplay.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature;
    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultDisplay.textContent = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F.`;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultDisplay.textContent = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C.`;
    }
}
