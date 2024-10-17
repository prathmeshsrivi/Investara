function searchCompany() {
    const searchBar = document.getElementById('searchBar');
    const company = searchBar.value.trim().toLowerCase(); // Get the search value and convert to lower case

    // Define a mapping of company names to HTML files
    const companyMap = {
        'mindtree': 'mindtree.html',
        'mindtree': 'mindtree.html',
        'Mindtree': 'mindtree.html',
        'MindTree': 'mindtree.html',
        // Add more companies and their corresponding HTML pages here
    };

    // Check if the company exists in the map
    if (companyMap[company]) {
        window.location.href = companyMap[company]; // Redirect to the corresponding page
    } else {
        alert("Company not found! Please try another.");
    }
}
