const ob02 = document.querySelector(".ob02");
const textRtL = document.querySelector(".move");

const cb = function (entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("text-RtL");
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove("text-RtL");
        }
    });
}

const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: 0 //←はいりはじめると変化    1←出終わるときに変化
};

const io = new IntersectionObserver(cb, options);

io.observe(ob02);
io.observe(textRtL);



//memo
// インターフェースがでてきたら深追いしない

// IntersectionObserver.observe(target);
// entry.target