const address = {
    street: 3,
    city: 'bangalore',
    zipcode: 560040,
    showAddress: function() {
        for (let key in address) {
            console.log(key + ":" + address[key]);
        }
    }
}
address.showAddress();


//Factory Function
function addAddress(street, city, zipcode) {
    const address = {
        street: street,
        city: city,
        zipcode: zipcode,
        showAddress: function() {
            for (let key in address)
                console.log(key + ":" + address[key]);

        }
    }
    return address;
};

const hosaAddress = addAddress('3', "Mangalore", 560054);
hosaAddress.showAddress();
const hosaAddress1 = addAddress('88', "belagavi", 500884);
hosaAddress1.showAddress();

//Constructor Function
function Address(street, city, zipcode) {

    this.street = street;
    this.city = city,
        this.zipcode = zipcode,
        this.showAddress = function() {
            for (let key in Address)
                console.log(key + ":" + Address[key]);

        }
};

const hosaAddress2 = new Address('3', "Mangalore", 560054);
console.log(hosaAddress2);

//Blog Object

const blogObj = {
    title: "myDet",
    body: "triller for sure",
    author: "Prakashan ",
    views: 2,

    Comment: {
        author: "otaatoa",
        body: "nice genere"
    },
    isLive: true,
    display: function() {
        for (let key in blogObj) {
            console.log(key + ":" + blogObj[key]);
        }
    }
};

blogObj.display();