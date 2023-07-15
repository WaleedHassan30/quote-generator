// Reset all Css Page Elements
// Get all elements on the page
let allElements = document.querySelectorAll("*");
// Reset the style of each element
allElements.forEach(function(element){
  element.style.boxSizing = 'border-box';
  element.style.margin = "0"
  element.style.padding = "0"

})
let addFonts = function(){
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&family=Dosis:wght@200;300&family=Indie+Flower&display=swap";
  document.head.appendChild(fontLink);
}
// -----------------------------------------------------------------------------------
// Declerations
// declare styles variables  as opject
let styles = {
  padding:"40px",
  style1:[["primaryColor" ,"#C6EBC5"], ["secondaryColor" ,"#A4B494" ] , ["tertiaryColor" ,"#519872" ] ,["default","#3B5249"],["white","#fff"]],
}
let navBar = function(lang){
  let getNav = document.createElement("nav");
  let getH1 = document.createElement("h1");
  let heading = document.createTextNode("Quote of the Day");
  getH1.appendChild(heading)
  getNav.appendChild(getH1)
  getNav.style.backgroundColor = styles.style1[1][1];
  getNav.style.color = "white";
  getNav.style.textAlign = "center";
  getNav.style.padding = styles.padding;
  getNav.className = "container-fluid";
  document.body.appendChild(getNav);

  if(lang === "ar"){
    getH1.style.fontFamily = "Cairo"
    getH1.style.fontWeight = "600"
  }else if(lang === "en"){
    getH1.style.fontFamily = "Dosis"
    getH1.style.fontWeight = "600"
  }
  getH1.style.fontSize = "64px"

}
let title = function(lang,title){
  let getRandomDiv = document.createElement("div");
  let getH2 = document.createElement("h2");
  let text = document.createTextNode(title);
  getRandomDiv.classList.add("card")
  getRandomDiv.appendChild(getH2)
  getH2.appendChild(text)
  getH2.style.textAlign = "center"
  document.body.appendChild(getRandomDiv);
  if(lang === "ar"){
    getH2.style.fontFamily = "Cairo"
    getH2.style.fontWeight = "600"
  }else if(lang === "en"){
    getH2.style.fontFamily = "Dosis"
    getH2.style.fontWeight = "600"
    getH2.style.fontSize = "24px"

  }
  getH2.style.color = styles.style1[3][1];

}
let footer = function(){
  const body = document.querySelector('body');
  const menuBack = document.createElement('div');
  const menuBackBefore = document.createElement('div');
  menuBack.classList.add('menu-back');
  menuBackBefore.classList.add('menu-back-before');
  menuBack.style.backgroundColor = styles.style1[1][1]; 
  menuBack.style.color = 'white';
  menuBack.style.width = '100%';
  menuBack.style.height = '200px';
  menuBack.style.position = 'fixed';
  menuBack.style.bottom = '0';
  menuBackBefore.style.content = '""';
  menuBackBefore.style.backgroundColor = 'white';
  menuBackBefore.style.width = '150px';
  menuBackBefore.style.height = '150px';
  menuBackBefore.style.borderRadius = '50%';
  menuBackBefore.style.position = 'absolute';
  menuBackBefore.style.bottom = '100px';
  menuBackBefore.style.left = '50%';
  menuBackBefore.style.transform = 'translateX(-50%)';
  menuBackBefore.style.borderRadius = '50%';
  menuBack.appendChild(menuBackBefore);
  body.appendChild(menuBack);
}
let addBtn = function(name, inside,lang) {
  // adding new button
  let newBtn = document.createElement("button");
  newBtn.classList.add(name.replace(/\s+/g, ''),"btn"  , "shadow" ,"radius");
  let buttonText = document.createTextNode(name);
  newBtn.appendChild(buttonText);
  newBtn.id = "btn"
  document[inside].appendChild(newBtn);
  
  // adding styles to button
  newBtn.style.backgroundColor = styles.style1[4][1];
  newBtn.style.color = styles.style1[1][4];
  if(lang === "ar"){
    newBtn.style.fontFamily = "Cairo"
    newBtn.style.fontWeight = "300"
  }else if(lang === "en"){
    newBtn.style.fontFamily = "Dosis"
    newBtn.style.fontWeight = "300"
  }
  (function(){
    newBtn.addEventListener("focus",function(){
      newBtn.style.border = "0";
    })
  })()

  newBtn.style.position = "absolute";
  newBtn.style.width = "150px";
  newBtn.style.height = "150px";
  newBtn.style.fontSize = "20px";
  newBtn.style.borderRadius = "50%";
  newBtn.style.top = "71.5%";
  newBtn.style.left = "50%";
  newBtn.style.transform = "translate(-50%, -50%)";
  newBtn.style.animation= "circle 1s ease-in-out infinite";
  newBtn.style.transition= "all ease-in-out 500ms";

  // let hover = document.querySelector(".btn:hover");
  // hover.style.backgroundColor = "red";

  const css = `
  @keyframes circle {
    50% {
      transform: translate(-50%, -50%) scale(1.2);
      animation-timing-function: ease-out;
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      -moz-transform: translate(-50%, -50%) scale(1.2);
      -ms-transform: translate(-50%, -50%) scale(1.2);
      -o-transform: translate(-50%, -50%) scale(1.2);
    }
  }
  .btn:hover {
    background-color: #adaf88 !important;
    cursor: pointer;
    color: white;
    animation: none;
    -webkit-animation: none;
  }
`
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);
newBtn.addEventListener("mouseover", function() {
  newBtn.style.animation = "none";
});
newBtn.addEventListener("mouseout", function() {
  newBtn.style.animation = "circle 2s infinite";
});

}
let body = function() {
  document.body.style.backgroundColor = styles.style1[3][2]
  
}
let randomQ = function(){

  const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey"
    },
    {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    }
  ];
  
  const quoteContainer = document.getElementById("quote-container");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const newQuoteButton = document.getElementById("btn");
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function displayQuote() {
    const randomQuote = getRandomQuote();
    quote.textContent = randomQuote.quote;
    author.textContent = randomQuote.author;
    quoteContainer.style.display = "block";
  }
  
  newQuoteButton.addEventListener("click", displayQuote);
  
  displayQuote();

}
let addQuoteDesign = function(){
  let quoteDive = document.createElement("div");
  let row = document.createElement("div");
  let column = document.createElement("div");
  let content = document.createElement("div");
  let q = document.createElement("p");
  let a = document.createElement("p");
  quoteDive.classList.add("quote-container")
  quoteDive.id = "quote-container"
  content.classList.add("rounded","border-0")
  content.style.backgroundColor = "white"
  content.style.fontFamily = "Dosis"
  content.style.fontWeight = "600"
  content.style.fontSize = "18px"
  quoteDive.style.margin = "50px"
  a.style.background = styles.style1[1][1];
  a.style.display = "inline"
  a.style.padding = "10px"
  a.style.color = "white"
  column.classList.add("col-12")
  row.classList.add("row")
  q.id = "quote" ;
  a.id = "author";
  quoteDive.appendChild(row)
  row.appendChild(column);
  column.appendChild(content)
  content.appendChild(q)
  content.appendChild(a)
  ///////
  document.body.appendChild(quoteDive)





}
// Execute all Codes
// body() 
addFonts() // Insert Google Font to html docoment Head
navBar("en") // Creat navbar and insert heading
title("en", "Press the button below to recieve a random quote!"); // Add Title
footer() // Add Footer below the Page
addQuoteDesign() // Design Quotes section
addBtn(" New Quote ","body","en") // Add New Button and insert it inside Footer.
randomQ() // get all Quotes operations using math library