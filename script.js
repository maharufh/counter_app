let counter = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counter;
}

function increment() {
    counter++;
    updateCounter();
}

function decrement() {
    counter--;
    updateCounter();
}

function resetCounter() {
    counter = 0;
    updateCounter();
}
