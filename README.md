# project4_gr10
Project Title: "PerthRainFlow Forecast and Maintenance Optimisation"

| No | Content                     | Team   |
|----|-----------------------------|--------|
| 1  | Project Background          | Foluke |
| 1.1| Title of Project            | Foluke |
| 1.2| Objectives                  | Foluke |
| 1.3| Scope                       | Foluke |
| 1.4| Methodology                 | Foluke |
| 1.5| Data Analysis               | Foluke |
| 1.6| Visualization               | Foluke |
| 1.7| Limitations                 | Foluke |
|----|-----------------------------|--------|
| 2  | Import Data - API - Hieu    | Hieu   |
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


# Tools
- Python Pandas(Panda, NumPy,Pathlib ,API request)   
- Python Matplotlib
- K-means clustering algorithm from Scikit-learn
- Neural Networking Machine learning (TensorFlow / Keras, Keras Tuner) 
- Spark
- JavaScript
- HTML(D3 Library,Leaflet,Plotly) 
- CSS



# Project Overview:
The "PerthRainFlow Forecast and Maintenance Optimisation System" is a comprehensive project designed to forecast rain and optimise maintenance strategies for approximately 225 weather stations across WA. 

# The project duration:
December 19, 2023, to January 9, 2024, 

# team consisting of three members: 
-Hossein Falsafi, 
-Foluke Daramola, 
-Hieu Lam



# Objectives:

Use machine learning to define a model to Forecast rainfall using historical data.
Analyse the distribution of weather stations across western Australia (North, Metro, South).
Identify stations providing sufficient data for machine learning and forecasting.
Develop optimal maintenance routes based on geographical proximity.
Visualise the station on the map as well as the maintenance route tripes


#Resources:

Data source: https://weather.agric.wa.gov.au/map.

# Methodology:

Collect data from reliable sources, primarily https://weather.agric.wa.gov.au/map.
Use Python Pandas and Matplotlib for data conversion (ETL) into JavaScript.
Apply machine learning techniques integrated with mapping for optimal cluster identification. Utilise machine learning for rainfall forecasting.
Determine the correlation between rain flow and water level.






# 2-Import data-API Hieu
	## 2-1: We bbtained an API key from the Department of Primary Industries and Regional Development website at https://www.wa.gov.au/organisation/department-of-primary-industries-and-regional-development.

	## 2-2: We sent an API request to retrieve rain data, including rainfall, humidity, average air temperature, and average wind speed.

	## 2-3: We successfully retrieved 365 days of data from 225 weather stations across WA. Saved it as raindata.csv and prepared it for machine learning.

# 3-Machine learning- 
	## 3-1 rain forecast- Hieu
 		### 3-1-1: We read and transformed the locally stored `raindata.csv` into a PySpark DataFrame using Spark.

  		### 3-1-2: We removed any null values in the DataFrame and converted it into a Pandas DataFrame.

  		### 3-1-3: We trained a rainfall prediction model for 365 days using scikit-learn, TensorFlow, and Keras_Tuner.

  		### 3-1-4: Despite experimenting with various activations and classifications, the model achieved an accuracy of approximately 64%.
    
	## 3-2 Site visit route trips- Hossein
# 4-Map- hossein
	## 4-1 jasonify data
	## 4-2 Javascript
	## 4-3 HTML
	## 4-4 CSS




Rainfall forecasting involves considering various meteorological parameters. Here are some key parameters that are important for rain forecast:

1-Precipitation:

Rainfall Amount: The amount of rain expected over a specific period (e.g., hourly, daily).
Rainfall Intensity: The rate of rainfall, often measured in millimeters per hour.

2-Humidity:

Relative Humidity: The percentage of moisture in the air relative to the maximum amount the air could hold at that temperature. High humidity levels are conducive to precipitation.
Temperature:

3-Air Temperature: 
Warmer air can hold more moisture. Temperature changes can influence the likelihood of precipitation.
Atmospheric Pressure:

4-Low-Pressure Systems: Areas of low pressure are often associated with rising air, which can lead to the formation of clouds and precipitation.
Wind:

5-Wind Speed and Direction: 
Strong winds can transport moisture and influence precipitation patterns.

6-Cloud Cover:

Cloud Type and Altitude: Certain cloud types, such as cumulonimbus clouds, are associated with heavy rainfall.
Weather Patterns:

7-Fronts: 
The interaction of different air masses (cold and warm fronts) can lead to the lifting of air and subsequent precipitation.
Topography:

8-Orographic Lift: 
The lifting of air over mountains can lead to the cooling and condensation of moisture, resulting in precipitation.
Satellite and Radar Data:

9-Satellite Imagery: 
Observing cloud patterns and movement.
Radar Data: Detecting precipitation and estimating its intensity.
Historical Data:

10-Past Rainfall Patterns: 
Historical data on rainfall in the region can provide insights into seasonal trends.
 
