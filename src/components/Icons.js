import React from 'react';

import sunyDay from '../images/weather/sun.svg';
import sunyNight from '../images/weather/night.svg';
import cloudyDay from '../images/weather/cloudy_day.svg';
import cloudyNight from '../images/weather/cloudy_night.svg';
import rainyDay from '../images/weather/rainy_day.svg';
import rain from '../images/weather/rain.svg';
import storm from '../images/weather/storm.svg';
import snow from '../images/weather/snowflake.svg';

const Icons = (props) => {
    let icon;
    switch (true) {
        case props.iconId >= 200 && props.iconId < 300:
            icon = <img src={storm} alt="storm"></img>;
            break;
        case props.iconId >= 300 && props.iconId < 400:
            icon = <img src={rainyDay} alt="rainy day"></img>;
            break;
        case props.iconId >= 500 && props.iconId < 600:
            icon = <img src={rain} alt="rain"></img>;
            break;
        case props.iconId >= 600 && props.iconId < 700:
            icon = <img src={snow} alt="snow"></img>;
            break;
        case props.iconId >= 801 && props.iconId <= 804:
            icon = isDay(props.sunrise, props.sunset) ? <img src={cloudyDay} alt="cloudy day"></img> : <img src={cloudyNight} alt="cloudy night"></img>;
            break;
        case props.iconId === 800:
            icon = isDay(props.sunrise, props.sunset) ? <img src={sunyDay} alt="suny day"></img> : <img src={sunyNight} alt="suny night"></img>;
            break;
        default:
            icon = <img src={sunyDay} alt="sunyDay"></img>;
            break;
    }
    return icon;
}
const isDay = (sunrise, sunset) => {
    let d = new Date(),
        now = Math.round(d.getTime() / 1000);
    if (now >= sunrise && now <= sunset) {
        return true;
    }
    return false;
};

export default Icons
