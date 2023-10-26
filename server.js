import app from "./src/app.js";

// import conexao from "./infra/conexao.js";

const PORT = 3000;

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
