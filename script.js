function getCountry() {

    var OCcountries = ['Australia', 'Fiji'];
    var EUcountries = ['Anguilla', 'Aruba', 'Austria', 'Azerbaijan', 'Belgium', 'Bulgaria', 'Croatia', 'Curacao', 'Cyprus', 'Denmark', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Italy', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'Netherlands Antilles', 'Norway', 'Poland', 'Portugal', 'Romania', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom'];
    var ASIAcountries = ['Bahrain', 'China', 'East Timor', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Myanmar', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Malaysia', 'Oman', 'Pakistan', 'Qatar', 'Russian Federation', 'Saudi Arabia', 'Singapore', 'Taiwan', 'Thailand', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen',];
    var NAcountries = ['Canada', 'United States of America', 'Mexico'];
    var ANTcountries = ['Antartica'];
    var AFRICAcountries = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Cote dIvoire', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Swaziland', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe']
    var SAcountries = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']

    var selectedContinent = (document.getElementById("continent").value);
    var displayCountries = document.getElementById("country");

    console.log(selectedContinent);
    if (selectedContinent == "EU") {
        for (i = 0; i < EUcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = EUcountries[i];
            selectOptions.value = EUcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else if (selectedContinent == "NA") {
        for (i = 0; i < NAcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = NAcountries[i];
            selectOptions.value = NAcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else if (selectedContinent == "SA") {
        for (i = 0; i < SAcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = SAcountries[i];
            selectOptions.value = SAcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else if (selectedContinent == "Asia") {
        for (i = 0; i < ASIAcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = ASIAcountries[i];
            selectOptions.value = ASIAcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else if (selectedContinent == "Africa") {
        for (i = 0; i < AFRICAcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = AFRICAcountries[i];
            selectOptions.value = AFRICAcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else if (selectedContinent == "Antartica") {
        for (i = 0; i < ANTcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = ANTcountries[i];
            selectOptions.value = ANTcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else if (selectedContinent == "Oceania") {
        for (i = 0; i < OCcountries.length; i++) {
            var selectOptions = document.createElement('option');
            selectOptions.innerHTML = OCcountries[i];
            selectOptions.value = OCcountries[i];
            displayCountries.appendChild(selectOptions);
        }
    }
    else {
        console.log("Error");
    }
}
function getCapital() {
    var selectedState = (document.getElementById("state").value);

    console.log(selectedState);
    console.log(selectedState);
    if (selectedState === "AZ") {
        document.getElementById("capital-text").innerHTML = "Phoenix";
    }
    if (selectedState === "CA") {
        document.getElementById("capital-text").innerHTML = "Sacramento";
    }
    if (selectedState === "CO") {
        document.getElementById("capital-text").innerHTML = "Denver";
    }
    if (selectedState === "DE") {
        document.getElementById("capital-text").innerHTML = "Dover";
    }
    if (selectedState === "NE") {
        document.getElementById("capital-text").innerHTML = "Lincoln";
    }
    else {
        document.getElementById("capital")
    }
}