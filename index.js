//Select the input, start button & pause button with unique IDs
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI; //2piR
circle.setAttribute('stroke-dasharray', perimeter);

//Callback functions to know when a significant point is hit within our timer
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('Timer Starting');

    },
    onTick(timeRemaining) {
        console.log('Timer just ticked');
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
        // currentOffset = currentOffset - 1;
    },

    onComplete() {
        console.log('Timer has completed')

    }
});