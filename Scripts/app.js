// IIFE -- Immediately Invoke Function Expression
// AKA Anonymous Self-Executing Function
(function()
{

    function Background() 
    {
        document.body.style.backgroundImage = "url('.././image/HomeBackground.jpg')";
        document.body.style.color = "white";
    }
     
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            $("header").html(html_data);
            AddNavigationEvents();
            CheckLogin();
        });
    }
    function LoadFooter() {
        $.get(`./Views/components/footer.html`, function (html_date) {
            $("footer").html(html_date);
        });
    }
    function DisplayAboutUsPage()
    {
        console.log("About Us Page");
    }

    function DisplayHomePage()
    {
        console.log("Home Page.")
        
        let AboutUsButton = document.getElementById("AboutUsButton");

        AboutUsButton.addEventListener("click", function()
        {
            //redirect to about page
            location.href = "about.html";
        });
    }

    function DisplayParthPage(){
        console.log("Parth's page");
        
     }

  

    // named function
    function Start()
    {
        
        Background();
        LoadHeader();
        LoadFooter();
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
            break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Parth":
                DisplayParthPage();
                break;
    
        }

        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
    }
    window.addEventListener("load", Start);
    
})();