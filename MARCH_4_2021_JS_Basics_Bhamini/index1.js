//variables 
  let name ; 
  console.log(name); //undefined  

  let name = "bhamini"; 
  console.log(name); //bhamini 

   // naming conventaion in javascript 
       // cannot be a reserved keyword 
       // should be meaningful  
       //cannot start with a number (2name) 
       // cannot contain a space or hypen(-) 
       //case sensitive 

  let firstname=bha, lastName= shi;// this is worng practice 
  let firstName= Bhamini; 
  let lastName = Shivram; // this is best practice 
  
  
  // constant --- once declare value cannot change 
     let value = 4; 
        value = 5; 
        console.log(value); // 5
  
// primitive  Types --> string ,Number, Boolean , undefined 

   
   let name1 = "Ram"; //String Literal 
   let age = 60; //Number Literal 
   let isApprove = true; // Boolean Literal 
   let firstname = undefined; //undefined
   let color = ; // null  

   let color = "red"; 
   color = null ; 
   console.log(color); //null 

   //staic type--> once u declare we cannot change value 
     String name = "Laxshman"; 

  // dynamic type --> it can change value  any number of times. 
     
    // object --> 
         let name = "sita"; 
         let age = 23; 
         let person = { 
                name = sitara , 
                age = 23 
         }; 

    // Dot Notation 

    person.name = 'bob'; 
    person.adress = 'Hassan'; 
    person.age = 11; 

    //Bracket Notation 
    person['name'] = 'Mike'; 
    console.log(person.name)//mike 

// nested object  
     let person = {  
         name :"Rajesh", 
         adress: { 
             city : "Hassan", 
             state:'karnataka'
         }
         Phone_no: '5678901234',
        } 
        console.log(person.adress.state)  // karnataka 
       
        

// Arrays --list of items 
    
let color = ["tomato", "green"]; 
 console.log(color); //tomato   green 
 console.log(color[0]); //tomato  

 let color[2] = 'red'; // tomato green red 
 console.log(color.length); //3 

 
 // Function 1
   function greet () { 
   console.log(" Hello world");
} 
//calling function 
greet(); //hello world  

 //function 2 
   function greet2(name) 
   { 
    console.log('Hello'+ name); 

   }
  greet("Ram"); //hello Ram
  greet("sita"); //hello sita  

  //calculate a value 

    function square (number)
        {
 return number*number ; 
      } 
  console.log(square(2)) //4 



         
   

  
