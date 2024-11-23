function CalculateWindChill(temperature, windSpeed, unit) {
    return unit ==='C'
    ?(13.12+0.3215 * temperature -11.37 * Math.pow(windSpeed, 0.16) +0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

if ((temperature <= 10 && windSpeed>4.8)){
    let windChillC = CalculateWindChill(4,7.9, 'C');
    console.log('Wind Chill:${windChillC}');
} else {
    windChillC = "N/A"
}

return windChillC;