const VerificarNumero = () =>{
    return new promise ((resolve, reject) => {
        let numeroaleatorio = 
        Math.floor(Math.random());
        if(numeroaleatorio > 5){
            resolve("Número alto!")
        }
        else
        reject("Número baixo!")
    })
}

retornarpromise(then(console.log));