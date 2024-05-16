    // Easter egg hidden credits
    console.log('Developed by: Hein Dijstelbloem');
    console.log('GitHub: @bloxmine');
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
            konamiIndex = 0;
        }
    });

    // fancy keys
    function showKey(key) {
        const div = document.createElement('div');
        div.className = 'key-circle';
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

    function activateMatrixMode() {
        // change fontys-purple to black
        document.documentElement.style.setProperty('--fontys-purple', '#000');
        // change fontys-blue to green
        document.documentElement.style.setProperty('--fontys-blue', '#0f0');
        // change text-color-main to green
        document.documentElement.style.setProperty('--text-color-main', '#0f0');
        // add green glow effect
        document.documentElement.style.setProperty('--text-shadow', '0 0 5px #0f0');
        // change text-color-secondary to black
        document.documentElement.style.setProperty('--text-color-secondary', '#000');


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