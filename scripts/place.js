function CalculateWindChill(temperature, windSpeed, unit) {
    return unit ==='C'
    ? (13.12+0.3215 * temperature -11.37 * Math.pow(windSpeed, 0.16) +0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

let temperature = 4;
let windSpeed= 7.9;
let windChillC;

if ((temperature <= 10 && windSpeed>4.8)){
    let windChillC = CalculateWindChill(temperature, windSpeed, 'C');
    document.getElementById('windChillResult').innerHTML = `Wind Chill: ${windChillC.toFixed(2)}°C`;
} else {
    windChillC = "N/A";  
    document.getElementById('windChillResult').innerHTML = `Wind Chill: ${windChillC}`;
}
