document.addEventListener("DOMContentLoaded", () => {
    const temp = 10; // in Celsius
    const windSpeed = 5; // in km/h

    const calculateWindChill = (t, v) => {
        if (t <= 10 && v > 4.8) {
            return (
                13.12 +
                0.6215 * t -
                11.37 * Math.pow(v, 0.16) +
                0.3965 * t * Math.pow(v, 0.16)
            ).toFixed(1);
        }
        return "N/A";
    };

    const windChill = calculateWindChill(temp, windSpeed);

    
    const windChillElement = document.getElementById("wind-chill");
    if (windChillElement) {
        windChillElement.textContent = `${windChill}°C`;
    }

    
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    
    console.log(`Temperature: ${temp}°C, Wind Speed: ${windSpeed} km/h, Wind Chill: ${windChill}`);
});
