# Tic Tac Toe

[Live Game:](https://colekins.github.io/tictactoe/) hosted on GitHub Pages.

## Technologies

### Game utilizes:

  1. HTML
  2. CSS
  3. SASS
  4. Bootstrap
  5. Javascript
  6. jQuery
  7. AJAX calls to external API.
  8. Webpack (require system)

## Planning & Development
Game planning began with a high-level wireframe of the SPA layout and appearance. During development, my main strategy was to break down larger regions of the project into smaller tasks. The main areas, after setting up an HTML/CSS environment were the Game Engine, User Authentication, and API communication. I faced the most challenges within the final stages of the project, but learned some valuable lessons along the way. I know now that it's crucial to work very methodically right from the start, so that you fully consider any implications of how you're setting up the initial code and control flow. I faced some issues with the creation of game API functions later on due to a lack of separation of concerns within some of the JS files. Ultimately I was able to work around these roadblocks, but I think I caused myself uncecessary headaches. I also faced some inital issues with CSS/bootsrap, mostly in the realm with box-alignment. This is still not set up in an ideal way and I am continuing to tinker with it. I'm finding that sometimes certain CSS changes do not reflect on the page in the way I'm expecting.

I had begun working on a "saved games" dropdown menu that appears after the user signed in. I got as far as allowing the user to load up a previously saved and unfinished game onto the game-board. However, once this loaded- the game logic was no longer functioning properly. I decided to pull out these elements for now since they were not fully functional. If I have time I would like to work on this again.

[Wireframes](https://i.imgur.com/PvzoAKu.jpg)
Early user stories:
- "As a user, I want to be able to sign in with a unique username/password."
- "As a user, I want to be able to save my games"
- "As a user, I want to practice against myself"
- "As a user, I want to retrieve previously saved games"
