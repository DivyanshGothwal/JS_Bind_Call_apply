
// function.call(thisArgs, arg1,arg2......);


// first usecase (very basic example)
// call a function and specify the context. So basically here we virtually inherit a function to object.

x=10,y=20; // this refers to global object here in node
 dummy = function (){
    console.log(this.x,this.y);
}

var obj={
    x:50,
    y:30
}

dummy();
//This function is invoked at the global scope
dummy.call(obj);



// second usecase 
// to invoke anonymous function
zara={
    price:1000,
    color:"Blue",
    Type:"Jeans"
};
(function(){
    console.log('Brand is zara, cloth type is '+ this.Type+ ', color is '+ this.color+', Price is '+this.price)
}).call(zara);





// third usecase
// to chain constructor for an object
function Product(name, price){
    this.name = name;
    this.price = price;
}

function Food(name, price){
    Product.call(this, name, price);
    this.category = 'food';
}

function Sports(name, price){
    Product.call(this, name, price);
    this.category = 'Sports';
}
var bat = new Sports('Bat',1000); 
var bowl = new Sports('Bowl',100); 

var pancake = new Food('Pancake',1000); 
console.log(bat);
console.log(bowl);
console.log(pancake);

