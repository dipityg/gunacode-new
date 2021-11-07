// variables

var set = [];
var board = [];
var deck = [];
var players = [];
var playerIndex;
var count = 0;
var gameGoing = false;

var exampleCount = 0;
var startTime, endTime;

// var xyValues = [
//   {x:50, y:7},
//   {x:60, y:8},
//   {x:70, y:8},
//   {x:80, y:9},
//   {x:90, y:9},
//   {x:100, y:9},
//   {x:110, y:10},
//   {x:120, y:11},
//   {x:130, y:14},
//   {x:140, y:14},
//   {x:150, y:15}
// ];

var testValue = 0;
var displayValue = "bro";

function arrayparse(data){
  
}

/*csv_data*/
function makeChart() {

    //xyValues[11].y =3;

  //var newxyValues = 3;
  //var newxyValues = [{}];
  //newxyValues[2] = 3;
  //newxyValues[2].y = 3;
  //newxyValues[3].x = 4;
  //newxyValues[3].y = 5;
  //newxyValues[2].y = 4;

  document.writeln("<canvas id=\"myChart\" style=\"width:100%;max-width:700px\"></canvas>");
  document.writeln("<p>"+displayValue+"</p>");
  // makeChart();
  

  //document.writeln("<canvas id=\"myChart\" style=\"width:100%;max-width:700px\"></canvas>");

  var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  var choletot = 0;
  var products = [];
  var totals = [];
  // populate a set of all the products
  for (let x in csv_data){
    // document.writeln("<p>"+x.Product+"</p>");
    if (!(products.includes(csv_data[x].Product))){
      prod = csv_data[x].Product;
      document.writeln("<p>"+csv_data[x].Product+"</p>");

      products.push(prod)

    }
  }
  // calculate the totals for all the products
  for (let i in csv_data){
    for (let j in products){
      if (csv_data[i].Product == products[j]){
        // document.writeln("<p>product"+products[j]+"</p>");

        var totalpres = parseInt(csv_data[i].NRx_Month_1) + parseInt(csv_data[i].NRx_Month_2)
        parseInt(csv_data[i].NRx_Month_3)+parseInt(csv_data[i].NRx_Month_4)+parseInt(csv_data[i].NRx_Month_5)+
        parseInt(csv_data[i].NRx_Month_6);
        // document.writeln("<p>nrx month 1 "+csv_data[i].NRx_Month_1+"</p>");
        // document.writeln("<p>totalpres "+totalpres+"</p>");

        var avgpres = totalpres/6;
        // document.writeln("<p>average "+avgpres+"</p>");
        choletot = choletot + avgpres;
        totals[j]=choletot;
    }

    }

  }

  
  document.writeln("<p>tot "+totals+"</p>");

  
  document.writeln("<p>"+products+"</p>");
  document.writeln("<p>"+totals+"</p>");
  var producty = (csv_data[0].Product);
  document.writeln("<p>"+producty+"</p>");

  var id = parseInt(csv_data[0].id);
  var month = parseInt(csv_data[0].NRx_Month_1);
  var month2 = 20
  // let obj = 
  var xyValues2 = [{x:id, y:month}];
  xyValues2[1] = {x:id, y:month2};
  // print(xyValues)
  
  new Chart("myChart", {
    
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues2
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 0, max:160}}],
        yAxes: [{ticks: {min: 0, max:160}}],
      }
    }
  });

  testValue = parseInt(csv_data[1].NRx_Month_1);
  displayValue = csv_data[0].NRx_Month_1;

  printValue = String(xyValues2[0].id);
  //printValue = "hey";


  // document.writeln("<p>"+displayValue+"</p>");
  document.writeln("<p>"+products+"</p>");
  document.writeln("<p>"+month+"</p>");
}


// starts the timer
function start() {
  startTime = 0;
  startTime = performance.now();
}

// ends the timer
function end() {
  endTime = 0;
  endTime = performance.now();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;

  var seconds = Math.round(timeDiff);
  //window.alert("That took " +seconds + " seconds");
  var time = "" + seconds;
  return time;
}

//////////////////////////////////////////////////////////////// START OF STYLING/SETUP CODE///////////////////////////////////////////////////////////////////

