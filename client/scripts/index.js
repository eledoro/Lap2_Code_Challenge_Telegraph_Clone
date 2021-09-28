const titleInput = document.getElementById('title');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('username');
const publishButton = document.getElementById('publishBtn');


const url = window.location.href;
// if url contains #  (or - ?? ) then
if (url.includes('#')) {
     handleExistingPost()
} else {
    // listen to the submit button, on submit
    publishButton.addEventListener('submit', handleNewInput())
}

// +++++++++++++++   handle existing post  +++++++++++

function handleExistingPost() {

    // get the part of the url with username and title
    extractUsernameTitle(url)
    // get the post by username and title
    getPostByPath() 
    // render the post
    renderPost()
    // ?? listen to edit button ??
}
    
    
           // extract username and title from the path

function extractUsernameTitle() {
    const pathUserTitle = window.location.hash.substring(1);
    const username 
   //const title = 
   // return 


}



// +++++++++++++++++    handle new input ++++++++++++++++++++
function  handleNewInput(inputData){

    // check if input is not empty
        checkEmptyInput(inputData)
    
    // check if username+title already exist

    // if yes - show the warning
    
    // if no - send data to db
        // render post
        // render the path  
    
    

}    


// ----- 
function checkEmptyInput(inputData) {
    Object.values(inputData).forEach(value => {
        if (value === "") { throw new Error('One or more input fileds are empty') }
    })
}


publishButton.addEventListener('submit', handleInput )


async function sendPost(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
            //  what to put in the body??
        }
        
        const response = await fetch('http://localhost:3000/', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
   // ??       
    window.location.hash = `${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}