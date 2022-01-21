// IIFE -- Immediately Invoke Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");

        AboutUsButton.addEventListener("click", function()
        {
            //redirect to about page
            location.href = "about.html";
        })
    }

    // named function
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
            break;
        }

        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
    }

    window.addEventListener("load", Start);

})();