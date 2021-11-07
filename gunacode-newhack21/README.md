# SS-PBJ-Project5
This program allows players to play the Game of Set on a single web page. 
## Contributors: S.S. PBJ
Sarah Platt, Sery Gunawardena, Bhavya Jayashankar, Jared Lawson, Pratik Parida

## Table of Contents:
- Repository Setup
- Files
- Game Instructions 
- Testing
- Acknowledgments

## Repository Setup:
Clone repository by running (in terminal)

```bash
git clone https://github.com/cse3901-2020au-1730/SS-PBJ-Project-5.git
```

## Files:
- functions.js
- page1.html
- stylesheet.css

## Game Instructions:
1. To start the program, click on page1.html in the file system. This will open the game in the Firefox Web Browser. 

    ![File System](/images/filesystem.PNG)
    ![Website](/images/page1.PNG)
    
2. Click on the first collapsible section to expand and read the Game Rules and Examples. 

    ![Game Rules](/images/gamerules.PNG)

3. Click on the second collapsible section to expand and read the Game Tutorial. 
    ![Game Tutorial](/images/gametutorial.PNG)
    
4. Click on the Deal button to start playing the game. Enter the number of players and names of those players. 
     ![Deal Button](/images/deal.PNG)
     ![Entering Players](/images/players.PNG)
     
5. Click on any three cards to select a set. The game will tell you if you have made a correct or incorrect selection, the time you took, and increment the your points. 
     ![Click](/images/click.PNG)
     ![Incorrect Selection](/images/incorrect.PNG)
     ![Correct Selection](/images/correct.PNG)
     
6. Click on the hint button before starting your turn if you need a hint. If there are sets on the board, it will tell you two cards in one of the sets. Otherwise, it will add three more cards to the deck. 
     ![Hint](/images/hint.PNG)
     
7. Click Deck to see the number of cards left in the deck. 
    ![Deck](/images/deck.PNG)

8. Click Quit to display the final scores! 
    ![Quit](/images/quit.PNG)
    
9. Click NewGame to keep the same players, reset scores, and get a new board. 

## Testing:
Install Cypress
```bash
npm install cypress --save-dev
```  
To open Cypress 
```bash
node_modules/.bin/cypress open
```  
- A pop-up will appear. Click on game_spec.js

![Start Message](/images/cypress.png)

- You will be directed to the testing page. The left bar will show all the tests.

![Start Message](/images/testing.png)

- Click on the green check marks to view the details of the test.

![Start Message](/images/side-view.png)

- Hover over '-click' to view what the test did.

![Start Message](/images/select-cards.png)

## Acknowledgments
Thank you to w3schools.com and stackexchange.com. 
- Implementation of array combinations: https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
- Creating a collapsible section: https://www.w3schools.com/howto/howto_js_collapsible.asp
