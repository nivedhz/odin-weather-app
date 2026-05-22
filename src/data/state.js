import cloudImg from "../assets/images/cloud-img.svg";
import rainImg from "../assets/images/cloud-rain-img.svg";
import stormImg from "../assets/images/cloud-storm-img.svg";
import snowImg from "../assets/images/snow-img.svg";
import sunImg from "../assets/images/sun-img.svg";

const imgConfig = {
  cloudy: cloudImg,
  rainy: rainImg,
  storm: stormImg,
  snow: snowImg,
  sun: sunImg,
};

const defaultHourlyData = [
  {
    time: "Now",
    img: imgConfig.cloudy,
    temperature: "81\u00B0",
  },
  {
    time: "1 AM",
    img: imgConfig.rainy,
    temperature: "79\u00B0",
  },
  {
    time: "2 AM",
    img: imgConfig.rainy,
    temperature: "78\u00B0",
  },
  {
    time: "3 AM",
    img: imgConfig.storm,
    temperature: "77\u00B0",
  },
  {
    time: "4 AM",
    img: imgConfig.storm,
    temperature: "76\u00B0",
  },
  {
    time: "5 AM",
    img: imgConfig.cloudy,
    temperature: "75\u00B0",
  },
  {
    time: "6 AM",
    img: imgConfig.sun,
    temperature: "76\u00B0",
  },
  {
    time: "7 AM",
    img: imgConfig.sun,
    temperature: "78\u00B0",
  },
  {
    time: "8 AM",
    img: imgConfig.sun,
    temperature: "80\u00B0",
  },
  {
    time: "9 AM",
    img: imgConfig.cloudy,
    temperature: "82\u00B0",
  },
  {
    time: "10 AM",
    img: imgConfig.cloudy,
    temperature: "84\u00B0",
  },
  {
    time: "11 AM",
    img: imgConfig.sun,
    temperature: "86\u00B0",
  },
  {
    time: "12 PM",
    img: imgConfig.sun,
    temperature: "88\u00B0",
  },
  {
    time: "1 PM",
    img: imgConfig.sun,
    temperature: "89\u00B0",
  },
  {
    time: "2 PM",
    img: imgConfig.cloudy,
    temperature: "90\u00B0",
  },
  {
    time: "3 PM",
    img: imgConfig.rainy,
    temperature: "87\u00B0",
  },
  {
    time: "4 PM",
    img: imgConfig.rainy,
    temperature: "85\u00B0",
  },
  {
    time: "5 PM",
    img: imgConfig.cloudy,
    temperature: "83\u00B0",
  },
  {
    time: "6 PM",
    img: imgConfig.cloudy,
    temperature: "81\u00B0",
  },
  {
    time: "7 PM",
    img: imgConfig.storm,
    temperature: "79\u00B0",
  },
  {
    time: "8 PM",
    img: imgConfig.rainy,
    temperature: "78\u00B0",
  },
  {
    time: "9 PM",
    img: imgConfig.cloudy,
    temperature: "77\u00B0",
  },
  {
    time: "10 PM",
    img: imgConfig.snow,
    temperature: "74\u00B0",
  },
  {
    time: "11 PM",
    img: imgConfig.cloudy,
    temperature: "73\u00B0",
  },
];

const defaultDailyData = [
  {
    day: "Today",
    date: "19/5",
    img: imgConfig.rainy,
    temperature: "81\u00B0",
  },
  {
    day: "Tuesday",
    date: "20/5",
    img: imgConfig.cloudy,
    temperature: "79\u00B0",
  },
  {
    day: "Wednesday",
    date: "21/5",
    img: imgConfig.storm,
    temperature: "77\u00B0",
  },
  {
    day: "Thursday",
    date: "22/5",
    img: imgConfig.sun,
    temperature: "84\u00B0",
  },
  {
    day: "Friday",
    date: "23/5",
    img: imgConfig.cloudy,
    temperature: "82\u00B0",
  },
  {
    day: "Saturday",
    date: "24/5",
    img: imgConfig.rainy,
    temperature: "80\u00B0",
  },
  {
    day: "Sunday",
    date: "25/5",
    img: imgConfig.snow,
    temperature: "74\u00B0",
  },
  {
    day: "Monday",
    date: "26/5",
    img: imgConfig.sun,
    temperature: "85\u00B0",
  },
  {
    day: "Tuesday",
    date: "27/5",
    img: imgConfig.storm,
    temperature: "78\u00B0",
  },
  {
    day: "Wednesday",
    date: "28/5",
    img: imgConfig.cloudy,
    temperature: "80\u00B0",
  },
];
const defaultSunriseTime = "6:42 AM";
const defaultSunsetTime = "6:42 PM";

export {
  defaultDailyData,
  defaultHourlyData,
  defaultSunriseTime,
  defaultSunsetTime,
};
