    // Easter egg hidden credits
    console.log('Developed by: Hein Dijstelbloem, Levi Meijer and Louis');
    console.log('GitHub: @bloxmine, @natuurlijklevi, @thatDesignr');
    // Konami code easter egg, button presses to change page into matrix looking mode
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    window.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            showKey(e.key);
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateMatrixMode();
                konamiIndex = 0;
            }
        } else {
            // Get the last pressed button element
            const lastPressedButton = document.querySelector('.key-circle:last-child');
            // Shake the last pressed button element
            if (lastPressedButton) shakeElement(lastPressedButton);
            konamiIndex = 0;
        }
    });
    // shake hip
    function shakeElement(element) {
        element.classList.add('shake');
        setTimeout(() => element.classList.remove('shake'), 1000);
    }
    // button combo
    function showKey(key) {
        const div = document.createElement('div');
        div.className = 'key-circle';
        const colors = ['red', 'blue', 'orange', 'green'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        div.style.backgroundColor = color;

        if (key === 'ArrowUp') {
            div.textContent = '↑';
        } else if (key === 'ArrowDown') {
            div.textContent = '↓';
        } else if (key === 'ArrowLeft') {
            div.textContent = '←';
        } else if (key === 'ArrowRight') {
            div.textContent = '→';
        } else if (key === 'b') {
            div.textContent = 'B';
        } else if (key === 'a') {
            div.textContent = 'A';
        } else {
            div.textContent = key;
        }
        document.body.appendChild(div);

        setTimeout(() => document.body.removeChild(div), 1000);
    }
   // activateMatrixMode();
    function activateMatrixMode() {
        // change fontys-purple to black
        document.documentElement.style.setProperty('--fontys-purple', '#000');
        // change fontys-blue to green
        document.documentElement.style.setProperty('--fontys-blue', '#0f0');
        document.documentElement.style.setProperty('--fontys-white', '#13b320');
        // change text-color-main to green
        document.documentElement.style.setProperty('--text-color-main', '#0f0');
        // add green glow effect
        document.documentElement.style.setProperty('--text-shadow', '0 0 5px #0f0');
        document.documentElement.style.setProperty('--side-white', '#000');
        // change text-color-secondary to black
        document.documentElement.style.setProperty('--text-color-secondary', '#000');
        document.documentElement.style.setProperty('--greycolor', '#000');
        document.documentElement.style.setProperty('--purplecolor', '#0f0');
        document.documentElement.style.setProperty('--pinkcolor', '#0f0');
        document.documentElement.style.setProperty('--louis-grey', '#0f0');
        document.documentElement.style.setProperty('--louis-grey-bg', '#0f0');
        // change background-image directly, from the class .showcase
        document.querySelector('.showcase').style.backgroundImage = 'url(../images/matrix/heading.png)';
        document.querySelector('.building-ovp').style.backgroundImage = 'url(../images/matrix/DroneImageFontysOVP.png)';
        //change gradients to nothing in 
        document.querySelector('section > div#gradient-right').style.backgroundImage = 'none';
        document.querySelector('section > div#gradient-left').style.backgroundImage = 'none';
        document.querySelectorAll('ul li svg path').forEach(path => path.setAttribute('stroke', 'black'));
        // change images to matrix counterparts, located in images/matrix
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            const src = img.src;
            img.src = src.replace('images', 'images/matrix');
        });


        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        const w = canvas.width = window.innerWidth;
        const h = canvas.height = window.innerHeight;
        const ypos = Array(300).fill(0);
        // Matrix code curtosy of: https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
        function matrix () {
            // Draw a semitransparent black rectangle on top of previous drawing
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, w, h);

            // Set color to green and font to 15pt monospace in the drawing context
            ctx.fillStyle = '#0f0';
            ctx.font = '15pt monospace';

            // for each column put a random character at the end
            ypos.forEach((y, ind) => {
                // generate a random character
                const text = String.fromCharCode(Math.random() * 128);

                // x coordinate of the column, y coordinate is already given
                const x = ind * 20;
                // render the character at (x, y)
                ctx.fillText(text, x, y);

                // randomly reset the end of the column if it's at least 100px high
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                // otherwise just move the y coordinate for the column 20px down,
                else ypos[ind] = y + 20;
            });
            }

            // render the animation at 20 FPS.
            setInterval(matrix, 50);
    }

    for (let i = 1; i <= 4; i++) {
        document.getElementById('myButton' + i).addEventListener('click', function() {
            var section = document.getElementById('mySection' + i);
            if (section.style.display === 'none') {
                section.style.display = 'block';
                gsap.fromTo(section, { opacity: 0, y: -50 }, { duration: 1, opacity: 1, y: 0, ease: "bounce.out" });
            } else {
                gsap.to(section, { duration: 0.3, opacity: 0, y: 50, ease: "power2.in", onComplete: function() { section.style.display = 'none'; } });
            }
        });
    }

    let lastTriggered = 0;

    document.querySelector('.nav-left img').addEventListener('click', function() {
        const now = Date.now();
        if (now - lastTriggered < 1000) {
          return;
        }
        lastTriggered = now;
      
        const div = document.createElement('div');
        div.className = 'flyby-div';
        document.body.appendChild(div);
      
        div.addEventListener('animationend', function() {
          document.body.removeChild(div);
        });
      });

