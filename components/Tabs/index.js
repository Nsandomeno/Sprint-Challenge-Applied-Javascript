// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//const arr = [];

const tabEntry = document.querySelector(".topics");
//tabEntry.appendChild(createTab(element));

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(function(response){
        //console.log(response);
        //console.log(response.data);
        const topicData = response.data // this is an object 
        //console.log(topicData);

        const topicDataArr = Object.values(topicData);
        //console.log(topicDataArr);

        const useableArr = topicDataArr[0];
        //console.log(useableArr);

        useableArr.forEach(element => {
            tabEntry.appendChild(createTab(element))
        });
        })
    





    // Create Tab Component

    function createTab(topic){
        const tabDiv = document.createElement('div');
        
        tabDiv.classList.add('tab');
        tabDiv.textContent = topic;

        return tabDiv;
    }

    //const tabEntry = document.querySelector(".tabs");
        
