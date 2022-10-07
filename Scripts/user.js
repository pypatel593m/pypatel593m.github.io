(function(core){

    class User
    {
        get FirstName()
        {
            return this.m_First_Name;
        }
    
        set FirstName(first_name)
        {
            this.m_First_Name = first_name;
        }
    
        get LastName()
        {
            return this.m_Last_Name;
        }
    
        set LastName(last_name)
        {
            this.m_Last_Name = last_name;
        }
    
        get EmailAddress()
        {
            return this.m_emailAddress;
        }
    
        set EmailAddress(email_address)
        {
            this.m_emailAddress = email_address;
        }

        get Password()
        {
            return this.m_Password;
        }

        set Password(password)
        {
            this.m_Password = password;
        }

        // constructor
        constructor(displayName = "", emailAddress= "", username = "", password = "")
        {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // overriden functions
        toString()
        {
            return `Display Name  : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUsername : ${this.Username}`;
        }

        // utility functions
        toJSON()
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }

        fromJSON(data)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize() 
        {
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "") 
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            console.error("One or more properties of the User Object are missing or empty");
            return null;
        }

        deserialize(data) 
        {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }
    }

    core.User = User;

})(core || (core={}));