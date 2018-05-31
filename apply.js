
// apply is similar to call just that it accepts arguments in an array form
x=10,y=20;
 dummy = function (){
    console.log(this.x,this.y);
}

var obj={
    x:50,
    y:30
}

dummy();
dummy.apply(obj);

// best use case to append two arrays
var array = ["a","b","c"];
var elements = [1,2,3];
array.push.apply(array,elements); // equievelant to  => array.push(1,2,3);
console.log(array);