# Project4_gr10

![Map](https://github.com/mhosseinf/project4_gr10/assets/139053922/064e2392-f220-45b8-99da-abe593d53d3f)



## Content

| No | Content                             | 
|----|-------------------------------------|
| 1  | Project details                     | 
| 1.1| Title of Project                    | 
| 1.2| Team                                | 
| 1.3| Tools                               | 
| 1.4| Project Overview                    | 
| 1.5| Project Duration                    |
| 1.6| Objectives                          | 
| 1.7| Resources                           | 
| 1.8| Methodology                         | 
| 1.9| Data Analysis                       | 
|1.10| Limitations                         | 
| 2  | Data                                | 
| 2  | Import Data - API                   | 
| 2.1| Sorting API Key                     | 
| 2.2| Developing Code                     | 
| 2.3| Data Cleaning                       | 
| 3  | Machine Learning                    |
| 3.1| Rain Forecast - Hieu                | 
| 3.2| Site Visit Route Trips              | 
| 4  | Visualization                       | 
| 4  | Map                                 | 
| 4.1| JSONify Data                        | 
| 4.2| JavaScript                          | 
| 4.3| HTML                                | 
| 4.4| CSS                                 |


## 1-Project Details

### Project Title: "Rain Forecast and Maintenance Optimisation all over WA"
### Team: 
- Hossein Falsafi
- Foluke Daramola
- Hieu Lam

### 1-3) Tools:
- Python Pandas (Panda, NumPy, Pathlib, API request)
- Python Matplotlib
- K-means clustering algorithm from Scikit-learn
- Neural Networking Machine learning (TensorFlow / Keras, Keras Tuner)
- Spark
- JavaScript
- HTML (D3 Library, Leaflet, Plotly)
- CSS

### 1-4) Project Overview:
The "PerthRainFlow Forecast and Maintenance Optimisation System" is a comprehensive project designed to forecast rain and optimise maintenance strategies for approximately 225 weather stations across WA.

### 1-5) Project Duration:
December 19, 2023, to January 9, 2024

### 1-6) Objectives:

- Use machine learning to define a model to Forecast rainfall using historical data.
- Analyse the distribution of weather stations across western Australia (North, Metro, South).
- Identify stations providing sufficient data for machine learning and forecasting.
- Develop optimal maintenance routes based on geographical proximity.
- Visualise the station on the map as well as the maintenance route tripes

### 1-7) Resources:
Data source: [WA Government Department of Primary Industries and Regional Development]
https://weather.agric.wa.gov.au/

### 1-8) Methodology:

- Collect data from reliable sources, primarily [DPIRD Weather API](https://www.wa.gov.au/organisation/department-of-primary-industries-and-regional-development).
- Use Python Pandas and Matplotlib for data conversion (ETL) into JavaScript.
- Apply machine learning techniques integrated with mapping for optimal cluster identification. Utilise machine learning for rainfall forecasting.
- Determine the correlation between rain flow and water level.

### 1-9) Data Required for Analysis:
Rainfall forecasting involves the analysis of various meteorological parameters crucial for predicting precipitation. Key factors include the amount and intensity of **rainfall** over specific periods, such as hourly or daily measurements. **Humidity**, expressed as *relative humidity*, plays a vital role, indicating the moisture content in the air relative to its maximum capacity at a given temperature. Warmer air temperatures can hold more moisture, influencing precipitation likelihood. **Atmospheric pressure**, particularly in *low-pressure systems*, often leads to rising air and cloud formation. **Wind speed and direction** contribute to moisture transport and precipitation patterns. **Cloud cover**, considering types and altitudes, especially *cumulonimbus clouds*,  is associated with heavy rainfall. **Weather patterns**, including the interaction of air masses in *fronts*, can lead to airlifting and subsequent precipitation. **Topography** influences rainfall through *orographic lift*, as air rises over mountains, cools, and condenses moisture. **Satellite imagery** and **radar data** are essential for observing cloud patterns, detecting precipitation, and estimating intensity. **Historical data** on past rainfall patterns in a region provide valuable insights into seasonal trends, contributing to comprehensive rainfall forecasting analysis.


### 1.10) Limitations
- Our rain prediction model relies on crucial factors like precipitation, humidity, air temperature, and wind speed. However, it's important to note that we only have information on a few out of many factors affecting rainfall. We lack data on things like atmospheric pressure, cloud cover, weather patterns, topography, and historical rainfall patterns. This means our predictions might not capture the full picture, as these missing elements could also influence rainfall. To improve our forecasting, we'd need data on these additional factors for a more comprehensive analysis in the future.
- Our rain forecasting model uses daily rainfall tracking, but it looks at data for only one year (365 days). This means we haven't taken into account information from previous years. It's like trying to understand a story with just a few chapters instead of the whole book. The exclusion of data from multiple years might limit our model's ability to grasp long-term weather patterns and trends. To improve our predictions, we'll need to expand our dataset to include information from multiple years, giving us a more complete picture of how rainfall behaves over time.
- Another challenge we face is that some weather stations may be faulty or inactive, leading to insufficient data. This could impact the accuracy of our predictions, as missing or unreliable information from these stations may create gaps in our understanding of local weather conditions.
- Another limitation is that we solely rely on data obtained from the Department of Primary Industries and Regional Development, specifically from https://weather.agric.wa.gov.au/map. This means our predictions are based on information from just one source. While this source provides valuable data, relying on a single platform may limit the diversity of information used in our model. To enhance the reliability and completeness of our predictions, future efforts could involve incorporating data from additional sources to ensure a more comprehensive analysis of weather patterns.

## 2-Data

### 2-1) In this Python script, we retrieve and process weather data from the Department of Primary Industries and Regional Development (DPIRD) Weather API. After communicating, We obtained an API key from the Department of Primary Industries and Regional Development website at [WA Government Department of Primary Industries and Regional Development](https://www.wa.gov.au/organisation/department-of-primary-industries-and-regional-development).

### 2-2) We sent an API request to retrieve rain data, including rainfall, humidity, average air temperature, and average wind speed.

### 2-3): We successfully retrieved 365 days of data from 225 weather stations across WA. Saved it as `raindata.csv` and prepared it for machine learning.

## 3-Machine Learning

### 3-1 Rain Forecast
#### 3-1-1: We read and transformed the locally stored `raindata.csv` into a PySpark data frame using Spark.
#### 3-1-2: We removed any null values in the DataFrame and converted it into a Pandas DataFrame.
#### 3-1-3: We trained a rainfall prediction model for 365 days using scikit-learn, TensorFlow, and Keras_Tuner.
#### 3-1-4: Despite experimenting with various activations and classifications, the model achieved an accuracy of approximately 64%.

### 3-2 Site Visit Route Trips
#### Optimal Cluster Number Identification using the Elbow Method
The Elbow Method was employed to determine the optimal number of clusters for weather station grouping. By analysing the decline in inertia with increasing cluster count, the "elbow" point was identified as the optimal balance between variance explanation and simplicity. This approach aids in selecting an appropriate cluster count for K-means clustering, providing insights into the dataset's structure.

#### K-means clustering was applied to group weather stations into clusters based on their geographical coordinates. The results include predictions of station clusters, and the dataset was enhanced with the 'stations_Route_trip' column indicating the assigned cluster.


## 4-Visualisation

### 4-1 Jasonify Data
#### The Python script we developed facilitates the transformation of weather data, obtained through API calls and machine learning predictions, into a JSON format suitable for JavaScript. Utilising Pandas and NumPy, the script reads and structures information from CSV files containing weather station details and rainfall predictions. The data is organised into a dictionary, which is then converted into a JSON string, ensuring compatibility with JavaScript. The resulting JavaScript variable, 'alldata,' is stored in the 'static/data' directory, providing a seamless integration point for interactive data visualisation on the web platform.

### 4-2 JavaScript
#### The provided JavaScript code defines functions for creating an interactive map and visualisations using Leaflet and Plotly libraries. The createMap function sets up the base map, incorporates tile layers from OpenStreetMap, and dynamically adds layer groups based on the specified Routetrip values. The createLineChart function generates a line chart using Plotly, displaying rainfall data over time for a selected weather station. Additionally, the code includes a function createDropdown to generate a dropdown menu for station selection and another function createMarkers to create markers on the map with dynamic styling based on Routetrip values. The markers are added to layer groups, allowing users to toggle their visibility on the map. The JavaScript code integrates these functionalities to provide an interactive and informative web-based weather visualisation tool.


### 4-3 HTML

#### The provided HTML document defines a web page for weather station visualisation. It includes essential elements such as a Leaflet map, a dropdown for station selection, and a container for displaying a line chart. The document imports necessary libraries, including D3 for data manipulation, Leaflet for map rendering, and Plotly for creating interactive charts. The external CSS file (style.css) is linked for custom styling, enhancing the visual presentation. Additionally, the page references two JavaScript files: data.js containing the weather station data in JSON format and logic.js for the logic and functionality of the interactive map and line chart.

### 4-4 CSS
#### The CSS styles provided are designed for a responsive web page displaying weather station data. The layout ensures full-height and full-width elements for optimal viewing. The map container (#map-container) is positioned relative, and the Leaflet map (#map-id) takes 100% height. The station selection dropdown (#stationDropdown) is positioned in the top-left corner for easy access. The line chart container (#line-chart-container) is positioned below the dropdown, featuring a clean design with a white background and border. The line chart itself (#line-chart) spans the full width with a fixed height of 300 pixels. These styles contribute to an organized and visually appealing presentation of weather station information.
