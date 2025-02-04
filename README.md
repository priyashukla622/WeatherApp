# Weather WebApp
This is a Weather WebApp that fetches and displays the current weather of a city based on user input. The app uses the OpenWeatherMap API to fetch weather data and displays the temperature, humidity, and weather condition along with an appropriate weather icon.


## Features
- **City-based Weather**: Enter any city name to get the current weather.
- **Temperature, Humidity & Condition**: Displays the temperature (in Celsius), humidity, and weather condition (Clear, Cloudy, Rainy, etc.).
- **Weather Icons**: Displays relevant weather icons based on the weather condition.
- **Error Handling**: Displays an error message if the city is not found or if there's an issue fetching data.
- **Responsive Design**: Works on both desktop and mobile devices.


## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript** (with Promises and XMLHttpRequest for API integration)
- **OpenWeatherMap API** for fetching weather data.


## API Integration
- The weather data is fetched using the OpenWeatherMap API.
- The API is accessed using **XMLHttpRequest**, and the data is returned as a Promise.
- The response is parsed, and relevant weather information is displayed on the UI.


## Instructions for Running the Project Locall
1. **Clone or Download** this repository to your local machine.
2. Ensure you have a modern web browser (e.g., Google Chrome, Firefox) to run the app.
3. Open the project folder and double-click the `index.html` file to launch the app in your browser.
4. The app should work immediately, allowing you to input a city name and fetch the weather data.


## Example of Usage
1. Enter a city name (e.g., "London") in the input box.
2. Click the search button to see the current weather details (temperature, humidity, and weather condition).


## Error Handling
- If the city is not found or there is an error fetching the data, an error message ("City not found" or "Error fetching data") will be displayed.


## Challenges and Solutions
- **Challenge 1**: Fetching weather data asynchronously using `XMLHttpRequest`.
  - **Solution**: Implemented a Promise-based approach to handle asynchronous requests and process the response when the data is received.
  
- **Challenge 2**: Handling invalid city names gracefully.
  - **Solution**: Implemented error handling to display an appropriate error message when the city is not found or if the API fails.

## Project Files
- **index.html**: Contains the structure of the webpage.
- **styles.css**: Stylesheet for the UI design.
- **script.js**: JavaScript file handling API requests and UI updates.



