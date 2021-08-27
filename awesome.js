const fs=require ("fs")
console.log("Hello World!!")

fs.readFile("dup,js","utf8",function(srr,data){
    console.log(data)
})

console.log(global)