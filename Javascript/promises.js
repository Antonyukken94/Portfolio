function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked=true;
            if(dogWalked){
                resolve("you walk the dog");  
            }
            else{
            reject("you didn't walk the dog");
            }

        }, 2500);
    });
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen=true;
                if(cleanedKitchen) {
                    resolve("you cleaned kitchen");
                }
                else{
                    resolve("you didn't cleaned kitchen");
                }
    
        }, 3000);
    });
}
function takeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutTrash=true;
            if(takeOutTrash){
                resolve("you take out trash"); 
            }
            else{
                reject("you didn't take out trash");  
            }
            
        }, 500);
    });
}
walkDog().then(value => { console.log(value); return cleanKitchen() })
          .then(value => { console.log(value); return takeTrash() })
           .then(value => {console.log(value); console.log("you have completed all chores")})
           .catch(error => console.error());