//this information represents the different sections for the htmlPage
let gameHeader = [

  //header1
  "Welcome!",

  //header2
  "Top Doctors",

  //header3
  "Trend of Total Prescriptions",
  "Future Top Targets"


];

/*this information represents the description for each section*/
let gameInfo = [

  /*each index of descript represents a newline in html
  <br> is used in arrays instead of the loop because certain lines shouldn't break */

  /*set game rules/examples*/

  [
    "Select 3 cards from the board to form a set. A matching set consists of cards with four features. For each card in a set, each feature must all match or all differ. <br>",
    "Four features of a card: color, number, texture, shape <br>",
    "Colors: Red, Blue, Green <br>",
    "Numbers: 1, 2, 3 <br>",
    "Texture: Empty, Striped, Filled <br>",
    "Shape: Diamond, Tilde, Oval <br>",
    " <br>",
    "Example Description of Features: <br>",
    "Color: Blue <br>",
    "Number: 1 <br>",
    "Texture: Empty <br>",
    "Shape: Diamond <br>",
    "Select several cards and deselect, then select ALL three to see how set selection in game will work <br>",
    " <br>",
    "Example of a Set: <br>",
    " <br>",
    "<button id=\"1\" class=\"exampleSet\"><img src=\"SetDeckImages/blueCard1.png\" alt=\"Blue Card One\"></button>",
    "<button id=\"2\" class=\"exampleSet\"><img src=\"SetDeckImages/blueCard2.png\" alt=\"Blue Card Two\"></button>",
    "<button id=\"3\" class=\"exampleSet\"><img src=\"SetDeckImages/blueCard3.png\" alt=\"Blue Card Three\"></button>",
    " <br>",
    " <br> Example Explanation: <br>",
    "Color: ALL same color (blue) <br>",
    "Number: ALL different number (1, 2, 3) <br>",
    "Texture: ALL same texture (empty) <br>",
    "Shape: ALL same shape (diamond) <br>",
    " <br>",
    "Good luck finding the matching sets! <br>"
  ],

  /*game tutorial*/
  [
    "Each player will get a turn. Once a player has selected three cards their choice is checked. You can deselect cards until your last choice. <br>",
    "If the selection is a set, player will earn a point and it will be the next players turn. <br>",
    "If it isn't a set, no points are awarded and it becomes the next players turn. <br>",
    " <br>",
    "How to play: <br>",
    "To start the game, click the Deal button. Enter the number of players and the names of players. <br>",
    "The first player can now click on three cards to select a set. A message will tell you if your set is correct or not. The next players will continue in the same way.<br>",
    "Click Hint if you need a hint! <br>",
    "See who can accumulate the most points!<br>",
    " <br>",
    "Game Buttons: <br>",
    "Deal: Starts the game <br>",
    "Hint: Tells two cards in the set, if no sets available, deals 3 more cards (if cards left) <br>",
    "New Game: Start a new game with same players after finding all the sets <br>",
    "Quit: Stop playing game and display the highest score. <br>", 
    "Deck: Tells how many cards are left in the deck. <br>"
  ],

];

//this information represents the different game controls/info
let gameSections = [

  //wrapper of divs
  "wrapper",

  //game controls
  "gameControls",

  //players next
  "players",

  //cards
  "cardWrapper"
];

let gameControls = [

  //wrapper is wrapped around gameControls, players, and cardWrapper
  [],

  //Deal: Starts the game
  //Hint: Highlights selected card that is part of set, if no set exist deal (3) more cards
  //New Game: Using same players and score start with new deck (only available if deck is empty of no sets)
  //Quit: Ends the game
  //Deck: Number of cards left in the deck
  ["Deal", "Hint", "NewGame", "Quit", "Deck"],

  //since players can be different every game this is not set until the user input is given 5
  [],

  //Creates (15) card divs of class card (all cards same class name)
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
];

//Author: Jared Lawson
//htmlWriter
//This function calls all the html writing functions to draw the whole html page
function htmlWriter() {

  //writes the html for introduction
  htmlIntro();

  //creates the event functionality for example 1 and example 2
  exampleSetEvents();

  //writes the html for the game
  htmlGame();
}

