## Requirements 

### Page heading

|Requirements|Evidence|Issues|
|------------|-------|-------|
|The people search page should have a h1 heading with text 'People Search'|----|----|
|The vehicle search page should have a h1 heading with text 'Vehicle Search'|----|----|
|The add vehicle page should have a h1 heading with text 'Add a Vehicle '|----|----|

#### Navigation link text

|Requirements|Evidence|Issues|
|------------|-------|-------|
|The link to the people search page should have text 'People search'|----|----|
|The link to the vehicle search page should have text 'Vehicle search'|----|----|
|The link to the add vehicle page should have text 'Add a vehicle'|----|----|

|Requirements|Evidence|Issues|
|------------|-------|-------|
|The `<ul>` used for navigation link must be inside the <header>.|----|----|

#### Page Sections
|Requirements|Evidence|Issues|
|------------|-------|-------|
|A solid black border with width 1px.|----|----|
|Margin and padding on all side with a value of 10px.|----|----|

|Requirements|Evidence|Issues|
|------------|-------|-------|
|The element(s) that CSS grid applies to should have the ID 'container'.|----|----|

#### Searches Peopple and Vehicle
|Requirements|Evidence|Issues|
|------------|-------|-------|
|The button to start the search should have the label text 'Submit'|----|----|
| The HTML element showing the search results should have an ID 'results'.|----|----|
|Each search result record is shown in a < div>, inside the 'results' element.|----|----|
|The button to start the search should have the label text 'Submit'|----|----|
|Element with ID 'message' (outside the 'results' element)|----|----|
|Displays a message containing text 'Search successful' if the search is successful.|----|----|
|Displays a message containing text 'No result found' if the search returns nothing.|----|----|
|Displays a message containing text 'Error' if both fields in the people search form are empty.|----|----|
|Displays a message containing text 'Error' if both fields in the people search form are filled (only one can be used).|----|----|
|Displays a message containing text 'Error' if the vehicle search form the registration number field is empty.|----|----|

#### For people search
|Requirements|Evidence|Issues|
|------------|-------|-------|
|The text input field for driver name should have the ID 'name'|----|----|
|The text input field for license number should have the ID 'license'.|----|----|

#### For vehicle search
|Requirements|Evidence|Issues|
|------------|-------|-------|
|The text input field for vehicle registration/plate number should have an ID 'rego'|----|----|

#### For the add vehicle page
|Requirements|Evidence|Issues|
|------------|-------|-------|
|The text input field should have the correct ID's|----|----|
|The button to add a vehicle should have the label text 'Add'.|----|----|
|If the owner does not exist in the people table, a new form should appear asking the user to enter the owner information|----|----|
|The input fields in this form should have the correct ID's|----|----|
|The button to add a new owner should have the label text 'Add owner'|----|----|
|After entering all the information and clicking the 'Add vehicle' (and 'Add owner') button, ther should be an element with ID 'message' that displays a message containing text 'Vehicle added successfully' if there is no error.|----|----|
|After entering all the information and clicking the 'Add vehicle' (and 'Add owner') button, ther should be an element with ID 'message' that displays a message containing text 'Error' if any information is missing. All the information about the vehicle and the new owner is required, i.e., there cannot be any empty field.|----|----|
