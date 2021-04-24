module.exports = {
    images: {
        domains: ['storage.googleapis.com'] 
    }
};

//Setando o local onde a imagem está hospedada
//para usar na chamada com o recurso Image.
//Vai fazer um tratamento antes de carregar a imagem.
//Ele traz a imagem renderizada automaticamente para
//um tamanho/uma resolução pré-definida por você.
//Isso faz com que a página não precise gastar recursos
//carregando uma imagem pesada ou grande demais
//para usa-la em um elemento que não requer tanta
//qualidade.