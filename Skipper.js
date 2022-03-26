if (typeof window !== 'undefined') {
    console.log('You are on the browser');


    window.onload = () => {
        waitForElm('[data-uia="player-skip-intro"]').then((elm) => {
            debugger;
            elm.click();
            console.log('Element is ready');
            console.log(elm.textContent);
        });
        var MutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.target && mutation.target.innerText && mutation.target.innerText.indexOf('Skip intro') != -1) {
                    mutation.target.click();
                    console.log('Clicked');
                }
            });
        });

        MutationObserver.observe(document.body, { attributes: true, subtree: true, childList: true, CharacterData: true });
    };

    window.addEventListener('DOMContentLoaded', (event) => {
        waitForElm('[data-uia="player-skip-intro"]').then((elm) => {
            debugger;
            elm.click();
            console.log('Element is ready');
            console.log(elm.textContent);
        });
        var MutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.target && mutation.target.innerText && mutation.target.innerText.indexOf('Skip intro') != -1) {
                    mutation.target.click();
                    console.log('Clicked');
                }
            });
        });

        MutationObserver.observe(document.body, { attributes: true, subtree: true, childList: true, CharacterData: true });
    });
}


function waitForElm (selector) {

    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


// waitForElm('[data-uia="player-skip-intro"]').then((elm) => {
//     console.log('Element is ready');
//     console.log(elm.textContent);
// });