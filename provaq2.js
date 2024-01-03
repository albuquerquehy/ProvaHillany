const CapitalizarTitulos = (titulos) =>{
    return titulos.map(Element=> Element.toUppercase())
}

console.log(CapitalizarTitulos(["O PequenoPríncipe", "Dom Casmurro", "A Metamorfose"]))