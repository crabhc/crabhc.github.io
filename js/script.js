const jackScrolling = document.querySelectorAll('.jack');

const panelOptions = {
    rootMargin: "-50% 0px -50% 0px"
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
