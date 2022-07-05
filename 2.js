// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

const str = "abcadeecfb";
function printChar(str){
    var map=new Map();
    str.split('').forEach((element)=>{
        if(map.has(element)){
            map.set(element,map.get(element)+1)
        }
        else{
            map.set(element,1)
        }
    });
    str.split('').forEach((i)=>{
        if(map.has(i) && map.get(i)!=0){
            console.log(i + "="+map.get(i)+' ');
            map.set(i,0)
        }
    })

}
printChar(str);
