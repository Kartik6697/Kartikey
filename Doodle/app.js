//this is the event essentially saying that i only wanted the content of this file load only once
// insted of this you can put your script tag at the bottom in html file
document.addEventListener("DOMContentLoaded", () => {
  //this is for picking out the element from the html file, here we pick class grid
  const grid = document.querySelector(".grid");
  //creating a div for doodler here
  const doodler = document.createElement("div");
  let isGameOver = false; //initially the game is not over so it's false
  let speed = 5;
  let platformCount = 5; //initially we pass the no of platforms should be display into the grid
  let platforms = []; // empty array for the push newly created platform we've made
  let score = 0; //initialize variable globaly by 0
  let doodlerLeftSpace = 50; //variable define and initialize for leftspacing
  let startPoint = 250; //variable defining and initialize for starting point
  let doodlerBottomSpace = startPoint; //variable define for bottomspace and initialize as start point
  const gravity = 0.4;
  let upTimerId;
  let downTimerId;
  let isJumping = true; //this is called at initial level when jump function is called
  let isGoingLeft = false; //initially it should be false
  let isGoingRight = false; //initially it should be false
  let leftTimerId; //define globally for easy access
  let rightTimerId; //define globally for easy access

  // class for platform for new platform
  class Platform {
    // constructor for construct our class to create new platform
    constructor(newPlatBottom) {
      this.left = Math.random() * 315; // this for make sure that left spacing is anything from 315 px (400(grid_width)-85(platform_width)) by the help of random() method
      this.bottom = newPlatBottom;
      this.visual = document.createElement("div"); //create a div for each platform with visual

      //visual class list for style of platform
      const visual = this.visual;
      visual.classList.add("platform");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual); //passing to the grid our visual using appendchild() method
    }
  }

  // function for create a platform
  const createPlatforms=()=> {
    // we use loop for platform count it and display
    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount; // this is for platform gap here we have height of platform 600 / by platform count to manage gap
      let newPlatBottom = 100 + i * platGap; //here we are using loop increment the platform gap space
      // like 1 time platform gap is 120, for 2 time 240 like that...
      let newPlatform = new Platform(newPlatBottom);
      // push newly created platform value into the array
      platforms.push(newPlatform);
      // console.log(platforms);
    }
  }

  // function for move platforms
  const movePlatforms=()=> {
    //check the condition of doodler space for move
    if (doodlerBottomSpace > 200) {
      // check the individual platform moves bottom by four each time in interval of 30ms using setInterval method
      platforms.forEach((platform) => {
        platform.bottom -= 4;
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        //remove the platforms and add new one into the platform array
        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual; //grab our platform array go into it and get visual
          firstPlatform.classList.remove("platform"); //getting a class list of array and remove platform from it
          platforms.shift(); // this will help us to get rid from the platform array first item using shift() method
          // console.log(platforms);
          score++; //increment the score by move of the platform
          let newPlatform = new Platform(600); //pass new platform till our grid's height
          platforms.push(newPlatform); //pass this new platforms into our array
        }
      });
    }
  }

  //function for creating a doodler
  const createDoodler=()=> {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodlerLeftSpace = platforms[0].left; //this is for passing through a 0 into array at starting point and getting left of that platform
    //styling doodler for position
    doodler.style.left = doodlerLeftSpace + "px";
    doodler.style.bottom = doodlerBottomSpace + "px";
  }

  //function fall for get doodler back
  const fall=()=> {
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
    isJumping = false; // when fall function is called the value of isjumping change
    clearInterval(upTimerId); // js method for not let doodler go up anymore
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 5; //this is for get doodle down by 5
      doodler.style.bottom = doodlerBottomSpace + "px";
      // condition to check that the game is over
      if (doodlerBottomSpace <= 0) {
        gameOver();
      }

      //check the colision of doodler with platform
      //this all condition should be true for colision
      platforms.forEach((platform) => {
        if (
          //condition is to check on the platform
          doodlerBottomSpace >= platform.bottom &&
          doodlerBottomSpace <= platform.bottom + 15 && //the height of platform is 15
          doodlerLeftSpace + 60 >= platform.left && //doodler width is 60
          doodlerLeftSpace <= platform.left + 85 && //for check that doodler is not on the right side of the platform form out its width
          !isJumping
        ) {
          // console.log("jump"); //display when doodle jumps
          startPoint = doodlerBottomSpace; //if we are on platform then we overwrite the start
          jump();
          // console.log("start", startPoint);
          isJumping = true;
        }
      });
    }, 20);
  }

  // function for doodle jump
  const jump=()=> {
    clearInterval(downTimerId); //to clear down timerid when we jump so each time when we jump we clear the down timerid
    isJumping = true;
    upTimerId = setInterval(function () {
      //uptimerid pass through the function for every 30ms
      // console.log(startPoint);
      // console.log("1", doodlerBottomSpace);
      doodlerBottomSpace += 20; // essentially adding 20 doodle bottom space
      doodler.style.bottom = doodlerBottomSpace + "px";
      // console.log("2", doodlerBottomSpace);
      // console.log("s", startPoint);
      //condition for get doodler back down at position of jumpstartposition + 200
      if (doodlerBottomSpace > startPoint + 350) {
        // this condition is for doodler to jump to certain height after land to the platform
        fall();
        isJumping = false;
      }
    }, 30);
  }

  // function for operation move left side
  const moveLeft=()=> {
    // condition for if we moving left that time the right timerid interval should be clear
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      //condition for check that doodler is inside our grid or not
      if (doodlerLeftSpace >= 0) {
        // console.log("going left");
        doodlerLeftSpace -= 5; // condition to move our doodler left at particular point
        doodler.style.left = doodlerLeftSpace + "px";
      } else moveRight();
    }, 20);
  }

  // function for operation move right side
  const moveRight=()=> {
    // condition for if we moving right that time the left timerid interval should be clear
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      //changed to 313 (grid width - doodler width) to fit doodle image
      if (doodlerLeftSpace <= 313) {
        // console.log("going right");
        doodlerLeftSpace += 5;
        doodler.style.left = doodlerLeftSpace + "px";
      } else moveLeft();
    }, 20);
  }

  // function for operation move straight side
  const moveStraight=()=> {
    //clear every movement and simply move straight way
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  // function for doodler control
  //assign functions to keyCodes
  const control=(e)=> {
    doodler.style.bottom = doodlerBottomSpace + "px";
    //check the condition for movements and according to that call the particular functions
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  //  game over function to cleare everthing
  const gameOver=()=> {
    isGameOver = true; //at initially calling this function the game over is true
    //removing children of the grid using a while loop
    while (grid.firstChild) {
      // console.log("Game_Over");
      grid.removeChild(grid.firstChild);
    }

    //for displayig score
    grid.innerHTML = score;
    document.write = alert(`the final score is: ${score}`);
    // grid.innerHTML = (`<h6>The Final Score is:</h6> <br>${score}`)

    // clear the uptimerid, downtimerid, lefttimerid, righttimerid for make game glitching
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  const start=()=> {
    //condition that if is not over than create a doodler
    //also when we press the button the game will starts
    if (!isGameOver) {
      createPlatforms(); // this is called first because we want to initialize first array value 0 in createdoodler function
      createDoodler();
      setInterval(movePlatforms, 30); //move platform in particular time interval
      jump(startPoint); // calling jump function from startpoint
      document.addEventListener("keyup", control); // addeventlistner to get the movement value either right or left for our doodler
    }
  }
  start();
});
