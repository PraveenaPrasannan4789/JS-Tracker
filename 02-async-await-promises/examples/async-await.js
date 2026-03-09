// async function fetchData() {
//     try {
//         const data = await fetch("https://api.example.com/data");
//         const json = await data.json();
//         console.log(json);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchData();

//async function
async function printHello(){
    return'hello'
}

const data = printHello()
console.log('data',data)


//await pauses the async function until the promise resolved

async function fetchDataS() {
    const getData= await Promise.resolve("resolved");
    console.log(getData);
}
fetchDataS();