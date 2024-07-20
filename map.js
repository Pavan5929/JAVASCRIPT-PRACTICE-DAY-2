/*let nums=[1000,2000,3000]

nums.map(

    (ele,ind,arr)=>{

        console.log(ele,ind,arr)
    }
)*/

let nums=[1000,2000,3000];

let res=nums.map(
    cb
)

function cb(ele,ind,arr){

    return ele+10;
}

console.log(res)

