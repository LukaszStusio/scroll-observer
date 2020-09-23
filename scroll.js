console.log('it works!');

// intersection observer:

const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

// payload[0] > first observed item by this observer and ratio of its revealance:
function obCallback(payload) {
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // below: stop observing the element
        ob.unobserve(terms.lastElementChild);
    };
};

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    treshold: 1,
});


ob.observe(terms.lastElementChild);