// Stan bullet time code
// const THEME = {
//     default: 0,
//     matrix: 1
// }
// class Matrix {
//     constructor(attributes = {}) {
//         this.threshold = attributes.threshold || 5;
//         this.state = {
//             intensity: 0,
//             theme: THEME,
//             scroll: window.scrollY,
//             dimensions: {
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             },
//             position: {
//                 current: window.scrollY,
//                 previous: window.scrollY
//             },
//         }
//         this.setupEventListeners();
//     }

//     setupEventListeners() {
//         window.addEventListener("scroll", this.handleScroll);
//         window.addEventListener("resize", this.handleResize);
//         gsap.ticker.add(this.handleTick)
//     }

//     setTheme(theme) {
//         if (theme !== this.state.theme) {
//             this.state.theme = theme;
            
//             switch (this.state.theme) {
//                 case THEME.matrix: {
//                     document.body.classList.add('is-theme-matrix');
//                     // document.documentElement.style.setProperty('--fontys-purple', '#000');
//                     // // change fontys-blue to green
//                     // document.documentElement.style.setProperty('--fontys-blue', '#0f0');
//                     // document.documentElement.style.setProperty('--fontys-white', '#13b320');
//                     // // change text-color-main to green
//                     // document.documentElement.style.setProperty('--text-color-main', '#0f0');
//                     // // add green glow effect
//                     // document.documentElement.style.setProperty('--text-shadow', '0 0 5px #0f0');
//                     // // change text-color-secondary to black
//                     // document.documentElement.style.setProperty('--text-color-secondary', '#000');
//                     // document.documentElement.style.setProperty('--greycolor', '#000');
//                     // document.documentElement.style.setProperty('--purplecolor', '#0f0');
//                     // document.documentElement.style.setProperty('--pinkcolor', '#0f0');
//                     // document.documentElement.style.setProperty('--louis-grey', '#0f0');
//                     break;
//                 }
//                 case THEME.default: 
//                 default: {
//                     setTimeout(() => {
//                         document.body.classList.remove('is-theme-matrix');
//                     }, 1000)
//                 }
//             }
//         }
//     }

//     handleScroll = () => {
//         this.state.scroll = window.scrollY;
//     }


//     handleResize = () => {
//         this.state.dimensions.width = window.innerWidth;
//         this.state.dimensions.height = window.innerHeight;
//     }

//     handleTick = (time, delta) => { 
//         this.state.position.current = this.state.scroll;
//         this.state.intensity =( Math.abs(this.state.position.current - this.state.position.previous) * delta) / this.state.dimensions.height;
//         this.state.intensity > this.threshold ? this.setTheme(THEME.matrix) : this.setTheme(THEME.default);
//         this.state.position.previous = this.state.scroll;
//     }
    
// }

// new Matrix();