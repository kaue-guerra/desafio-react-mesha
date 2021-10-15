import axios from 'axios';

const URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY_WEATHER = '167d895e50f4b9a2d18adc336f80fd14';

export const apiWeather = async (city: string) => {
    const { data } = await axios.get(URL_WEATHER, {
        params: {
            q: city,
            units: 'metric',
            APPID: API_KEY_WEATHER,
        }
    });

    return data;
}

