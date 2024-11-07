window.onload = function() {
    // Get the last modified date
    var lastModifiedDate = document.lastModified;

    // Display the last modified date in the element with the id 'lastModified'
    document.getElementById('lastModified').textContent = lastModifiedDate;

    // Get the year
    var lastYear = new Date(document.lastModified);

    // Extract the year from the Date object
    var year = lastYear.getFullYear();

    // Display the year in the element with the id 'lastModifiedYear'
    document.getElementById('lastYear').textContent = year;
};