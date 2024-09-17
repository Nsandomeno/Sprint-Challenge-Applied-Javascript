// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div'); // gets appended external to the function
    const dateSpan = document.createElement('span'); // gets appended to headerDiv
    const headerTitle = document.createElement('h1'); // gets appended to headerDiv
    const tempSpan = document.createElement('span'); // gets appended to headerDiv

    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(tempSpan);


    return headerDiv;
}

// Create entry point; define the point 

const headerEntry = document.querySelector(".header-container");
headerEntry.appendChild(Header());