//Author: Jared Lawson & Sery Gunawardena
//htmlIntro
//This function writes the htmlIntro using gameInfo
function htmlIntro() {

  document.writeln("<div class = title>Prescriber Portal</div>");
  document.writeln("<div class = subtitle>Created By: GunaCode </div>");
  /* game rules and examples */
  //button
  document.writeln("<button type=\"button\" class=\"collapsible\">" + gameHeader[0] + "</button>")

  //content
  document.writeln("<div class=\"content\">");
  htmlDescript(0);
  document.writeln("</div>");

  /* header for game setup */
  //button
  document.writeln("<button type=\"button\" class=\"collapsible\">" + gameHeader[1] + "</button>")
  // document.writeln("<canvas id=\"myChart\" style=\"width:100%;max-width:700px\"></canvas>");
  // document.writeln("<p>"+displayValue+"</p>");
  // makeChart();
  // document.writeln("<p>"+displayValue+"</p>");
  // document.writeln("<p>"+printValue+"</p>");

  

  //content
  document.writeln("<div class=\"content\">");
  htmlDescript(1);
  document.writeln("</div>");

  //header for game
  //htmlHeaders(2);
  collapsibleStyling();

}

/*Javascript to set up the collapsible sections, from w3.schools.com*/
function collapsibleStyling() {
  var coll = document.getElementsByClassName("collapsible");

  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }


}

//Author: Jared Lawson
//htmlHeaders
//This function writes all the html headers
function htmlHeaders(k) {

  document.writeln("<h1>" + gameHeader[k] + "</h1>");
}

//Author: Jared Lawson
//htmlDescriptions
//This function writes all the html descriptions
function htmlDescript(k) {

  //html start tag paragraph
  document.writeln("<p>");

  //loop through the length of each description
  //k is the current description and j is the current line in that description
  document.writeln("<div class= intro>");
  for (let j = 0; j < gameInfo[k].length; j++) {
    document.writeln(gameInfo[k][j]);
  }
  document.writeln("</div>");

  //html end tag paragraph
  document.writeln("</p>");
}

//Author: Jared Lawson
//exampleSetAddEvent
//This function adds event listeners to the button classes exampleSet
function exampleSetEvents() {

  //Returns a list of elements with class name example Set (4)
  let example = document.getElementsByClassName("exampleSet");

  //adds event listeners to each button
  for (let k = 0; k < example.length; k++) {
    example[k].addEventListener(
      "click",
      function() {
        var htmlElement = this;
        exampleSetSelection(htmlElement);
      },
      false);
  }
}

//Author: Jared Lawson
//exampleSetSelect
//This function handles event selection
function exampleSetSelection(obj) {

  //first example shouldn't impact the exampleCount
  let firstExample = 0;

  //all examples use this activation if clicked turned green, clicked again gray
  obj.activated = obj.activated || false;
  obj.activated = !obj.activated;
  obj.style.borderColor = (obj.activated ? "green" : "grey");

  //the first example should not effect the exampleCount
  if (obj.id != firstExample) {
    //if this.activated is true, increment count, else decrement count
    countExampleSet(obj.activated);
  }

  //if all cards selected congrats user and reset borders
  if (exampleCount >= 3) {
    //call function to handle when the whole set selected
    exampleTwoReset();
  }
}

//Author: Jared Lawson
//countExampleSet
//This function handles incrementing/decrementing exampleCount
function countExampleSet(boolValue) {

  //if true, increment exampleCount, else decrement exampleCount
  if (boolValue) {
    exampleCount++;
  } else {
    exampleCount--;
  }
}

//Author: Jared Lawson
//resetExampleTwo
//This function handles reseting the example two cards
function exampleTwoReset() {

  //grab all the exampleSet buttons used when needing to reset example two
  let example = document.getElementsByClassName("exampleSet");

  //this loop turns exampleTwo back to gray after selecting the correct set
  for (let k = 1; k < example.length; k++) {
    //reset border to gray and set activated to false
    example[k].style.borderColor = "grey";
    example[k].activated = false;
  }

  //alert player they selected a correct match!
  window.alert("Correct set match! Congrats!");

  //reset the number of selected examples back to zero
  exampleCount = 0;
}

//////////////////////////////////////////////////////////////// END OF INTRO STYLING ///////////////////////////////////////////////////////////////////


//Author: Jared Lawson
//load
//This function loads the html functions, and the their javascript functionality
function load() {

  //writes all the html for the page
  htmlWriter();
}

// load();
