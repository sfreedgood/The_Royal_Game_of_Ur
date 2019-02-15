To Play, please click the following link, or copy-and-paste it into your browser search bar:
https://pages.git.generalassemb.ly/samfreedgood/The-Royal-Game-Of-Ur/

The site consist of three pages:
1. A landing page with a brief history of the game, including the orgin and historical significance
2. An instructions page with all necessary rules in order to play (also outlined below)
3. The interactive game board.

Game Rules:
-Players alternate turns rolling the dice and moving a single piece the subsequent number of spaces
-Players must move a piece each turn if able
-To move a piece to the end-zone (equivalent to 1 point), the players piece must land exactly on the end-space (ex. if the piece is one square away from the end, and the player rolls a 2 or higher, that piece cannot be moved)
-If a player lands on an opponents piece in the middle row, the opponents piece is removed and reset to the respective start position.
(At the moment this will not work if you click directly on the opponents piece, so in order to do so, please click on the top or bottom corners of the square)
-The first player to get all 6 pieces around the board and into their end-zone wins

For a brief demonstration, please refer to the link below:
https://youtu.be/0LrjMI_y8UE

To access the full project repository on GitHub, follow the link below:
https://git.generalassemb.ly/samfreedgood/The-Royal-Game-Of-Ur

Technologies Used:
-Vanilla Javascript (including Event Listeners)
-CSS, (including flexbox and media queries)
-HTML
-Quicktime to make the demo video
-Google Chrome Dev Console to troubleshoot and check all functionality

Approach:
Because of the need to limit move conditions for pieces and the unconventional board layout, I elected to create my board in HTML and then move my javascript-generated pieces around by appending them to the various board-space divs. In order to get the sequencing to work properly I had to run an extra step after adding the board-event-listeners, reordering them using a loop based on manually generated indexing keys. Another issue I had with this approach was that it meant the the pieces cover most of the board-space they occupy, making it difficult to implement the functionality of bumping opponents pieces. Aside for needing to improve the bumping-feature as mentioned, I was also unable to effectively implement a delay on the turn progression when a player rolls a zero. Because of this, when a player does roll a zero, it is very confusing. Despite these limitations (which I hope to resolve soon), the approach I took of making all the parts static, means that their positions on screen are predictable and the game scales well to wide variety of screen sizes with minimal interference.