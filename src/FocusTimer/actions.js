import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
    console.log('toggleRunning function');
    state.isRunning = document.documentElement.classList.toggle('running');
    
    timer.countdown();
}

export function reset() {
    console.log('set reset');
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

export function set() {
    console.log('set function');
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
}

export function toggleMusic() {
    console.log('set toggleMusic');

    state.isMute = document.documentElement.classList.toggle('music-on');

    if(state.isMute) {
        console.log('verdade')
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause();
}