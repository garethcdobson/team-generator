# Random Football Team Generator
Technical code challenge set as the final component of the DevelopMe Coding Fellowship.
Live site can be viewed here: https://garethcdobson.github.io/team-generator/

## Setup & Running Project
Instructions to setup and run the project locally, npm package manager is required.
Clone the git repo
```
git clone git@github.com:garethcdobson/team-generator.git
```
Run npm install
```
npm install
```
Run npm start, when packages are finished installing. Page will be viewable on localhost:3000
```
npm start
```
## Brief
To create a tool which randomly picks a 5-a-side football team from a list of 10 names (10 players = 2 teams of 5). Optional advanced features may include:

* Support for n-a-side, where a list of any length can be split into two teams.
* Support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly.

## MVP
* An input for each player name that would allow the user to input 10 names.
* A button that generates two random teams based on the 10 names input by the user.
* A reset button which allows the user to reset the list of names input and enter new names if needed.

## Wireframes
### MVP First Drafts (Desktop)
![Wireframe Players](/wireframes/players.png)
![Wireframe Teams](/wireframes/teams.png)

Decision to base the layout on central columns as this provides a simple layout that is similar on both large desktop screens and smaller mobile devices. The mobile version will stack central columns on the team page to produce a suitable layout for smaller width screens such as mobiles and tablets. The initial wireframes are produced with the minimum viable product in mind, a simple web-based app that enables the user to input player names, and clear them in cases of error, and generate two randomly selected teams from these names. The wireframes above support the input of any amount of players and thus two teams of any equal size - the content containers will simply expand and vertical scroll used to navigate the page. 

#### Stretch Features
When the MVP is achieved, I would like to improve the app with two additional features: 
1. The ability to input player ability and balance the teams based on this input. 
2. The addition of player icons to make the app's interface more visually engaging. 

## Technology/Skills Used
React, Redux, Javascript, HTML, CSS, SASS, Git, Wireframing.

## App Features
1. Support for n-a-side, where a list of players of any length can be split into two teams (above four, see below).
2. Ensures a minimum of four players are input before teams can be generated.
3. Client-side JS validation to ensure only letters and spaces are input in player name.
4. Function that generates random teams based on the Fisher-Yates Shuffle.
5. Function for deleting last player and clearing all players if required.
6. Function for re-shuffling teams.
7. Function to reset site.
8. Responsive design.
9. Player-shirt icons to make the app more visually engaging.

## Testing
The web app has been tested across a range of devices (desktop, tablet, phones) and across a range of browsers (Safari, Firefox, Chrome, IE). I had issues with the desktop layout rendering properly on Safari, I eventually found that this was due to Safari's default CSS settings, this was corrected with a small change to the web app's CSS styling.

## What I Would Like To Change
1. With more time, I would like to add a feature for balancing teams based on ability. I figured out that if you input a player rating, you could write a conditional to check if the difference between the total ratings of the two newly generated teams was within a chosen range (similar to one another), only if this condition was met the generated teams would be rendered on screen, if not the teams would be reshuffled and checked against the conditional.
2. I would also like to add colour picker components to enable the user to change the colours of the player-shirt icons.
3. Lastly, I would have liked to minify my code in order to reduce the size of the project and complete more testing on performance and accessibility.

## Screenshots
### Desktop (Home Page)
![Desktop Home Screen](/mockups/desktop-home.png)
### Desktop (Teams Page)
![Desktop Teams Screen](/mockups/desktop-teams.png)
### Mobile (Home Page)
![Mobile Home Screen](/mockups/mobile-home.png)
### Mobile (Teams Page)
![Mobile Teams Screen](/mockups/mobile-teams.png)
### Tablet (Home Page)
![Tablet Home Screen](/mockups/tablet-home.png)
### Tablet (Teams Page)
![Tablet Teams Screen](/mockups/tablet-teams.png)
