# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 17th| Project Description | Incomplete
|Dec 17th| Wireframes / Priority Matrix / Functional Components | Incomplete
|Dec 17th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 18th| Pseudocode / actual code | Incomplete
|Dec 18th| Initial Clickable Model  | Incomplete
|Dec 19th| Local Storage | Incomplete
|Dec 19th| MVP | Incomplete
|Dec 20th| Quicktime | Incomplete
|Dec 21st| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

The Royal Game of UR is a race. Each player starts with 6 pieces. Players alternate turns rolling a die (0-4) and may move one piece x number of spaces (0-14). Each player has 4 safe spaces at the beginning and 2 at the end, the8 spaces in the middle are shared. Star spaces are safe space (and allow player to re-roll the dice post-mvp). Each space cannot have more than one piece. If an opposing player lands on an occupied space, the existing piece is removed from the game (excluding safe space, which cannot be landed on if occupied (this may be post-mvp)). First player to get all 6 pieces around the board and off the end wins (post mvp, player must get exact roll to leave board). 

## Wireframes

https://marvelapp.com/3b39a10

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix. 

Feature      | Time  | Priority 
Landing Page |  1hr  | Mid
Instructions | 1.5hs | Mid-High
Game Board   |  1hs  | High
Pieces       |  2hs  | High
Player Turns |  2hs  | Mid-High
Dice Roll    | 30min | Mid
Move Pieces  |  10hs | High
Check Win    | 1.5hs | Mid
Restart      |  4hs  | Low

MovePiece SubFeature  | Time  | Priority
Move piece on Board   |  2hs  | High
Check if Special Space| 30min | Low
If Special Space:------
ReRoll and Protect    | 1.5hs | Low
Check if space taken  | 1.5hs | Mid
If Space Taken:--------
Prevent Move OR          | 1.5hs | Mid
Remove Opponent Piece |  2hs  | Mid
to Start
Move piece to Finish  |  1hr  | High


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Instructions
- Game Board
- Pieces
- Player Turns
- Dice Roll
- Move Pieces: Move Piece on Board
- Move Piece to Finish
- Check Win

#### PostMVP 

- Prevent move to occupied space
- knock opponent piece off occupied neutral space
- Implement Special Spaces:
- ReRoll
- Protect space
- Reset without refresh

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Landing Page

### Game Initialization

### Playing The Game 

### Winning The Game

### Resetting The Game

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Landing Page |  M  | 1hr | 2hs| 2hs|
|Instructions | M-H | 1.5hs |2.5hs|30min|
|Game Board   |  H  | 1hs |5.5hs|3hs|
|Pieces       |  H  | 2hs |6.5hs|1hr|
|Player Turns | M-H | 2hs |8.5hs|2hs|
|Dice Roll    | M | 1hr |9hs|30min|
|Move Pieces  |  H | 10hs |0hs|0hs|
|MovePiece SubFeature  | -- | -- | -- |-- | --|
|Move piece on Board   |  H  | 2hs | 11hs | 2hs|
|Check if Special Space| L | 30min| 0hs | 0hs|
|If Special Space | -- | -- | -- |-- | --|
|ReRoll and Protect    | L | 1.5hs|0hs | 0hs|
|Check if space taken  | L | 1.5hs|13hs | 2hs|
|If Space Taken | -- | -- | -- |-- | --|
|Prevent Move OR          | M | 1.5hs|15hs | 2hs|
|Remove Opponent Piece to Start|  M  | 2hs|16.5hs | 1.5hs|
|Move piece to Finish  |  H  | 1hr|17.5hs | 1hs|
|Check Win    | M | 1.5hs |0hs|0hs|
|Restart      | L | 4hs |0hs|0hs|

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
// here is the code to reverse a string of text
}
```

## Change Log
Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
