// document.write("Hello world!");
var name = "Nivetha"
console.log("Hello! " + name);

//array
var arr = [1, 2, 3];
arr[0] = 10;
console.log(arr);

//object
var obj = { color: 'red', brand_name: "BMW",  };
//access the values by dot notation
obj.color = "green"
console.log(obj);

//access the values by bracket notation
obj['color'] = 'blue';
console.log(obj);

//access the nested values 
var obj2 = { car: { color: 'red', brand_name: "BMW", price: 12000000 } };
console.log(obj2.car.color)
console.log(obj2['car']['color']);

//function creation
function create() { 
    console.log("Function created");
}
create();

