// IIFE -- Immediately Invoke Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    
    // Adding the human resource link to navbar
    function LinkHumanResource()
    {

        let NewLink = `<a class="nav-link" href="about.html"> <i class="fas fa-male"></i> Human Resource</a>`;
        let DocumentBody = document.getElementsByTagName("li")[4];
        let abotUsPara = document.createElement("abotUsPara");
        abotUsPara.setAttribute("class", "center");
        abotUsPara.innerHTML = NewLink;
        DocumentBody.appendChild(abotUsPara);

    }


    function ChangeProductsToProjects()
    {
        let NewLink = `<a class="nav-link" href="products.html"> <i class="fas fa-project-diagram"></i>Projects</a>`;
        let DocumentBody = document.getElementsByTagName("li")[1];
        let abotUsPara = document.createElement("abotUsPara");
        abotUsPara.setAttribute("class", "center");
        abotUsPara.innerHTML = NewLink;
        DocumentBody.appendChild(abotUsPara);
        document.getElementsByTagName("a")[2].remove();
    }

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
     
    function DisplayProductsPage()
    {
        console.log("Products Page");
   
        //step-1 - get a reference to entry point.
     let DocumentBody = document.body;
     let detailParagraph = document.createElement("detailParagraph");
     let detailParagraphParagraph = `<table id="tableInfo" width="90%">
     <tr>
        <th width="33.3%"><h2 style="margin-left: 100px;">(1)Tarneeb Card Game</h2></th>
        <th width="33.3%"><h2 style="margin-left: 100px;">(2)The Tic Tac Toe Game</h2></th>
        <th width="33.3%"><h2 style="margin-left: 100px;">(3)This Website</h2></th>
     </tr>
     <tr>
        <td align="center"><h6 style="margin-left: 100px;">This is our on going project, In this project we are 
        developing one card game called tarneeb, and we are using c# WPF project for it. </h3></td>
        <td align="center"><h6 style="margin-left: 100px;">This was our first ever experience of game developing,
        We built this small little game a year ago, and we used c# windows forms for it.</h3></td>
        <td align="center"><h6 style="margin-left: 100px;">Yes, this website is also one of the best projects that we worked on
        and as long as we are making it, it gets more and more intresting, we are trying our best to make it look good,
        layout wise and functionally as well.</h3></td>
     </tr>
      </table>`;

     // step-3 configure
     detailParagraph.setAttribute("class", "container");
     // step-4 performation
     detailParagraph.innerHTML = detailParagraphParagraph;
     DocumentBody.appendChild(detailParagraph);
     

    }
    function DisplayServicesPage()
    {
        console.log("Services Page");
        let DocumentBody = document.body;
     let detailParagraph = document.createElement("detailParagraph");
     let detailParagraphParagraph = `<table id="tableInfo" width="90%">
     <tr>
        <th width="33.3%"><h2 style="margin-left: 100px;">(1)Software Developing</h2></th>
        <th width="33.3%"><h2 style="margin-left: 100px;">(2)Web Designing</h2></th>
        <th width="33.3%"><h2 style="margin-left: 100px;">(3)Mobile Computing</h2></th>
     </tr>
     <tr>
        <td align="center"><h6 style="margin-left: 100px;">We do implies all the necessary 
        skills like mathematical aptitude, programming languages and very obvious system devlopment 
        skills which means it covers all the major portion starting from proposal to launching software 
        and even maintaining it</h3></td>
        <td align="center"><h6 style="margin-left: 100px;">It is one of the vital element in field 
        of IT. We rate this as best skill we possess among all we know. We are now comfortable working 
        with html, php, javascript, CSS and database too.</h3></td>
        <td align="center"><h6 style="margin-left: 100px;">It is like cloud computing. 
        We are best to establish the relation between servers, pcs, network and good at things like maintaining IP 
        address of network or PC and can solve any problem related mobile 
        computing (network issue or server issues).</h3></td>
     </tr>
      </table>`;

     // step-3 configure
     detailParagraph.setAttribute("class", "container");
     // step-4 performation
     detailParagraph.innerHTML = detailParagraphParagraph;
     DocumentBody.appendChild(detailParagraph);
      
     

    }
    function DisplayAboutUsPage()
    {
        console.log("About Us Page");
        let DocumentBody = document.body;
        let abotUsPara = document.createElement("abotUsPara");
        let WelcomePara = `<table id="tableInfo" width="90%">
        <tr>
           <th width="33.3%"><h3 style="margin-left: 100px;">Our goal for this lab is to shows our best work and our skills of web designing and editing.
           We Both contributed with our efforts providing majority of work as per requirements. This lab is result
           of best teamwork as well as proper division of task among the team. 
      
   </h3></th>
        </tr>
         </table>`;
        // step-3 configure
        abotUsPara.setAttribute("class", "center");
        abotUsPara.innerHTML = WelcomePara;
        DocumentBody.appendChild(abotUsPara);
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

        let DocumentBody = document.body;
     let abotUsPara = document.createElement("abotUsPara");
     let WelcomePara = `<table id="tableInfo" width="90%">
     <tr>&nbsp
     </tr>
     <tr>
        <th width="33.3%"><h3 style="margin-left: 100px;">You have reached the most amazing website, 
        look around and you will find many interesting things. This is home page of the website, if you want to know more about us, 
        click on that blue button. 
</h3></th>
     </tr>
     <tr>
     <th>
     <img style="margin-left: 100px;" style="border-radius: 40px 40px 0 0;" src= "./image/welcome.jpg" width="550" height="350"style="float: center;">
     </th>
     </tr>
      </table>`;
     // step-3 configure
     abotUsPara.setAttribute("class", "center");
     abotUsPara.innerHTML = WelcomePara;
     DocumentBody.appendChild(abotUsPara);
    }

    function Redirect() {
        let count = 3;
        setInterval(function(){
            count--;
            if (count == 0)
            {
                window.location = "contact-list.html";
            }
        }, 1000);
        
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
                    Redirect();
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
            contactList.setAttribute("style", "color: White; border: 0px;")

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

    function DisplayParthPage(){
        console.log("Parth's page");
        
     }
  
      function DisplayYashPage(){
         console.log("Yash's page");
         
      }

  

    // named function
    function Start()
    {
        navbar();
        Background();
        LinkHumanResource();
        ChangeProductsToProjects();
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
            case "Parth":
                DisplayParthPage();
                break;
            case "Yash":
                DisplayYashPage();
                break;
    
        }

        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
    }
    window.addEventListener("load", Start);
    
})();