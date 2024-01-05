# project4_gr10


# Content


| No | Content                     | Team   |
|----|-----------------------------|--------|
| 1.1| Title of Project            | Foluke |
| 1.2| Team                        | Foluke |
| 1.3| Tools                       | Foluke |
| 1.4| Project overview            | Foluke |
| 1.5| Project duration            | Foluke |
| 1.6| Objectives                  | Foluke |
| 1.7| Resources                   | Foluke |
| 1.8| Methodology                 | Foluke |
| 1.9| Data Analysis               | Foluke |
|1.10| Visualization               | Foluke |
|1.11| Limitations                 | Foluke |
|----|-----------------------------|--------|
| 2  | Import Data - API           | Hieu   |
| 2.1| sorting API key             | Hieu   |
| 2.2| Developing code             | Hieu   |
| 2.3| Data Cleaning               | Hieu   |
|----|-----------------------------|--------|
| 3  | Machine Learning            |        |
| 3.1| Rain Forecast - Hieu        | Hieu   |
| 3.2| Site Visit Route Trips      | Hossein|
|----|-----------------------------|--------|
| 4  | Map                         | Hossein|
| 4.1| JSONify Data                | Hossein|
| 4.2| JavaScript                  | Hossein|
| 4.3| HTML                        | Hossein|
| 4.4| CSS                         | Hossein|

# 1-Project details
## Project Title: "PerthRainFlow Forecast and Maintenance Optimisation"

## 1-2) Team: 
-Hossein Falsafi, 
-Foluke Daramola, 
-Hieu Lam

## 1-3) Tools
- Python Pandas(Panda, NumPy,Pathlib ,API request)   
- Python Matplotlib
- K-means clustering algorithm from Scikit-learn
- Neural Networking Machine learning (TensorFlow / Keras, Keras Tuner) 
- Spark
- JavaScript
- HTML(D3 Library,Leaflet,Plotly) 
- CSS



## 1-4) Project Overview:
The "PerthRainFlow Forecast and Maintenance Optimisation System" is a comprehensive project designed to forecast rain and optimise maintenance strategies for approximately 225 weather stations across WA. 

# 1-5) The project duration:
December 19, 2023, to January 9, 2024, 


## 1-6) Objectives:

Use machine learning to define a model to Forecast rainfall using historical data.
Analyse the distribution of weather stations across western Australia (North, Metro, South).
Identify stations providing sufficient data for machine learning and forecasting.
Develop optimal maintenance routes based on geographical proximity.
Visualise the station on the map as well as the maintenance route tripes


## 1-7) Resources:

Data source: https://weather.agric.wa.gov.au/map.

## 1-8) Methodology:

Collect data from reliable sources, primarily https://weather.agric.wa.gov.au/map.
Use Python Pandas and Matplotlib for data conversion (ETL) into JavaScript.
Apply machine learning techniques integrated with mapping for optimal cluster identification. Utilise machine learning for rainfall forecasting.
Determine the correlation between rain flow and water level.

## 1-9) Data required for Analysis:
Rainfall forecasting involves the analysis of various meteorological parameters crucial for predicting precipitation. Key factors include the amount and intensity of **rainfall** over specific periods, such as hourly or daily measurements. **Humidity**, expressed as *relative humidity*, plays a vital role, indicating the moisture content in the air relative to its maximum capacity at a given temperature. Warmer air temperatures can hold more moisture, influencing precipitation likelihood. **Atmospheric pressure**, particularly in *low-pressure systems*, often leads to rising air and cloud formation. **Wind speed and direction** contribute to moisture transport and precipitation patterns. **Cloud cover**, considering types and altitudes, especially *cumulonimbus clouds*, is associated with heavy rainfall. **Weather patterns**, including the interaction of air masses in *fronts*, can lead to airlifting and subsequent precipitation. **Topography** influences rainfall through *orographic lift*, as air rises over mountains, cools, and condenses moisture. **Satellite imagery** and **radar data** are essential for observing cloud patterns, detecting precipitation, and estimating intensity. **Historical data** on past rainfall patterns in a region provide valuable insights into seasonal trends, contributing to comprehensive rainfall forecasting analysis.


## 1.10) Visualization
?????

## 1.11) Limitations
????


# 2-data
## 2-1) In this Python script we retrieve and process weather data from the Department of Primary Industries and Regional Development (DPIRD) Weather API. After communicating, We obtained an API key from the Department of Primary Industries and Regional Development website at https://www.wa.gov.au/organisation/department-of-primary-industries-and-regional-development.

## 2-2) We sent an API request to retrieve rain data, including rainfall, humidity, average air temperature, and average wind speed.

# 2-3): We successfully retrieved 365 days of data from 225 weather stations across WA. Saved it as raindata.csv and prepared it for machine learning.

# 3-Machine learning-
## 3-1 rain forecast
	### 3-1-1: We read and transformed the locally stored `raindata.csv` into a PySpark data frame using Spark.

	### 3-1-2: We removed any null values in the DataFrame and converted it into a Pandas DataFrame.

	### 3-1-3: We trained a rainfall prediction model for 365 days using scikit-learn, TensorFlow, and Keras_Tuner.

	### 3-1-4: Despite experimenting with various activations and classifications, the model achieved an accuracy of approximately 64%.

## 3-2 Site visit route trips

### Optimal Cluster Number Identification using the Elbow Method

The Elbow Method was employed to determine the optimal number of clusters for weather station grouping. By analysing the decline in inertia with increasing cluster count, the "elbow" point was identified as the optimal balance between variance explanation and simplicity. This approach aids in selecting an appropriate cluster count for K-means clustering, providing insights into the dataset's structure.

### K-means clustering was applied to group weather stations into clusters based on their geographical coordinates. The results include predictions of station clusters, and the dataset was enhanced with the 'stations_Route_trip' column indicating the assigned cluster.


 
