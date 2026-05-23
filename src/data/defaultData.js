import cloudImg from "../assets/images/cloud-img.svg";
import rainImg from "../assets/images/cloud-rain-img.svg";
import sunImg from "../assets/images/sun-img.svg";
import moonImg from "../assets/images/moon-img.svg";
import fogImg from "../assets/images/fog-img.svg";
import windImg from "../assets/images/wind-img.svg";
import snowImg from "../assets/images/snow-img.svg";

const imgConfig = {
  cloudy: cloudImg,
  "partly-cloudy-day": cloudImg,
  "partly-cloudy-night": cloudImg,
  rain: rainImg,
  "clear-day": sunImg,
  "clear-night": moonImg,
  fog: fogImg,
  wind: windImg,
  snow: snowImg,
};

const defaultHourlyData = [
  {
    datetime: "00:00",
    icon: "rain",
    temp: "79",
  },
  {
    datetime: "01:00",
    icon: "partly-cloudy-night",
    temp: "78",
  },
  {
    datetime: "02:00",
    icon: "cloudy",
    temp: "77",
  },
  {
    datetime: "03:00",
    icon: "rain",
    temp: "76",
  },
  {
    datetime: "04:00",
    icon: "cloudy",
    temp: "75",
  },
  {
    datetime: "05:00",
    icon: "cloudy",
    temp: "75",
  },
  {
    datetime: "06:00",
    icon: "partly-cloudy-day",
    temp: "76",
  },
  {
    datetime: "07:00",
    icon: "clear-day",
    temp: "78",
  },
  {
    datetime: "08:00",
    icon: "clear-day",
    temp: "80",
  },
  {
    datetime: "09:00",
    icon: "partly-cloudy-day",
    temp: "82",
  },
  {
    datetime: "10:00",
    icon: "cloudy",
    temp: "84",
  },
  {
    datetime: "11:00",
    icon: "rain",
    temp: "85",
  },
  {
    datetime: "12:00",
    icon: "clear-day",
    temp: "87",
  },
  {
    datetime: "13:00",
    icon: "clear-day",
    temp: "89",
  },
  {
    datetime: "14:00",
    icon: "partly-cloudy-day",
    temp: "90",
  },
  {
    datetime: "15:00",
    icon: "rain",
    temp: "88",
  },
  {
    datetime: "16:00",
    icon: "clear-day",
    temp: "86",
  },
  {
    datetime: "17:00",
    icon: "cloudy",
    temp: "84",
  },
  {
    datetime: "18:00",
    icon: "rain",
    temp: "82",
  },
  {
    datetime: "19:00",
    icon: "partly-cloudy-night",
    temp: "80",
  },
  {
    datetime: "20:00",
    icon: "cloudy",
    temp: "79",
  },
  {
    datetime: "21:00",
    icon: "rain",
    temp: "78",
  },
  {
    datetime: "22:00",
    icon: "clear-night",
    temp: "77",
  },
  {
    datetime: "23:00",
    icon: "partly-cloudy-night",
    temp: "76",
  },
];
const defaultDailyData = [
  {
    datetime: "2026-05-23",
    icon: "rain",
    temp: "82",
  },
  {
    datetime: "2026-05-24",
    icon: "cloudy",
    temp: "80",
  },
  {
    datetime: "2026-05-25",
    icon: "partly-cloudy-day",
    temp: "84",
  },
  {
    datetime: "2026-05-26",
    icon: "clear-day",
    temp: "88",
  },
  {
    datetime: "2026-05-27",
    icon: "rain",
    temp: "81",
  },
  {
    datetime: "2026-05-28",
    icon: "cloudy",
    temp: "79",
  },
  {
    datetime: "2026-05-29",
    icon: "cloudy",
    temp: "83",
  },
  {
    datetime: "2026-05-30",
    icon: "cloudy",
    temp: "77",
  },
  {
    datetime: "2026-05-31",
    icon: "partly-cloudy-day",
    temp: "85",
  },
  {
    datetime: "2026-06-01",
    icon: "clear-day",
    temp: "89",
  },
  {
    datetime: "2026-06-02",
    icon: "rain",
    temp: "80",
  },
  {
    datetime: "2026-06-03",
    icon: "cloudy",
    temp: "82",
  },
  {
    datetime: "2026-06-04",
    icon: "partly-cloudy-day",
    temp: "86",
  },
  {
    datetime: "2026-06-05",
    icon: "clear-day",
    temp: "90",
  },
  {
    datetime: "2026-06-06",
    icon: "rain",
    temp: "78",
  },
];

const defaultSunriseTime = "6:42";
const defaultSunsetTime = "18:42";

export {
  defaultDailyData,
  defaultHourlyData,
  defaultSunriseTime,
  defaultSunsetTime,
  imgConfig,
};
