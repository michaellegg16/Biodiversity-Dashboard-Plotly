// Create the buildPlot function to read the samples.json data using D3
function buildPlot(id) {
    d3.json("samples.json").then((importedData) => {
        // console.log(incomingData);

        // Grab values from the response json object to build the plots
        var sampleData = importedData.samples.filter(sample => sample.id.toString() === id)[0];
        var sampleValues = sampleData.sample_values;
        var topSampleValues = sampleValues.slice(0, 10);
        var reversedValues = topSampleValues.reverse();
        var OTUids = sampleData.otu_ids;
        var topOTUs = OTUids.slice(0, 10);
        var reversedTopOTUs = topOTUs.reverse();
        var topOTUids = reversedTopOTUs.map(data => "OTU " + data);
        var labels = sampleData.otu_labels;
        var topLabels = labels.slice(0, 10);


        // console.log(sampleData);
        // console.log(sampleValues);
        // console.log(topOTUs);
        // console.log(reversedValues);
        // console.log(reversedTopOTUs);
        // console.log("OTU IDs:" + OTUid)

        // Create the first trace
        var trace1 = {
            x: reversedValues,
            y: topOTUids,
            text: topLabels,
            type: 'bar',
            orientation: 'h',
        };

        // Create the first data array for the plot
        var data1 = [trace1];

        // Define the plot playout
        var layout1 = {
            title: "Top 10 OTUs",
            yxis: {
                tickmode: "linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30,
            },
        };

        // Plot the chart to a div tag with the id "bar"
        Plotly.newPlot("bar", data1, layout1);

        
        // Bubble chart

        // Create the second trace
        var trace2 = {
            x: OTUids,
            y: sampleValues,
            mode: "markers",
            marker: {
                size: sampleValues,
                color: OTUids,
            },
            text: labels,
        };

        // Define the plot layout
        var layout2 = {
            xaxis: {title: "OTU ID"},
            height: 600,
            width: 1000,
        };

        // Create the second data array for the plot
        var data2 = [trace2];

        // Plot the chart to a div tag with the id "bubble"
        Plotly.newPlot("bubble", data2, layout2);
    });

};



// Create a function to display the sample metadata (an individual's demographic information)
function getMetadata(id) {

    d3.json("samples.json").then((importedData) => {

        // Store the metadata in a variable
        var metadata = importedData.metadata;

        // console.log(metadata);

        // Filter the metadata to only contain the data of the first id in the array
        var filteredMetadata = metadata.filter(data => data.id.toString() === id) [0];

        // Use D3 to select the sample-metadata and store it in a variable
        var demoInfo = d3.select("#sample-metadata");

        // Convert the info into html
        demoInfo.html("");

        // For each object of the filteredMetadata, append the ID text
        Object.entries(filteredMetadata).forEach((i) => {
            demoInfo.append("h4").text(i[0] + ": " + i[1] + "\n");
        });
    });
};



// Create a function to handle changes in the ID
function optionChanged(id) {
    buildPlot(id);
    getMetadata(id);
};



// Create an init function for when the page initially starts that plots the first ID data
function init() {

    var well = d3.select("#selDataset");

    d3.json("samples.json").then((importedData) => {
        // console.log(incomingData);

        var data = importedData;

        data.names.forEach(function(name) {
            well.append("option").text(name).property("value");
        });

    buildPlot(data.names[0]);
    buildPlot(data.names[1]);

    getMetadata(data.names[0]);
    getMetadata(data.names[1]);

 })};

init();