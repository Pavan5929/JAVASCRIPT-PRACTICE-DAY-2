let p1={

     name:"real me pro",
     price:2000,
     ram:"16gb"
}

for(key in p1){

    console.log(key,":",p1[key])
}

let products=[

    {
        name:"real me pro",
        price:2000,
        ram:"16gb"
    },

    {
       name:'red me not 11',
       price:9000,
       ram:"18gb"
    }

]


for(ele of products){

    for(key in ele){

        console.log(key,':',ele[key]);
    }
}

