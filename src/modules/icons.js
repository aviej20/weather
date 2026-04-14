import snowIcon from '../icons/snowy-fill.svg';
import rainIcon from '../icons/rainy-fill.svg';
import fogIcon from '../icons/foggy-fill.svg';
import windIcon from '../icons/cloud-windy-fill.svg';
import partlyCloudyDayIcon from '../icons/sun-cloudy-fill.svg';
import clearDayIcon from '../icons/sun-fill.svg';
import clearNightIcon from '../icons/moon-clear-fill.svg';
import partlyCloudyNightIcon from '../icons/moon-cloudy-fill.svg';
import cloudyIcon from '../icons/cloudy-fill.svg';

const icons = {
    snow: snowIcon,
    rain: rainIcon,
    fog: fogIcon,
    wind: windIcon,
    'partly-cloudy-day': partlyCloudyDayIcon,
    'clear-day': clearDayIcon,
    'clear-night': clearNightIcon,
    'partly-cloudy-night': partlyCloudyNightIcon,
    cloudy: cloudyIcon,
};

export default function weatherIcon(weather){ 
    return icons[weather] || '';
}