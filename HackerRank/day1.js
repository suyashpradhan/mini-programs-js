/* 
!Complete the following functions in the editor below: getArea(length, width): Calculate and return the area of a rectangle having sides and .getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides and.
*/

/* function getArea(length, width) {
  return length * width;
}

function getPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(getArea(3, 4.5));
console.log(getPerimeter(3, 4.5)); */

//!Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

//?Iterative Approach
function factorial(n) {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer = answer * i;
  }

  return answer;
}

//?Recursive Approach
function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
console.log(factorialRecursive(6));

let user = {
  name: "Coder Jain",
};

let userList = [user];
user = null;

console.log(userList);

var __acstoolbar = {};
__acstoolbar.servicekey = "BannerADs_JC";
__acstoolbar.apikey = "test_org";
__acstoolbar.tracelevel = "1";
__acstoolbar.language = "english";
__acstoolbar.target = "https://demo2.avhan.com:9443";
__acstoolbar.visible = "false";
__acstoolbar.theme = "theme_orange";

(function () {
  var joinSC = document.createElement("script");
  joinSC.type = "text/javascript";
  joinSC.src = __acstoolbar.target + "/jodowidgetapi/js/initfunctions.js";
  joinSC.onload = validateKey;
  var joinScript = document.getElementsByTagName("script")[0];
  joinScript.parentNode.insertBefore(joinSC, joinScript);
})();

function validateKey() {
  var jodoInit = new jodoworld.initfunctions();
  jodoInit.initService();
}

function openWidget() {
  document.querySelector("#widget_chat_icon").click();
}

var jodoinitdone = false;
var initJodoBtnState = false;
var jodo_browser_size = window.matchMedia("(min-width: 768px)");
var product_p = "NewProduct";
var function_p = "Sales";
var __acstoolbar = {};
__acstoolbar.servicekey = "BannerADs_JC";
__acstoolbar.apikey = "test_org";
__acstoolbar.tracelevel = "1";
__acstoolbar.language = "english";
__acstoolbar.product = product_p;
__acstoolbar.functionparam = function_p;
__acstoolbar.theme = "theme_blue1";
__acstoolbar.visible = "false";
__acstoolbar.widgeticon = "hide";
__acstoolbar.target = "https://demo2.avhan.com:9443";

(function () {
  var joinSC = document.createElement("script");
  joinSC.type = "text/javascript";
  joinSC.src = __acstoolbar.target + "/jodowidgetapi/js/initfunctions.js";
  joinSC.onload = validateKey;
  var joinScript = document.getElementsByTagName("script")[0];
  joinScript.parentNode.insertBefore(joinSC, joinScript);
})();
function validateKey() {
  var jodoInit = new jodoworld.initfunctions();
  jodoInit.initService();
}
function jodoWidgetInitialized() {
  jodoinitdone = true;
}

var waitForChatIcon = function (id, callback) {
  if (jQuery("#widget_chat_icon").length != 0) {
    callback();
  } else {
    setTimeout(function () {
      waitForChatIcon(jQuery("#" + id).is(":visible"), callback);
    }, 1000);
  }
};

var waitForMainDiv = function (id, callback) {
  if (jQuery("#widget_main_div").length != 0) {
    callback();
  } else {
    setTimeout(function () {
      waitForMainDiv(jQuery("#" + id).is(":visible"), callback);
    }, 1000);
  }
};

//widget icon positioning
waitForChatIcon(1, () => {
  var jodo_chat_icon = document.getElementById("widget_chat_icon");
  jQuery("#widget_chat_icon").attr(
    "src",
    "https://jodochat.com/wp-content/uploads/2020/01/jodovideobtn-5.png"
  );
  jodo_chat_icon.style =
    "position: fixed;bottom:1%;right:1%;width:200px;border-radius:0; visibility:visible;z-index:99999999999;animation-iteration-count:infinite;";
});

//Resize body on widget open/close
waitForMainDiv(1, () => {
  var sheight = jQuery(".slidesjs-container").height();
  document.getElementById("widget_close_icon").addEventListener("click", () => {
    if (jodo_browser_size.matches) {
      jQuery("body").css("width", "100%");
      jQuery("#slides  img").css("width", "100%");
      document.querySelector(".text-block h4").style.fontSize = "initial";
      jQuery(".slidesjs-container").css("height", sheight + "px");
    }
  });
  document.getElementById("widget_chat_icon").addEventListener("click", () => {
    if (!initJodoBtnState) {
      ga("send", "event", "buttonClicks", "click", "widgetOpen", 1);
      initJodoBtnState = true;
    }
    if (jodo_browser_size.matches) {
      jQuery("body").css("width", "70%");
      jQuery("#slides  img").css("width", "70%");
      document.querySelector(".text-block h4").style.fontSize = "12px";
      jQuery(".slidesjs-container").css(
        "height",
        "calc(" + sheight + "px - 30vh)"
      );
    }
  });
});

//show button after UA registered
function waitForJodoInitDone() {
  if (jodoinitdone) {
    jQuery("#widget_chat_icon").css("visibility", "visible");
  } else {
    setTimeout(function () {
      waitForJodoInitDone();
    }, 1000);
  }
}

//Cannot use IIFE since fn scope needs to be global
waitForJodoInitDone();
