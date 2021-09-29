const button = document.getElementById('publisBtn');
console.log(publishButton)

//  TODO: add client to yaml ??
const mainURL = 'http://localhost:8080'
const url = window.location.href;
console.log(mainURL)
console.log(url)

// if url contains #  (or - ?? ) then
console.log(url)
if (url.includes('-')) {
    console.log('trying to get existing post')
    handleExistingPost(url)
} else {
    // listen to the submit button, on submit
    console.log('trying to submit new')
    
    button.addEventListener('submit', e => handleNewPost(e))

}



// +++++++++++++++++++++++++++++++   handle existing post  +++++++++++

function handleExistingPost() {

    // get the part of the url with username and title
    const title = extractTitleDate(url)
    // get the post by username and title

    // render the post
    renderPost(postData)

}



// extract username and title from the path

function extractTitleDate(url) {
    const pathUserTitle = window.location.hash.substring(1);
       console.log(pathUserTitle)
    //const username
    //const title = 
    // return 


}



// ++++++++++++++++++++++++++++++++++++++    handle new input ++++++++++++++++++++
function handleNewPost(e) {
    e.preventDefault();
    newPostData = getFormInputs(e);    // get data from the form 
    checkEmptyInput(newPostData);   // check if input is not empty

    getPostFromDB(newPostData)
   // if ((newPostData)) { // check if the same path already exists in db
        // if yes - show the warning ? or edit the path?
   // } else {
        renderPost(newPostData)     
        renderPath(newPostData.path)     
       // sendPostToDB(newPostData)          //send data to db
   // }

}

// -----  get  input data from the form
function getFormInputs(e) {
    // create object from the form entries
    const postData = Object.fromEntries(new FormData(e.target.form));
    console.log(postData)
    // adding date
    const date = new Date();
    const month = (date.getMonth() < 9) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
    const dateString = `${date.getDate()}-${month}-${date.getFullYear()}`;
    // constructing the path
    const titleString = postData.title.replace(/ /g, "-").toLowerCase()
    postData.date = dateString
    postData.path = `${titleString}.${dateString}`;
    return postData;

}

// -----  check if input is empty
function checkEmptyInput(inputData) {
    console.log('checking input : ', inputData)
    Object.values(inputData).forEach(value => {
        if (value === "") { throw new Error('One or more input fileds are empty') }
    })
}
// -------- get post from db

async function getPostFromDB(postData) {
    try {
        const titleString = postData.title.replace(/ /g, "-").toLowerCase()
        const options = {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }
        const response = await fetch(`http://localhost:3000/${titleString}.${postData.date}`, options);

    } catch (err) {
        console.warn(err);
    }


}


// -----  send the post data to db

async function sendPostToDB(data) {
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)

        }
        console.log(options)
        const response = await fetch('http://localhost:3000/', options);
        const { path, err } = await response.json();
        if (err) {
            throw Error(err)
        } else {
            // ??       
            window.location.hash = `${path}`
        }
    } catch (err) {
        console.warn(err);
    }
}
// ----- rendering post
function renderPost(postData) {
    // hide input
    const inputSection = document.getElementById('formSection')
    inputSection.style.display = 'none'
    console.log(inputSection.style.display)
    // show postSection
    const showPostSection = document.getElementById('showPost')
    showPostSection.style.display = 'block'
    // render fields 
    const fields = document.querySelectorAll('.post');
    const formattedDate = postData.date
    const values = [postData.title, postData.username, postData.message, formattedDate];
    fields.forEach((field, i) => { field.textContent += values[i] });
}





function renderPath(path) {
    const pathBox = document.getElementById('pathBox')
   // pathBox.innerText = `You can see your post here:  ${path}`


}

