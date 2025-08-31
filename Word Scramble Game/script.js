let currentWord = "";
let scrambledWord = "";
let score = 0;
let playsLeft = 3;
let timeLeft = 30;
let timer;
let isSoundOn = true;
let draggedLetter = null;


const scoreCount = document.getElementById("score-count");
const timesPlays = document.getElementById("timesplays");
const timeTaken = document.getElementById("time-taken");
const scrambledLettersContainer = document.getElementById("scrambled-letters");
const answerSlotsContainer = document.getElementById("answer-slots");
const hintText = document.getElementById("hint-text");
const volumeBtn = document.getElementById("volume-btn");
const hintBtn = document.getElementById("hint-btn");
const refreshBtn = document.getElementById("refresh-word");
const nextBtn = document.getElementById("next-word");
const resetBtn = document.getElementById("resets-word");


function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 20 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animationDelay = Math.random() * 15;
        const hue = Math.random() * 360;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        particle.style.animationDelay = `${animationDelay}s`;
        particle.style.background = `hsla(${hue}, 70%, 70%, 0.3)`;
        particle.style.boxShadow = `0 0 15px hsla(${hue}, 70%, 70%, 0.5)`;
        
        particlesContainer.appendChild(particle);
    }
}


function initGame() {
    clearInterval(timer);
    score = 0;
    playsLeft = 3;
    timeLeft = 30;
    
    
    scoreCount.textContent = score;
    timesPlays.textContent = playsLeft;
    timeTaken.textContent = `${timeLeft}s`;
    hintText.textContent = "Hint: Click the question mark for a hint";
    
    
    nextWord();
    
    
    setupEventListeners();
    
    
    createParticles();
}

function setupEventListeners() {
    volumeBtn.addEventListener("click", toggleSound);
    
    
    hintBtn.addEventListener("click", showHint);
    
    
    refreshBtn.addEventListener("click", refreshWord);
    
    
    nextBtn.addEventListener("click", nextWord);
    
    
    resetBtn.addEventListener("click", initGame);
}


function toggleSound() {
    isSoundOn = !isSoundOn;
    volumeBtn.classList.toggle("fa-volume-up", isSoundOn);
    volumeBtn.classList.toggle("fa-volume-mute", !isSoundOn);
    if (isSoundOn) playSound("click");
}


function showHint() {
    const wordObj = window.words.find(w => w.word === currentWord);
    if (wordObj) {
        hintText.textContent = `Hint: ${wordObj.hint}`;
    }
    
    if (isSoundOn) playSound("hint");
}


function refreshWord() {
    if (currentWord) {
        scrambleWord(currentWord);
        renderLetters();
        clearAnswerSlots();
        resetTimer();
    }
    
    if (isSoundOn) playSound("refresh");
}


function nextWord() {
    
    const randomIndex = Math.floor(Math.random() * window.words.length);
    currentWord = window.words[randomIndex].word;
    
    
    scrambleWord(currentWord);
    
    
    renderLetters();
    createAnswerSlots();
    resetTimer();
    startTimer();
    
    
    hintText.textContent = "Hint: Click the question mark for a hint";
    
    if (isSoundOn) playSound("next");
}


function scrambleWord(word) {
    let chars = word.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    scrambledWord = chars.join('');
}


function renderLetters() {
    scrambledLettersContainer.innerHTML = '';
    
    for (let char of scrambledWord) {
        const letterElement = document.createElement('div');
        letterElement.className = 'box box-left floating';
        letterElement.textContent = char;
        letterElement.draggable = true;
        
        
        letterElement.addEventListener('dragstart', handleDragStart);
        letterElement.addEventListener('dragend', handleDragEnd);
        
        scrambledLettersContainer.appendChild(letterElement);
    }
}


function createAnswerSlots() {
    answerSlotsContainer.innerHTML = '';
    
    for (let i = 0; i < currentWord.length; i++) {
        const slotElement = document.createElement('div');
        slotElement.className = 'box box-right floating';
        slotElement.dataset.index = i;
        
        
        slotElement.addEventListener('dragover', handleDragOver);
        slotElement.addEventListener('drop', handleDrop);
        
        answerSlotsContainer.appendChild(slotElement);
    }
}


function clearAnswerSlots() {
    const slots = answerSlotsContainer.querySelectorAll('.box');
    slots.forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('correct', 'incorrect');
    });
}


function handleDragStart(e) {
    draggedLetter = this;
    setTimeout(() => this.style.opacity = '0.5', 0);
}

function handleDragEnd(e) {
    draggedLetter = null;
    setTimeout(() => this.style.opacity = '1', 0);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (draggedLetter) {
        this.textContent = draggedLetter.textContent;
        
        
        checkAnswer();
    }
}


function checkAnswer() {
    const slots = answerSlotsContainer.querySelectorAll('.box');
    let userAnswer = '';
    
    slots.forEach(slot => {
        userAnswer += slot.textContent || ' ';
    });
    
    userAnswer = userAnswer.trim();
    
    if (userAnswer.length === currentWord.length) {
        if (userAnswer === currentWord) {
            score += 10;
            scoreCount.textContent = score;
            
            
            const slots = answerSlotsContainer.querySelectorAll('.box');
            slots.forEach(slot => slot.classList.add('correct'));
            
            if (isSoundOn) playSound("correct");
            
            
            setTimeout(nextWord, 1500);
        } else {
            const slots = answerSlotsContainer.querySelectorAll('.box');
            slots.forEach(slot => slot.classList.add('incorrect'));
            
            if (isSoundOn) playSound("incorrect");
            
            
            setTimeout(() => {
                slots.forEach(slot => {
                    slot.classList.remove('incorrect');
                    slot.textContent = '';
                });
            }, 1000);
        }
    }
}


function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timeTaken.textContent = `${timeLeft}s`;
    
    timer = setInterval(() => {
        timeLeft--;
        timeTaken.textContent = `${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            playsLeft--;
            timesPlays.textContent = playsLeft;
            
            if (playsLeft <= 0) {
                alert(`Game Over! Your final score is ${score}`);
                initGame();
            } else {
                nextWord();
            }
        }
    }, 1000);
}


function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timeTaken.textContent = `${timeLeft}s`;
    startTimer();
}


function playSound(type) {
    console.log(`Playing sound: ${type}`);
}


window.onload = initGame;