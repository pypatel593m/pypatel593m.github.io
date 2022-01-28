// IIFE -- Immediately Invoke Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    function DisplayProductsPage()
    {
        console.log("Products Page");
    }
    function DisplayServicesPage()
    {
        console.log("Services Page");
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
        // document.getElementById("ArticleParagraph").remove();
        
        // Insert before example

        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");
        // NewH1.textContent = "Hello, World!";
        // MainContent.before(NewH1);
    }

    
    function DisplayContactUsPage()
    {
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckBox = document.getElementById("subscribeCheckBox");

        //localStorage.setItem("1", "Parth");
        //console.log(localStorage.getItem("1"));
        //localStorage.removeItem("1");
        //console.log(localStorage.length);

        sendButton.addEventListener("click", function()
        {
            
            //event.preventDefault(); // for debugging

            if(subscribeCheckBox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }

            }
        })
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        if(localStorage.length > 0) // check if local storage has something in it
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            // for every key in keys collection
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieves contact data from local storage

                let contact = new Contact(); // creat an empty contact object 
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>`

                index ++;
            }

            contactList.innerHTML = data;
        }
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
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactUsPage();
                break;
            case "Contact-List":
                DisplayContactListPage();
                break;
        }

        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
    }

    window.addEventListener("load", Start);

})();