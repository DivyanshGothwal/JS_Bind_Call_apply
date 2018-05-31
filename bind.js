x = 9,y=10;    // this refers to global object here in node
var module = {
  x: 10,
  y:20,
  add: function() { console.log(this.x+this.y); }
};

module.add(); // add function executed in the context of module object

var addXandY = module.add;
addXandY();   //  The function gets invoked at the global scope

var boundAddXandY = addXandY.bind(module);  // Created a new function with module bound to function addXandY
boundAddXandY();






// example of bind with setTimeout
function LateFunc() {
    this.Count = Math.floor(Math.random() * 12) + 1;
  }
  
  LateFunc.prototype.func = function() {
    console.log(this instanceof LateFunc);
  setTimeout(this.declare, 1000);
};

LateFunc.prototype.boundedFunc = function() {
      console.log(this instanceof LateFunc);
    setTimeout(this.declare.bind(this), 1000);
  };
  
  LateFunc.prototype.declare = function() {
    console.log(this instanceof LateFunc);
    console.log('count is ' +
      this.petalCount);
  };
  
  var flower = new LateFunc();
  flower.func();  
  flower.boundedFunc();