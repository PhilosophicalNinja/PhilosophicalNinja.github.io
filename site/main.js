//functions
//Vocabularanary
//misogynist talisman bemoan abhor placid
class Timer {
    constructor(mode, frequency, time = null){
        this.timePassed = 0;
        this.timeTotal = time;
        if(mode === "stopwatch"){
            this.timeInterval = setInterval(() => {
                this.timePassed += frequency;
            }, frequency);
        } else {
            if(mode === "timer"){
                this.timeInterval = setInterval(() => {
                    if(this.timePassed >= this.timeTotal){
                        clearInterval(this.timeInterval);
                    }
                    this.timePassed += frequency;
                }, frequency);
            }
        }
    }
    getTime() {
        return this.timePassed;
    }
    end() {
        clearInterval(this.timeInterval);
        delete(this);
    }
}

function fadeIn(element, time){
    let timePassed = 0;
    let animationInterval = setInterval(() => {
        element.style.opacity = Number(element.style.opacity) + 0.01;        
        timePassed += time/100;
        if(timePassed >= time){
            clearInterval(animationInterval);
        }
    }, time/100);
}

function gradualTranslate(element, distance, direction, time){
    let timePassed = 0;
    let animationInterval = setInterval(() => {
        switch(direction){
            case "left": 
                element.style.left = `${Number(element.style.left.slice(0, -2)) - distance/100}px`;
                console.log(element.style.left);
                break;
            case "right":
                element.style.right = `${Number(element.style.right) - distance/100}px`;
                break;
            case "up":
                element.style.top = `${Number(element.style.top) - distance/100}px`;
                break;
            case "bottom":
                element.style.bottom = `${Number(element.style.bottom) - distance/100}px`;
                break;
        }
        timePassed += time/100;
        if(timePassed >= time){
            clearInterval(animationInterval);
        }
    }, time/100);
}
//opacity is 1 in style.css
var nodeList = document.querySelectorAll(".hidden");

nodeList.forEach(element => element.addEventListener("mouseover", () => fadeIn(element, 500)));