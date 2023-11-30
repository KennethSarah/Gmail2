"use strict";

const data = [
  // 1
  {
    sender: "Unknown",
    date: "20:15",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 2
  {
    sender: "Twitter",
    date: "07:13",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  //  3
  {
    sender: "The Punch",
    date: "05:01",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 4
  {
    sender: "Instagram",
    date: "Jan 11",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 5
  {
    sender: "Qatar",
    date: "Nov 24",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 6
  {
    sender: "John Mark",
    date: "Oct 26",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 7
  {
    sender: "Whatsapp",
    date: "Dec 21",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 8
  {
    sender: "Google",
    date: "Dec 10",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 9
  {
    sender: "Twitter",
    date: "May 20",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 10
  {
    sender: "Facebook",
    date: "Feb 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 11
  {
    sender: "Tiktok",
    date: "Jun 25",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 12
  {
    sender: "Whatsapp",
    date: "Sep 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 13
  {
    sender: "Upwork",
    date: "Jan 17",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 14
  {
    sender: "LinkedIn",
    date: "Nov 22",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 15
  {
    sender: "Facebook",
    date: "Apr 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 16
  {
    sender: "Instagram",
    date: "Jul 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 17
  {
    sender: "Twitter",
    date: "Dec 31",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "Twitter",
    date: "Dec 31",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  {
    sender: "Twitter",
    date: "Dec 31",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
];

/* const btnEl = document.getElementById("buttonEl");
const formAl = document.getElementById("nav_container");
const messagesArea = document.getElementById("main_content")

function toggle() {
  
  formAl.style.display = "block"
  messagesArea.style.marginLeft = "210px"
  messagesArea.style.width = "95%"
  messagesArea.style.overflow = "auto"
  messagesArea.style.paddingRight = "100px"
} */

const formEl = document.getElementById("signupFrm");
const formBtn = document.getElementById("compose-btn");


function alertMe() {
formEl.style.display = "block";
}

function hide() {
  formEl.style.display = "none"
}

const conBtn = document.getElementById("navItem")
const conTain = document.getElementById("container");

function showMe() {
  conTain.style.display = "block"
}

function hideMe() {
  conTain.style.display ="none"
}

function showUs() {
  conTain.style.display = "block"
}

function hideUs() {
  conTain.style.display = "none"
}

const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages">
  <div class="messages_left">
    <div class="check check_2">
      <img src="./img/checkbox.png" alt="" />
      <span> <ion-icon name="checkmark"></ion-icon> </span>
    </div>
    <ion-icon name="star-outline" class="hover star"></ion-icon>
    <span>${d.sender}</span>
  </div>
  <div class="messages_content">${d.message}</div>
  <div class="messages_date">${d.date}</div>
</div>`
    )
    .join(" ");
};

render(data);