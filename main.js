let burger = document.querySelector("header .toggle");
// let burgerSpans = document.querySelectorAll("header .toggle span")
let nav = document.querySelector("header .header");
let threeDots = document.querySelector("header .three-dots");
let headerContact = document.querySelector("header .header-contact");
let burgerTwo = document.querySelector(".landing .two");
let menu = document.querySelector(".landing .menu");
let navTwo = document.querySelector(".landing .landing-links");
let closeMenu = document.querySelector(".landing .menu .speci2");
let menuSpan = document.querySelector(".landing .menu .speci");
let scroll =document.querySelector(".scroll-up");
let links = document.querySelectorAll(".nav li a");
let liLinks = document.querySelectorAll(".nav li");
// nav bar
window.onscroll = function () {
    if (window.scrollY >= 82) {
        navTwo.style.cssText = "top: 0;";
        menu.style.cssText = "position: fixed; top: 0; right: 0px;";
    }
    else {
        menu.style.cssText = "position: absolute; top: 0; right: 0;";
        navTwo.style.cssText = "top: 83px;"
        // navTwo.classList.add("closeTwo");
    }
    // scroll to top
    window.scrollY >= 434? scroll.classList.add("pop"): scroll.classList.remove("pop");
}
// onclick
scroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
// toggle icon
burger.addEventListener('click', function () {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        burger.classList.remove("slide")
        nav.classList.add("close");
    }
    else {
        nav.classList.add("show");
        burger.classList.add("slide")
        nav.classList.remove("close");
    }
});

// menu icon
    menu.addEventListener('click', function () {
        if (navTwo.classList.contains("showTwo")) {
            navTwo.classList.remove("showTwo");
            burgerTwo.classList.remove("slide")
            navTwo.classList.add("closeTwo");
            closeMenu.style.display = 'none';
            menuSpan.style.display = 'block';
        }
        else {
            navTwo.classList.add("showTwo");
            burgerTwo.classList.add("slide")
            navTwo.classList.remove("closeTwo");
            closeMenu.style.display = 'block';
            menuSpan.style.display = 'none';
        }
    });
// 3 dots

threeDots.addEventListener("click", function () {
    if (headerContact.classList.contains("appear")) {
        headerContact.classList.remove("appear");
        threeDots.classList.remove("turn");
        headerContact.classList.add("disappear");
    }
    else {
        headerContact.classList.add("appear");
        threeDots.classList.add("turn");
        headerContact.classList.remove("disappear");
    }
})

// footer

let quotes = [
    {
        name: "Jane Smit",
        ownQuote: "The staff here is really supportive, teachers are great, the school has a good structure. Thank you!",
    },
    {
        name: "Peter McMillan",
        ownQuote: "I am really enjoying my experience here. Teachers are very friendly and there is a friendly atmosphere.",
    },
    {
        name: "Kate Wilson",
        ownQuote: "I like that it has a busy atmosphere but it’s never stressful. Everyone is very nice and you can ask anything at any time.",
    },
];

let PreviousQuote = document.querySelector("footer .foot-content .first .foot-text .switch .icon i:first-child");
let nextQuote = document.querySelector("footer .foot-content .first .foot-text .switch .icon i:last-child");
let counter = 0;
let quotesLength = quotes.length;
let quotesSlider = document.querySelector("footer .foot-content .first .foot-text .quote");
let quoteName = document.querySelector("footer .foot-content .first .foot-text .switch .name");

nextQuote.addEventListener(("click"), function () {
    counter = (quotesLength+ counter+1) % quotesLength;
    quotesDisplay();
});
PreviousQuote.addEventListener(("click"), function () {
    counter = (quotesLength+ counter-1) % quotesLength;
    quotesDisplay();
})

let quotesDisplay = () => {
    quotesSlider.innerHTML = `
    <p>${quotes[counter].ownQuote}</p>
    `;
    quoteName.innerHTML = `
    <span>${quotes[counter].name}</span>
    `
};
window.onload = quotesDisplay;

// linls and li
links.forEach((n) => {
    n.addEventListener("click", removeActiveHeader)
});
liLinks.forEach((li) => {
    li.addEventListener("click", removeActiveLi)
});

// remove Active Li function
function removeActiveLi() {
    liLinks.forEach((li) => {
        li.classList.remove("active-li");
        this.classList.add("active-li");
    });
}
// remove Active link function
function removeActiveHeader() {
    links.forEach((n) => {
        n.classList.remove("active");
        this.classList.add("active");
    });
}