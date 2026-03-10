// 1.Sequential Execution

// Tasks run one after another.

async function sequential(){
    const a = await fetchDataA();
    const b = await fetchDataB();
}

// 2. Parallel Execution

// Runs tasks at the same time.

async function parallel(){
    const [a,b]=Promise.all(
        [
            await fetchDataA(),
            await fetchDataB()
        ]
    )
}//much faster