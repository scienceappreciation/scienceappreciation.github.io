const periods = Array.from(document.querySelectorAll(".period"));
let currentPeriod = periods[0];

let waiting = false;

function setCurrentPeriod(element) {
    if (element == currentPeriod) return;
    currentPeriod.classList.remove("active");
    currentPeriod = element;
    currentPeriod.classList.add("active");
}

function onNextButtonClicked(event) {
    const period = event.currentTarget.parentElement;
    const periodIndex = periods.findIndex(p => p == period);
    if (periodIndex == -1) return;

    let nextIndex;

    if (periodIndex + 1 >= periods.length) nextIndex = 0;
    else nextIndex = periodIndex + 1;
    
    setCurrentPeriod(periods[nextIndex]);
    if (nextIndex == 0) periods[nextIndex].scrollIntoView();

    waiting = true;
    setTimeout(() => {
        waiting = false;
    }, 1000);
}

function onPeriodClicked(event) {
    const period = event.currentTarget;

    if (!period.classList.contains("active") && !waiting) {
        setCurrentPeriod(period);
    }

    waiting = true;
    setTimeout(() => {
        waiting = false;
    }, 1000);
}

for (const period of periods) {
    period.addEventListener("click", onPeriodClicked);
    period.querySelector("button").addEventListener("click", onNextButtonClicked)
}