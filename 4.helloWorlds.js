function helloWorlds(param){
    if(Number.isInteger(param)){
        console.log("Hello World\n".repeat(param));
    }
    else  
        console.log("Goodbye World");
}

console.log("helloWorlds(true) :");
helloWorlds(true);

console.log(`helloWorlds("hello") :`);
helloWorlds("hello");

console.log("helloWorlds(null) :");
helloWorlds(null);

console.log("helloWorlds(undefined) :");
helloWorlds(undefined);

console.log("helloWorlds(5) :");
helloWorlds(5);