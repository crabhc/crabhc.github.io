const jackScrolling = document.querySelectorAll('.jack');
const backgroundScrolling = document.querySelectorAll('.panelbg');

const panelOptions = {
    rootMargin: "-50% 0px -50% 0px"
};

const backgroundOptions = {
    rootMargin: "0px 0px -80% 0px"
};

const jackObserver = new IntersectionObserver(function (entries, jackObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
        }
    });
}, panelOptions);

jackScrolling.forEach(jack => {
    jackObserver.observe(jack);
});

const backgroundObserver = new IntersectionObserver(function (entries, backgroundObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            entry.target.classList.remove("bg-12");
        } else {
            entry.target.classList.add("bg-12");
        }
    });
}, backgroundOptions);

backgroundScrolling.forEach(background => {
    backgroundObserver.observe(background);
});