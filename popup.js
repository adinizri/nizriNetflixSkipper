
document.addEventListener("DOMContentLoaded", function () {//code that runs after popup is loaded

    var checkbox = document.getElementById("skipCheckBox"); // get the checkbox
    // get the current checkbox state from local storage and change the checkbox to the current state
    chrome.storage.sync.get(['isSkipChecked'], (result) => document.getElementById("skipCheckBox").checked = result.isSkipChecked);
    checkbox.addEventListener('change', handleSkipChange);
});



function handleSkipChange (e) {
    const isEnable = document.getElementById("skipCheckBox").checked;
    chrome.storage.sync.set({ isSkipChecked: isEnable }, function () { // updating local storage 
        console.log('Value is set to ' + isEnable);
    });


}