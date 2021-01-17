const dinosaur = document.querySelector(".dinosaur");

const background = document.querySelector(".background");

let isJump = false;

let position = 0;

function pressButtom(event) {
    if (event.keyCode == 32 || event.keyCode == 38) {
        if (!isJump) {
            jump();
        };
    };
};

function jump() {
    isJump = true;
    
    let upInterval = setInterval(() => {
        position += 20;

        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJump = false;
                }
                else {
                    position -= 20;
                    dinosaur.style.bottom = position + 'px';
                }
            }, 20);
        }
        else {

        }

        dinosaur.style.bottom = position + 'px';
    }, 20);
}

function creatCactus() {
    const cactus = document.createElement('section');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus)

    let interval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

        if (cactus < -60) {
            clearInterval(interval);
            background.removeChild(cactus);
        }
        else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(interval);
            document.body.innerHTML = "<h1 class='game_over'>GAME OVER</h1>";
        }
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(creatCactus, randomTime)
}

creatCactus();
document.addEventListener('keyup', pressButtom);