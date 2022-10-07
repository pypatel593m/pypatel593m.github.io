"use strict";
(function()
{
    switch (document.title) {
        case "Home":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Contact Us":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Contact-List":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                // redirect to the login page
                location.href = "login.html";
            }
          break;
        case "About Us":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Our Products":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Our Services":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Edit":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Login":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
        case "Register":
            // if user does not exist in session storage
            if(!sessionStorage.getItem("user"))
            {
                console.log("User is not logged in!");
            }
          break;
      }
})();