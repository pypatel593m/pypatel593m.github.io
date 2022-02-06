(function()
{

    function DisplayHomePage()
    {
        console.log("Home page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
        document.body.style.color = "White";
        let ChangeTitle = document.getElementById("changeTitle");
        ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;

        let DocumentBody = document.body;
     
        // Step 2 creat an element(s) to insert
        let Article = document.createElement("article");
        let abotUsPara = `<p id="abotUsPara" class="mt-3"><h3>You have reached the most amazing website, 
        look around and you will find many interesting things. This is home page of the website, if you want to know more about us, 
        click on that blue button. 
      </h3></p>`;
   
        // Step 3 configure new element
        Article.setAttribute("class", "container");
   
        // Step 4 add / insert new element
        Article.innerHTML = abotUsPara;
        DocumentBody.appendChild(Article);
     MainParagraph.textContent = "";
     // step-4 performation
     MainContent.appendChild(MainParagraph);


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
   navbar();

   
   function DisplayAboutpage(){
      console.log("About page");
      document.body.style.color = "White";
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
      let ChangeTitle = document.getElementById("changeTitle");
        ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;
      // Step 1 get an entry point(s) (insertion point / deletion point)
     let DocumentBody = document.body;
     
     // Step 2 creat an element(s) to insert
     let Article = document.createElement("article");
     let abotUsPara = `<p id="abotUsPara" class="mt-3"><h3>Our goal for this lab is to shows our best work and our skills of web designing and editing.
     We Both contributed with our efforts providing majority of work as per requirements. This lab is result
     of best teamwork as well as proper division of task among the team. 
   </h3></p>`;

     // Step 3 configure new element
     Article.setAttribute("class", "container");

     // Step 4 add / insert new element
     Article.innerHTML = abotUsPara;
     DocumentBody.appendChild(Article);
   }

   function DisplayContactpage(){
      console.log("Contact page");
      
      document.body.style.color = "White";
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
      let ChangeTitle = document.getElementById("changeTitle");
      ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;
        
      let sendButton = document.getElementById("sendButton");
      let subscribeCheckbox = document.getElementById("subscribeCheckbox");

      sendButton.addEventListener("click", function(event)
      {
          //event.preventDefault();

          if(subscribeCheckbox.checked)
          {
              let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
              if(contact.serialize())
              {
                  let key = contact.FullName.substring(0, 1) + Date.now();

                  localStorage.setItem(key, contact.serialize());
              }
          }
      });

   }

   function DisplayProductspage(){
      console.log("Products Page.");
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
      document.body.style.color = "White";
      function ChangeProductToProject(){
         let ChangeTitle = document.getElementById("changeTitle");
        ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;
        let PageTitle = document.getElementById("pageTitle");
        PageTitle.innerHTML = `Our three best Projects.`;
        let DocumentBody = document.body;
      };
      ChangeProductToProject();
     
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

   function DisplayServicespage(){
      console.log("Services Page.");
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
      document.body.style.color = "White";

       //step-1 - get a reference to entry point.
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

   function DisplayContactListpage(){
      console.log("Contact-list page");
      document.body.style.color = "White";
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";



      let ChangeTitle = document.getElementById("changeTitle");
        ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;

        if(localStorage.length > 0) // check if localStorage has something in it 
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localStorage

                let contact = new Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;
                
                index++;
            }

            contactList.innerHTML = data;
        }
   }

   function DisplayParthpage(){
      console.log("Parth Page");
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
      document.body.style.color = "White";
      let ChangeTitle = document.getElementById("changeTitle");
        ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;
   }

   function DisplayYashpage(){
      console.log("Yash Page");
      document.body.style.backgroundImage = "url('../image/HomeBackground.jpg')";
      document.body.style.color = "White";
      let ChangeTitle = document.getElementById("changeTitle");
        ChangeTitle.innerHTML = `<i class="fas fa-project-diagram"></i>Projects`;
   }
  

    // named function
    function Start()
    {
        console.log("App Started!!");

        switch(document.title)
        {
            case "Home":
               DisplayHomePage();
               break;
            case "Our Products":
               DisplayProductspage();
               break;
            case "Our Services":
               DisplayServicespage();
               break;
            case "About us":
               DisplayAboutpage();
               break;
            case "Contact us":
               DisplayContactpage();
               break;
            case "Contact-List":
               DisplayContactListpage();
               break;
            case "Parth":
               DisplayParthpage();
               break;
            case "Yash":
               DisplayYashpage();
               break;
        }
    }

    window.addEventListener("load", Start);

})();
