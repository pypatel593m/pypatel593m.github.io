class Contact 
{
    // public properties (accessors / mutators)
    get FullName()
    {
        return this.m_fullName;
    }
    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }
    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }
    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    // constructor
    constructor(fullname = "", contactNumber = "", emailAddress = "")  // default string parameter
    {
        this.FullName = fullname;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    // public methods
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        console.error("One or more properties of the contact object are missing or empty");
        return null;
        
    }

    deserialize(data) // assume that the data object is comma-seperated list of properties
    {
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    // overridden methods
    toString()
    {
        return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
    }
}