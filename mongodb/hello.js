function asyncwrap (fn){
    return  function(){
        fn();
    };
}
const hello=()=>{
    console.log("hello");
}
const retur=asyncwrap(hello);
console.log(retur());
