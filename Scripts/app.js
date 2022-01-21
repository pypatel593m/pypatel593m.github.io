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
        });

        // Step 1 get an entry point(s) (insertion point / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        
        // Step 2 creat an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id = "ArticleParagraph" class = "mt-3">This is the Article Paragraph</p>`;

        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");

        //let FirstParagrapfString = "This is";
        //let SecondParagraphString = `${FirstParagraphString} the main Paragraph`;

        //MainParagraph.textContent = FirstParagrapfString + SecondParagraphString;
        //MainParagraph.textContent = SecondParagraphString;

        MainParagraph.textContent = "This is the main paragraph";
        Article.setAttribute("class", "container");

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);


        // Deletion example
        //document.getElementById("ArticleParagraph").remove();
        
        // Insert before example

        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");
        // NewH1.textContent = "Hello, World!";
        // MainContent.before(NewH1);
        
        

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