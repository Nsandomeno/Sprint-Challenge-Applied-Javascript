// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//const cardDataArray

const cardEntry = document.querySelector(".cards-container")



function createCard(article){
    const mainDiv = document.createElement('div');
    const headlineDiv = document.createElement('div'); // append to mainDiv
    const authorDiv = document.createElement('div'); // append to mainDiv

    const imgDiv = document.createElement('div'); // append to authorDiv

    const  proPic = document.createElement('img'); // append to imgDiv
    
    const authorSpan = document.createElement('span'); // append to authorDiv

    mainDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = article[0];
    proPic.src = article[1];
    authorSpan.textContent = article[2];

    mainDiv.appendChild(headlineDiv);
    mainDiv.appendChild(authorDiv);

    authorDiv.appendChild(imgDiv);
    
    imgDiv.appendChild(proPic);

    authorDiv.appendChild(authorSpan);

    

return mainDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(function(response){
        //console.log(response);
        //console.log(response.data);
        //console.log(response.data.articles);
            const workingObj = response.data.articles;
            //console.log(workingObj);
            const workingObjValuesArr = Object.values(workingObj); // this is an array of arrays containing objects. Each object is an article
            //console.log(workingObjValuesArr)
            workingObjValuesArr.forEach(function(item){
                item.forEach(function(el){
                    //console.log(el);
                    const final = Object.values(el);
                    console.log(final);
                    cardEntry.appendChild(createCard(final));
                })
            })
            
            
            //workingObjValuesArr.forEach(function(item){
                //item.forEach(function(el){
                    //console.log(item);
                    //console.log(el);
                    //const finalArr = Object.values(el);
                    //createCard(el);

                    //console.log(finalArr);
                    // finalArr.forEach(function(art){
                    //     //console.log(art);
                    //     cardEntry.appendChild(createCard(art));
                    // })
                //})
            //})

            
            
    })
    .catch(function(error){
        console.log(error);
    })

