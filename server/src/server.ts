import Express from "express"

const app = Express()

//o comando abaixo vai rodar em um endereço e uma porta exemplo
//localhost:3333/ads esse ads é a unica coisa que vou definir no parametro abaixo já
//que se trata do local onde estou acessando


//primeira rota

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "anuncio 1" },
    { id: 2, name: "anuncio 2" },
    { id: 3, name: "anuncio 3" },
    { id: 4, name: "anuncio 4" },
  ])
})

app.listen(3333)
