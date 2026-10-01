const http = require("http");

const PORT = 3000;


const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago de Fogo", type: "Criatura", attack: 6, defense: 2 },
  { name: "Escudo Místico", type: "Feitiço", attack: 0, defense: 10 },
  { name: "Lâmina Sombria", type: "Artefato", attack: 5, defense: 0 }
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Bem-vindo à minha coleção!</h1>
      <p>Esta é a minha galeria de cartas mágicas.</p>
      <p>Neste momento, tenho <strong>${cards.length}</strong> cartas registadas.</p>
    `);
    return;
  }

  if (req.url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Sobre Mim</h1>
      <p>Nome: Tomás Jardim</p>
      <p>Turma: TGPSIU</p>
    `);
    return;
  }

  
  if (req.url === "/cartas") {
    const items = cards.map(card => `<li><strong>${card.name}</strong> (${card.type}) - Ataque: ${card.attack} | Defesa: ${card.defense}</li>`).join("");
    
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Lista de Cartas</h1>
      <ul>${items}</ul>
    `);
    return;
  }

  


  if (req.url === "/agora") {
    const now = new Date().toLocaleString("pt-PT");
    
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Hora do Pedido</h1>
      <p>Esta página foi gerada a: <strong>${now}</strong></p>
    `);
    return;
  }

  
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>404 - Não Encontrado</h1>
    <p>Ups! Não encontrámos batatas, nem qualquer outra coisa neste endereço.</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});