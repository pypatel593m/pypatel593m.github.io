
(function()
{
    /**
     * This method uses AJAX to open a connection to the url and returns data to the callback function
     *
     * @param {string} method
     * @param {string} url
     * @param {Function} callback
     */
    function AjaxRequest(method, url, callback)
    {
        // step 1 - instantiate an XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - create an event listener / handler for readystatechange event
        XHR.addEventListener("readystatechange", () =>
        {
            if(XHR.readyState === 4 && XHR.status === 200)
            {
               callback(XHR.responseText);
            }
        });

        XHR.open(method, url);

        // step 4 - send the request to the server
        XHR.send();
    }

    /**
     * This function loads the NavBar from the header file and injects it into the page
     *
     * @param {string} data
     */
    function LoadHeader(data)
    {
        $("header").html(data); // data payload
        $(`li>a:contains(${document.title})`).addClass("active"); // add a class of 'active'
        CheckLogin();
        AddUserName();
    }


    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }


    function DisplayHomePage()
    {
        console.log("Home Page");

        $("#AboutUsButton").on("click", function()
        {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);
        //Article.innerHTML = ArticleParagraph;
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
        </article>`);
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }


    /**
     * This method validates an input text field in the form and displays
     * an error in the message area div element
     *
     * @param {string} input_field_ID
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let ErrorMessage = $("#ErrorMessage").hide();

        $("#" + input_field_ID).on("blur", function()
        {
            let input_text_field = $(this).val(); 
            if(!regular_expression.test(input_text_field)) 
            {
                $(this).trigger("focus").trigger("select"); 
                ErrorMessage.addClass("alert alert-danger").text(error_message).show();
            }
            else 
            {
                ErrorMessage.removeAttr("class").hide();
            } 
        });
    }

    function ContactFormValidation()
    {
        ValidateField("fullName",/^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/,"Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitalized last Name.");
        ValidateField("contactNumber",/^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/,"Please enter a valid Contact Number. Example: (905) 555-5555");
        ValidateField("emailAddress",/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,"Please enter a valid Email Address.");
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        ContactFormValidation();
        
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault();

            if(subscribeCheckbox.checked)
            {
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }
        });
    }


    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

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

                let contact = new core.Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;

                
                
                index++;
            }

            contactList.innerHTML = data;

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function() 
            {
                location.href = "edit.html#" + $(this).val();
            });
        }
        $("#addButton").on("click", () =>
            {
                location.href = "edit.html#add";
            });
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);
        console.log(page);
        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
                
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();
                        // Add Contact
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // refresh the contact-list page
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
            default:
                {
                    // get the contact  info from localStorage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when editButton is pressed - update the contact
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-list
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");

        let ErrorMessage = $("#ErrorMessage");
        ErrorMessage.hide();

        $("#loginButton").on("click", function()
        {
            let success = false;

            // create an empty User object
            let newUser = new core.User();

            // use jQuery shortcut to load the users.json file
            $.get("./Data/users.json", function(data)
            { 
                // for everry user in the users.json file, loop
                for (const user of data.users) 
                {
                    // check if the username and password entered match with user
                    if(username.value == user.Username && password.value == user.Password)
                    {
                        // get the user data from the file and assign it to our empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                 // if username and password matches - success...perform the login sequence
                if(success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    // hide any error messages
                    ErrorMessage.removeAttr("class").hide();

                    // redirect the user to the secure area of our site - contact-list
                    location.href = "contact-list.html";
                }
                else
                {
                    // display an error message
                    $("#username").trigger("focus").trigger("select");
                    ErrorMessage.addClass("alert alert-danger").text("Error: Invalid Login Information.").show();
                }
            });

           

            $("#cancelButtton").on("click", function()
            {
                // clear the login form
                document.forms[0].reset();

                // return to  the home page
                location.href = "index.html";
            });
        });
    }

    function CheckLogin()
    {
        
        // if user is logged in
        if(sessionStorage.getItem("user"))
        {
            // swap out the login link for the logout link
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            $("#logout").on("click", function()
            {
                // perform logout
                sessionStorage.clear();

                // redirect back to login
                location.href = "login.html";
            });
        }
    }

    function AddUserName()
    {
        
        // if user is logged in
        if(sessionStorage.getItem("user"))
        {
            let userName = sessionStorage.getItem("user").split(',')[2];
            $(`<li class="nav-item"><a id="logout" class="nav-link active"></i> ${userName} :</a></li>`).insertBefore("#login");
        }
        
    }

    function DisplayRegisterPage()
    {
        $("#ErrorMessage").hide();
        console.log("Register Page");
        $(`<div id="ErrorMessage" class="alert alert-danger"></div>`).insertBefore(".row:first");
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let emailAddress = $("#emailAddress").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        RegisterFormValidation();
        $("#confirmPassword").on('keyup', function() {
            
            if (password != confirmPassword)
            {
                $("#ErrorMessage").addClass("alert alert-danger").text("Confirm password dosen't match with the password.").show();
            }
             
            else
            {
                $("#ErrorMessage").removeAttr("class").hide();
            }
             
        }); 

        let newUser2 = new core.User(firstName, lastName, emailAddress, password);

        $("#submitButton").on("click", (event)=>
        {
            event.preventDefault();
            console.log("Button");
            console.log(newUser2);
            document.forms[0].reset();
        });

    }

    function RegisterFormValidation()
    {
        ValidateField("FirstName", /^([A-Za-z]{2,25})$/, "First Name should have atleast two characters and cannot contain any special characters or number.");
        ValidateField("lastName", /^([A-Za-z]{2,25})$/, "Last Name should have atleast two alphabets and cannot contain any special characters or number.");
        ValidateField("emailAddress",/^([a-zA-Z0-9._-]{8,})+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,"Please enter valid email address.");
        ValidateField("password",/^[a-zA-Z0-9.!@#$%^&*+-><{},;:'"]{6,}$/,"Password should have atleast 6 characters.");


    }


    // named function
    function Start()
    {
        console.log("App Started!!");

        AjaxRequest("GET", "header.html", LoadHeader);

        

        switch (document.title) {
          case "Home":
            DisplayHomePage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Edit":
            DisplayEditPage();
            break;
          case "Login":
            DisplayLoginPage();
            break;
          case "Register":
            DisplayRegisterPage();
            break;
        }
    }

    window.addEventListener("load", Start);

})();