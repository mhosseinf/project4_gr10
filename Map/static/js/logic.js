function createMap(layerGroups) {
    // Create the tile layer that will be the background of our map.
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Create a baseMaps object to hold the streetmap layer.
    let baseMaps = {
        "Street Map": streetmap
    };

    // Create an overlayMaps object to dynamically hold the layer groups based on Routetrip.
    let overlayMaps = {};

    // Loop through the layerGroups array and add each layer group to overlayMaps based on Routetrip.
    for (let i = 0; i < layerGroups.length; i++) {
        overlayMaps[`Routetrip${i} Stations`] = layerGroups[i];
    }

    // Create the map object with options.
    let map = L.map("map-id", {
        center: [-31.9505, 115.8605],
        zoom: 8,
        layers: [streetmap, ...layerGroups]  // Spread the layerGroups array elements
    });

    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
}
// Function to create the line chart
function createLineChart(data, selectedStationCode) {
    // Find the selected station data using the provided station code
    let selectedStation = Object.values(data).find(station => station.stationCode === selectedStationCode);

    // Extract date and rain data for the selected station
    let dates = Object.keys(selectedStation.Date);
    let rainData = Object.values(selectedStation.Rain);
    let PrainData = Object.values(selectedStation.PerdictRain);

    // console.log("Dates:", dates);
    // console.log("Rain Data:", rainData);
    // console.log("PRain Data:", PrainData);
    
    // Create the line chart data
    let plotData = [{
        x: dates,
        y: rainData,
        type: 'line',
        name: 'Rainfall'
    },
    {
        x: dates,
        y: PrainData,
        type: 'line',
        name: 'PRainfall'
    }];
    
    let Layout = {
        title: `Rainfall Over Time for Station ${selectedStationCode}`
    };
    
    // Plot the line chart
    Plotly.newPlot('line-chart', plotData, Layout);
}

// Function to create the dropdown
function createDropdown(data) {
    // Create a dropdown for station selection.
    let dropdown = d3.select("#map-id").append("select")
        .attr("id", "stationDropdown")
        .style("position", "absolute")
        .style("top", "10%")
        .style("left", "10%")
        .on("change", function () {
            // Get the selected station value
            let selectedStationCode = d3.select(this).property("value");
            // Call the function to update the line chart based on the selected station
            createLineChart(data, selectedStationCode);
        });

    // Add default option
    dropdown.append("option")
        .attr("value", "")
        .text("Select a Station");

    // Get an array of station objects from the data and sort them alphabetically
    let stations = Object.values(data).sort((a, b) => a.stationCode.localeCompare(b.stationCode));

    // Loop through the sorted station objects and add options to the dropdown
    stations.forEach(station => {
        dropdown.append("option")
            .attr("value", station.stationCode)
            .text(station.stationCode);
    });

    return dropdown;
}


// Function to create markers and map
function createMarkers(data) {
    let RoutetripMarkers = [];
    let stations = Object.values(data);
    let maxRoutetrip = Math.max(...stations.map(station => station.Routetrip), 0);

    // Generate the dynamic CSS for Routetrip values
    let dynamicCSS = "";
    for (let i = 0; i <= maxRoutetrip; i++) {
        dynamicCSS += `
            .marker-routetrip${i} {
                background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)});
            }
        `;
    }

    // Add the dynamic CSS to the existing stylesheet
    const styleTag = document.createElement("style");
    styleTag.innerHTML = dynamicCSS;
    document.head.appendChild(styleTag);

    // Create an array to store data for the line chart.
    let chartData = [];

    // Create a dropdown for station selection.
    let dropdown = createDropdown(data);

    // Loop through the station objects.
    for (let i = 0; i < stations.length; i++) {
        let station = stations[i];

        // Add Routetrip-specific class based on the value of station.Routetrip.
        let markerClass = `marker-routetrip${station.Routetrip}`;

        // Create a marker and bind a popup.
        let marker = L.marker([station.lat, station.lon], {
            icon: L.divIcon({
                className: markerClass, // Use marker class for styling
            })
        }).bindTooltip(
            `<h3>Station Code:${station.stationCode}</h3><h3>Routetrip: ${station.Routetrip}</h3>`
        );

        // Add the marker to the RoutetripMarkers array.
        RoutetripMarkers.push(marker);
    }

    // Create layer groups for Routetrip markers.
    let RoutetripLayerGroups = [];
    for (let i = 0; i <= maxRoutetrip; i++) {
        let RoutetripLayerGroup = L.layerGroup(
            RoutetripMarkers.filter(marker => parseInt(marker.options.icon.options.className.match(/\d+/)[0]) === i)
        );
        RoutetripLayerGroups.push(RoutetripLayerGroup);
    }

    // Call the createMap function with all layer groups.
    createMap(RoutetripLayerGroups);
}

// Call the function to create markers and map
createMarkers(alldata);