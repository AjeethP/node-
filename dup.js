const arr=[1,1,2,3,1,4,2,3,5]

// let res={
//     1:3,
//     2:2,
//     3:2,
//     4:1,
//     5:1
// }
let res={}

arr.forEach((ele)=>{
    console.log("old",ele)
    res[ele]=typeof res[ele]==="undefined" ? 1 : res[ele]+1;
    console.log("new",res[ele])
})

let duplicates=[];
let original=[];

for(let key in res){
    //console.log(res[key])
  const value=res[key]
  console.log(key,value)
  if(value > 1){
    (duplicates.push(+key))
  }
  else{
    (original.push(+key))
  }
}
console.log(duplicates)
console.log(original)