# **Biodiversity-Dashboard-Plotly**


### Task

* Build an interactive dashboard to explore the Belly Button Biodiversity dataset which catalogs the microbes that colonive human navels.
* For context, the dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

#### Steps:

1. Use the D3 library to read in 'samples.json'.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use 'sample_values' as the values for the bar chart.

    * Use 'otu_ids' as the labels for the bar chart.

    * Use 'otu_labels' as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

    * Use 'otu_ids' for the x values.

    * Use 'sample_values' for the y values.

    * Use 'sample_values' for the marker size.

    * Use 'otu_ids' for the marker colors.

    * Use 'otu_labels' for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all of the plots any time that a new sample is selected.


![Dashboard](https://github.com/michaellegg16/Biodiversity-Dashboard-Plotly/blob/master/Screenshots/BellyButtonDashboard.PNG)
![Dashboard2](https://github.com/michaellegg16/Biodiversity-Dashboard-Plotly/blob/master//Screenshots/BellyButtonDashboardBubble.PNG)


### Instructions

1. Make sure that the data is downloaded and in the proper directory.
1. Run the 'index.html' file with a local live server for testing purposes or simply visit the deployed page at:
1. Use the dropdown to change the patient ID.



### Conclusion

That data exploration using JavaScript and Plotly was interesting as we used actual data about belly button microbes ([Data](http://robdunnlab.com/projects/belly-button-biodiversity/)). While it is a bit difficult to see the data as a whole from this analysis, it reveals that a small handful of microbial species (operational taxonomic units, or OTUs) were present in more than 70% of people while the rest were relatively rare. Coupling the bar chart with the bubble chart is an effective way of demonstrating the total top OTUs found in the patient and their relative proportion to the rest. While this analysis visually reflects the data of a specific patient effectively, it would be nice to view aggregate data on the patients and further analysis could be conducted.
