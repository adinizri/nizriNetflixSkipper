var checkState;

(() => {
    chrome.storage.sync.get(['isSkipChecked'], (result) => checkState = result.isSkipChecked); // check if skip enable in local storage

    window.addEventListener('load', () => {
        if (checkState) {
            bodyObserver.observe(document.body, observerOptions); //gets all the html elements 
        }
    });

})();
const observerOptions = {
    subtree: true,
    childList: true
};

// running on the elements and searching element with  data-uia="player-skip-intro" (its the skip button) and click it
const bodyObserver = new MutationObserver(mutations => {

    mutations.forEach(mutation => {

        mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
                const skipButton = node.querySelector('button[data-uia="player-skip-intro"]');
                if (skipButton) {

                    // small delay just for visuals
                    setTimeout(function () {
                        try {
                            debugger;
                            skipButton.click();
                            chrome.storage.sync.get(['isSkipChecked'], (result) => {
                                console.log(result.isSkipChecked);
                                checkState = result.isSkipChecked;
                            });
                        } catch (error) {

                        }
                    }, 300);
                    try {
                        skipButton.querySelector('span').innerHTML = "Skipping...";
                    } catch (error) {

                    }
                }
            }
        });
    });
});
