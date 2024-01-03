const FormatarContato= (contato) =>{
    let {nome,email,telefone} = contato;
    return `Nome:${nome}; Email:${email}; Telefone:${telefone}`
}
console.log(FormatarContato({nome: "Hillany", email: "hillany@example.com", telefone: "123456789"}))