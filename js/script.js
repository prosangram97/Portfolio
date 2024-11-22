var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// new function----

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function colsemenu(){
    sidemenu.style.right = "-200px";
}


// gooogle sheet---

const apiUrl = 'https://script.google.com/macros/s/AKfycbxD-fWLOfSR6_kmvsBhbD4FmBJvr-zlyagLoaR3VNzl5K67ytZGsPs8RmOF34OMDPQgbQ/exec';
const submissionForm = document.forms['data-to-google-sheet'];

submissionForm.addEventListener('submit', event => {
  event.preventDefault();
//   fetch(apiUrl, { method: 'POST', body: new FormData(submissionForm) })
//     .then(response => console.log('Submission successful!', response))
//     .catch(error => console.error('Submission error!', error.message));


fetch(apiUrl, { method: 'POST', body: new FormData(submissionForm) })
  .then(response => response.json())
  .then(data => console.log('Submission successful!', data))
//   .catch(error => console.error('Submission error!', error.message));
});
            