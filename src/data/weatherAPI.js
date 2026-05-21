async function getData(location) {
  try {
    const apiResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${process.env.WEATHER_API_KEY}`,
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export { getData };
