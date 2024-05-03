function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("you walk the dog");
            }
            else {
                reject("you didn't walk the dog");
            }

        }, 2500);
    });
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen) {
                resolve("you cleaned kitchen");
            }
            else {
                reject("you didn't cleaned kitchen");
            }

        }, 3000);
    });
}

function takeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutBin = true;
            if (takeOutBin) {
                resolve("you take out trash");
            }
            else {
                reject("you didn't take out trash");
            }

        }, 500);
    });

}
async function doChores() {
    try {

        const walkDogRslt = await walkDog();
        console.log(walkDogRslt);
        const cleanedKitchenRslt = await cleanKitchen();
        console.log(cleanedKitchenRslt);
        const takeOutTrashRslt = await takeTrash();
        console.log(takeOutTrashRslt);
        console.log("you finished all chores");
    }
    catch (error) {
        console.error("Error:", error);

    }
}
doChores();


