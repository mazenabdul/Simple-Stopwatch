class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        startButton.addEventListener('click', this.start)
        pauseButton.addEventListener('click', this.pause)

    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.timerId = setInterval(this.tick, 20);

    }
    tick = () => {

        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }
        const timeRemaining = this.timeRemaining;
        this.timeRemaining = timeRemaining - .02;

        if (this.timeRemaining <= 0) {
            this.onComplete();
            this.pause();
        }

        console.log(timeRemaining)

    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {

        this.durationInput.value = time.toFixed(2);
    }

    pause = () => {
        clearInterval(this.timerId);
        console.log('Paused the timer');
    }

}