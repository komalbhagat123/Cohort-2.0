
async function getWeather(city) {

    try {
        let apiKey = `5f40fef591d769250dbfe1a1180e6068`;

        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

        if(!data.ok){
            throw new Error("Something went wrong");
        }

        let newData = await data.json();
        console.log(newData);

    }
    catch (err) {
        console.log(err.message);
    }

}
getWeather("Nagpur");