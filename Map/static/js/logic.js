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
        zoom: 7,
        layers: [streetmap, ...layerGroups]  // Spread the layerGroups array elements
    });

    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
}
function createMarkers(data) {
    // Initialize an array to hold Routetrip markers.
    let RoutetripMarkers = [];

    console.log("Fetched data:", data);
    // Get an array of station objects from the data.
    let stations = Object.values(data);
    console.log("Fetched stations:", stations);

    // Find the maximum Routetrip value
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
        }).bindPopup(
            `<h3>Station Code:${station.stationCode}</h3><h3>Routetrip: ${station.Routetrip}</h3><h3>Rain: ${station.Rain}</h3><h3>PRain: ${station.PerdictRain}</h3>`
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