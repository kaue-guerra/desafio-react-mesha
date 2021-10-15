import { useState, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { apiWeather } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './styles';

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface WheatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}



const Home = (): JSX.Element => {


  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WheatherData>();

  const search = async (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {

    try {
      if (e.key === 'Enter') {
        const data: any = await apiWeather(city);
        setWeather(data);
        setCity('');
      }
    } catch {
      toast.error('Cidade não encontrada. Tente novamente')
    }
  }

  return (
    <Container>
      <input type="text" placeholder="Digite o nome da cidade" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={search} />
      {weather?.main &&
        <div className="city" >
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          </div>
        </div>
      }
    </Container >
  );
};

export default Home;
