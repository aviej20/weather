async function fetchWeather(city){
    try{

        const fetchedData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=UGN6452BA647ZALQ65ZRCLT9F`);

        const weatherObjectData = await fetchedData.json();

        let weatherObject = {
        city: weatherObjectData.resolvedAddress,
        temp: weatherObjectData.days[0].temp,
        conditions: weatherObjectData.days[0].conditions,
        desc: weatherObjectData.days[0].description,
        icon: weatherObjectData.days[0].icon,
        week: [weatherObjectData.days[0], weatherObjectData.days[1], weatherObjectData.days[2], weatherObjectData.days[3], weatherObjectData.days[4], weatherObjectData.days[5], weatherObjectData.days[6], weatherObjectData.days[7], weatherObjectData.days[8], weatherObjectData.days[9]]
        };

        return weatherObject;
    }
    catch(err){
        console.log(err);
    }
}

export {fetchWeather};