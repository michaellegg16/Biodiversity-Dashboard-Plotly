// d3.json("samples.json").then((importedData) => {
//     console.log(importedData);

// });

function buildPlot(id) {
    d3.json("samples.json").then((importedData) => {
        // console.log(incomingData);

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

        var trace1 = {
            x: reversedValues,
            y: topOTUids,
            text: topLabels,
            type: 'bar',
            orientation: 'h',
        };

        var data1 = [trace1];

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

        Plotly.newPlot("bar", data1, layout1);

        // Bubble chart

        // var OTUids = sampleData.otu_ids
        // var 

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

        var layout2 = {
            xaxis: {title: "OTU ID"},
            height: 600,
            width: 1000,
        };

        var data2 = [trace2];

        Plotly.newPlot("bubble", data2, layout2);
    });

};


function getMetadata(id) {

    d3.json("samples.json").then((importedData) => {

        var metadata = importedData.metadata;

        // console.log(metadata);

        var filteredMetadata = metadata.filter(data => data.id.toString() === id) [0];

        var demoInfo = d3.select("#sample-metadata");

        demoInfo.html("");

        Object.entries(filteredMetadata).forEach((i) => {
            demoInfo.append("h4").text(i[0] + ": " + i[1] + "\n");
        });
    });
};


function optionChanged(id) {
    buildPlot(id);
    getMetadata(id);
};


function init() {

    var well = d3.select("#selDataset");

    d3.json("samples.json").then((importedData) => {
        // console.log(incomingData);

        var data = importedData;

        data.names.forEach(function(name) {
            // var names = name.text(name).property("value")
            well.append("option").text(name).property("value");
        });

    buildPlot(data.names[0]);
    buildPlot(data.names[1]);

    getMetadata(data.names[0]);
    getMetadata(data.names[1]);

 })};

init();