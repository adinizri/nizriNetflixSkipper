var checkState;
chrome.storage.sync.get(['isSkipChecked'], (result) => checkState = result.isSkipChecked);
document.addEventListener("DOMContentLoaded", function () {

    var checkbox = document.getElementById("skipCheckBox");
    checkbox.checked = checkState;
    checkbox.addEventListener('change', handleSkipChange);
});


function handleSkipChange (e) {
    const isEnable = document.getElementById("skipCheckBox").checked;
    chrome.storage.sync.set({ isSkipChecked: isEnable }, function () {
        console.log('Value is set to ' + isEnable);
    });
    console.log("test " + checkState);
    // let checkState2 = chrome.storage.sync.get(["isSkipChecked"]).isSkipChecked;
}