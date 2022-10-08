// IIFE -- Immediately Invoke Function Expression
// AKA Anonymous Self-Executing Function
(function()
{

    function Background() 
    {
        document.body.style.backgroundImage = "url('.././image/HomeBackground.jpg')";
        document.body.style.color = "white";
    }
     function navbar(){
     
        let DocumentBody = document.body;
       
        let detailParagraph = document.createElement("detailParagraph");
        let abotUsPara = `<nav class="navbar fixed-bottom navbar-light bg-dark">
        <div align="right">
        ©️ CopyRight 2022 
        </div>
     </nav>`;
  
        // step-3 configure
        detailParagraph.setAttribute("class", "container");
        // step-4 performation
  
        detailParagraph.innerHTML = abotUsPara;
        DocumentBody.appendChild(detailParagraph);
     }
     
    function DisplayProjectsPage()
    {
        console.log("Projects Page");

    }
    function DisplayAboutMePage()
    {
        console.log("About Me Page");
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
    
    function DisplayContactMePage()
    {
        console.log("Contact Us Page");
    }

    function DisplayParthPage(){
        console.log("Parth's page");
        
    }
    function DisplayLab2Page()
    {
        console.log("lab 2 page");
    }

    // named function
    function Start()
    {
        navbar();
        Background();
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
            break;
            case "My Projects":
                DisplayProjectsPage();
                break;
            case "About Me":
                DisplayAboutMePage();
                break;
            case "Lab 2":
                DisplayLab2Page();
                break;
            case "Contact Me":
                DisplayContactMePage();
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