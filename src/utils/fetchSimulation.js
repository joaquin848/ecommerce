const fetchSimulation = (dataBase, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(dataBase);
            rejact(new Error("up! Algo salió mal"))
        }, time )
    })
}

export default fetchSimulation;