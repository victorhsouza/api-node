import app from "./app.js";

// import conexao from "./infra/conexao.js";
//A porta pode ser uma constante do node js que pode ser passada por algum outro servico ou porta 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

// Fazer a conexao
// conexao.connect((erro) => {
//   if (erro) {
//     console.log(erro);
//   } else {
//     console.log("Conexao realizada");

//     //escutar a porta
   
//   }
// });
