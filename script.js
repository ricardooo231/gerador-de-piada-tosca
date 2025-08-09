function gerarPiada() {
    const piadas = [
        "Por que o astronauta terminou com a namorada? Porque ele precisava de espaço!",
        "O que o pão de queijo disse pro café? 'Você é muito quente pra mim!'",
        "Por que o tomate virou cantor? Porque ele era um tomate pop!",
        "Qual é o Wi-Fi da vida? Aquele que nunca conecta!",
        "O que o ovo disse pro outro ovo? 'Tô com a casca rachada por você!'",
        "Por que o caderno foi pra academia? Pra ficar mais quadriculado!",
        "O que a impressora disse pro papel? 'Você é minha folha de rosto!'",
        "Por que o astronauta terminou com o foguete? Porque ele tava em outra órbita!",
        "O que o abacaxi disse pro suco? 'Você é minha polpa do coração!'",
        "Por que o lápis terminou com a borracha? Porque ela apagou ele da vida dela!",
        "O que o cachorro disse pro osso? 'Você é o osso dos meus sonhos!'",
        "Por que o celular terminou com o carregador? Porque ele tava sempre descarregado!",
        "O que a maçã disse pro espelho? 'Sou a fruta mais apetitosa!'",
        "Por que o pneu terminou com o carro? Porque ele tava cansado de rodar atrás!",
        "O que o ventilador disse pro calor? 'Vou te mandar pro espaço!'",
        "Por que a geladeira tá sempre de boa? Porque ela é muito fria!",
        "O que o zero disse pro oito? 'Que cinto estiloso!'",
        "Por que o astronauta terminou com a lua? Porque ela tava sempre de fase!",
        "O que o café disse pra manhã? 'Sem mim, você não funciona!'",
        "Por que o relógio terminou com o tempo? Porque ele tava atrasado demais!",
        "O que o pão disse pro forno? 'Tô assando de paixão por você!'",
        "Por que o dinossauro terminou com a namorada? Porque ele era um T-Rex possessivo!",
        "O que a pipoca disse pro milho? 'Você vai estourar de orgulho!'",
        "Por que o Wi-Fi terminou com o roteador? Porque a conexão tava fraca!",
        "O que o sorvete disse pro calor? 'Tô derretendo por você!'",
        "Por que o papel higiênico terminou com o banheiro? Porque ele tava cansado de ser enrolado!",
        "O que o lápis disse pra caneta? 'Você é muito tinta!'",
        "Por que o astronauta terminou com o cometa? Porque ele só passava de vez em quando!",
        "O que o arroz disse pro feijão? 'A gente é o casal perfeito!'",
        "Por que o espelho terminou com o reflexo? Porque ele só via defeitos!"
    ];
    const piadaAleatoria = piadas[Math.floor(Math.random() * piadas.length)];
    document.getElementById("piada").innerText = piadaAleatoria;
}