function showweatherDetails(e) {
    e.preventDefault();
    const city = document.getElementById('city').value.toLowerCase();
    const apiKey = '1bdb4beca58ddd8df4dea232646f30fe'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Clima em ${data.name}</h2>
        <p>Temperatura: ${data.main.temp} &#8451;</p>
        <p>Previsão do tempo: ${data.weather[0].description}</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
