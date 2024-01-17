const apiKey = "message.json";
const messages = document.querySelector(".messages_area")

const getData = async () => {
  const res = await fetch(apiKey);
  const data = await res.json();
  return data
}

const displayUsers = async () => {
 const payload = await getData();
 console.log(payload)
 let dataDisplay = payload.map((object) => {
  const { name, message, date } = object;

  return `
  <a href="pages/message.html" class="messagesPage">
  <div class="messages_area messages_area1" id="messages_area">
  <div class="messages" id="messages" onmouseenter="message()" onmouseleave="messageno()">
  <div class="messages_left">
                <div class="check check_2">
                  <img src="/public/images/checkbox.png" alt="" />
                  <span> <ion-icon name="checkmark"></ion-icon> </span>
                </div>
                <ion-icon name="star-outline" class="hover star"></ion-icon>
                <div class="span-1">${name}</div>
              </div>
 
  <div class="messages_content">${message}</div>
  <div class="hide-icons" id="hide-icon">
  <span title="Archive" class="material-symbols-outlined">
  archive
  </span>
  <span title="Delete" class="material-symbols-outlined">
    delete
    </span>
    <span title="Add to drafts" class="material-symbols-outlined">
      drafts
      </span>
      <span title="Schedule" class="material-symbols-outlined">
        schedule
        </span>
  </div> 
  <div class="messages_date" id="date">${date}</p>
  </div>
  </div>
  </a>
  `
 });

 messages.innerHTML = dataDisplay;
}
displayUsers();
/* fetch("apiKey")
.then(response => response.json())
.then(json => console.log(json)) */



/* const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages" onmouseenter="message()" onmouseleave="messageno()">
  <div class="messages_left">
    <div class="check check_2">
      <img src="./img/checkbox.png" alt="" />
      <span> <ion-icon name="checkmark"></ion-icon> </span>
    </div>
    <ion-icon name="star-outline" class="hover star"></ion-icon>
    <div class="span-1">${d.sender}</div>
  </div>
  <div class="messages_content">${d.message}</div>
  <div class="hide-icons" id="hide-icon">
  <span title="Archive" class="material-symbols-outlined">
  archive
  </span>
  <span title="Delete" class="material-symbols-outlined">
    delete
    </span>
    <span title="Add to drafts" class="material-symbols-outlined">
      drafts
      </span>
      <span title="Schedule" class="material-symbols-outlined">
        schedule
        </span>
  </div>
  <div class="messages_date">${d.date}</div>
</div>`
    )
    .join(" ");
};

render(data);
 */


const composeForm = document.getElementById("composer");

function message() {
  if (composeForm.style.display === "none") {
    composeForm.style.display = "block"
  } else {
    composeForm.style.display = "none"
  }
}

const formEl = document.getElementById("signupFrm");
const formBtn = document.getElementById("compose-btn");
const messagesCont = document.getElementById(".messages_content")


function alertMe() {
  if (formEl.style.display === "none") {
    formEl.style.display = "block"
    mainContent.style.width = "84%"
    mainContent.style.marginLeft = "300px"
   
  } else {
    formEl.style.display = "none"
    mainContent.style.width = "100%"
    mainContent.style.marginLeft = "0px"
   
  } 
}

const halfContent = document.getElementById("half")
const myLink = document.getElementById("change")
const otherLink = document.getElementById("link")
const span = document.getElementById("span")

myLink.addEventListener("click", function() {
 if(this.addEventListener)
  myLink.innerHTML = "Less";
});

function more() {
  halfContent.style.display = "block"
}


const conBtn = document.getElementById("navItem")
const conTain = document.getElementById("container");

function showMe() {
  if (conTain.style.display === "none") {
    conTain.style.display = "block"
  } else {
    conTain.style.display = "none"
  }
}

const half = document.getElementById("half");
const mainContent = document.getElementById("main_content")

function more() {
  if (half.style.display === "none") {
    half.style.display = "block"
   
  } else {
    half.style.display = "none"

  }
}

const composeRm = document.getElementById("composer-1");
const compBtn = document.getElementById("container-1");

function toggle() {
  if(composeRm.style.display === "none") {
    composeRm.style.display = "block"
  } else {
    composeRm.style.display = "none"
  }
}



function showUs() {
  conTain.style.display = "block"
}

function hideUs() {
  conTain.style.display = "none"
}





const hide = document.getElementById("hide-icon")


function message() {
hide.style.visibility = "visible"
}

function messageno() {
  hide.style.visibility = "hidden"
}
