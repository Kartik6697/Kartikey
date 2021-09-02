document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector(".grid")
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5 
    let platforms = []
    
    //function for create doodler
    function createDoodler() {
         //use in
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'    //for spacing doodler left
        doodler.style.bottom = doodlerBottomSpace + 'px'    //for spacing doodler bottom to set starting point
     }
    createDoodler()

    // class and property for platform
    class Platform {
        constructor(newPlatBottom) {
          this.left = Math.random() * 315
          this.bottom = newPlatBottom
          this.visual = document.createElement('div')
    
          const visual = this.visual
          visual.classList.add('platform')
          visual.style.left = this.left + 'px'
          visual.style.bottom = this.bottom + 'px'
          grid.appendChild(visual)
        }
      }


    //function to create a platform
    function createPlatforms() {
        for(let i =0; i < platformCount; i++) {
          let platformGap = 600 / platformCount //create platforms
          let newPlatBottom = 100 + i * platformGap    //manages platform positions variations
          let newPlatform = new Platform (newPlatBottom)
          platforms.push(newPlatform)
          console.log(platforms)
        }
      }
      createPlatforms()
      
    function start() {
        //if the game is not over we create doodler
        if (!isGameOver == false) {
            createDoodler()
            createPatforms()

        }
    }
    //attach to button to make game start
    start()

})