let task1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 1 is completed")
        },3000)
    })
}

let task2=()=>{
    return new Promise((resolve,reject)=>{
        
            resolve("Task 2 is completed")
      
    })
}

let task3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 3 is  complted")
        },5000)
    })
}

 async function allclear(){
     let t1=await task1()
     console.log(t1);

     let t2=await task2()
     console.log(t2)

     let t3=await task3()
     console.log(t3)

 }

 allclear()