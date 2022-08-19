// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        console.log("fuck you");
        var element_arr = document.getElementsByClassName("has-numbering");
        var arr_length = element_arr.length;
        for(var i =0; i<arr_length; i++) {
            element_arr[i].setAttribute('onclick','mdcp.copyCode(event)');
        }


         element_arr = document.getElementsByClassName("signin");
        arr_length = element_arr.length;
        for(var i =0; i<arr_length; i++) {
            element_arr[i].setAttribute('onclick','hljs.copyCode(event)');
        }
    
setInterval(function () {
    var element = document.getElementsByClassName("passport-login-container")[0];
    if(element!=undefined)
element.remove(); 
  
}, 500);
    });
  }



