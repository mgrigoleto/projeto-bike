// estilo das opções de radio clickadas
{
const perguntas = document.querySelectorAll('input[type=radio]')// pega todos os radios

perguntas.forEach(pergunta => {// para cada radio
  pergunta.addEventListener('click', () => {// deixa clicável, e se clicado
    const label = document.querySelector('label[for="'+pergunta.id+'"')// pega a label do radio em questão
    const groupName = pergunta.name;// pega os nomes dos radios
    const group = document.getElementsByName(groupName);// pega todos os radios com o mesmo nome

    group.forEach(radioButton => {// para cada um dos radios com o mesmo nome
      const radioLabel = document.querySelector('label[for="'+radioButton.id+'"]');// pega todas as labels para cada nome de radio
      if(pergunta.checked){
        radioLabel.classList.remove('opt-clicked')
        label.classList.add('opt-clicked')
      }
    }) 
  })
})
}

{
// estilo para as checkbox clicadas (pergunta sobre quais equipamentos são usados)
const checkboxes = document.querySelectorAll('input[type=checkbox]')// pega os checkbox

checkboxes.forEach(cb => {// para cada checkbox
  cb.addEventListener('click', () => {// deixa clicável, e se clicada
    const labelC = document.querySelector('label[for="'+cb.id+'"')// pega a label da checkbox em questão
    if(cb.checked){
      labelC.classList.add('opt-clicked')
    }else{// para opção de múltipla seleção
      labelC.classList.remove('opt-clicked')
    }
  })
})
}

// aparecer as opções dos equipamentos
{
const equipamentos = document.getElementById('equipo-opt').style // pergunta sobre quais equipamentos são utilizados
equipamentos.display = 'none'

var respostaSim = document.getElementById('eqp-sim')
respostaSim.addEventListener('click', function(){// se clicar em sim, mostra a div
  equipamentos.display = 'block'
})

var respostaNao = document.getElementById('eqp-nao')
respostaNao.addEventListener('click', function(){// se for não, esconde a div
  equipamentos.display = 'none'
})
}
  
// 
// 
// FUNÇÃO
// 
// 

function verificar(){
  let respostas = []//cria o vetor que armazena as respostas
  
  
  const allQuestions = document.querySelectorAll('input[type=radio]')
  allQuestions.forEach(question => {
    if(question.checked){
      respostas.push(question.value)
    }
  })

  const checkboxEqp = document.querySelectorAll('input[type=checkbox]')
  checkboxEqp.forEach(cb => {
    if(cb.checked){
      respostas.push(cb.value)
    }
  })
  
  // VERIFICAR AS RESPOSTAS E MANDAR A MENSAGEM SE HOUVER ERRO
  let mensagem = []
  let erro = false
  for(let i = 0;i<respostas.length;i++){
    switch (respostas[i]){
      case "tempo-0-4m"://tempo de pedal menor que 4 meses
        erro = true
        mensagem.push("A ciclovia tem uma grande extensão e é bem íngreme em certos pontos. Para garantir sua segurança e sua aptidão para pedalar com menos riscos de quedas ou acidentes, é importante ter um tempo considerável de prática de ciclismo. Você informou que pedala há menos de 4 meses e, por isso, não recomendamos que você realize a travessia.")
        break;
        
      case "freq-rara"://frequência de pedalada menor que 1 vez na semana
        erro = true
        mensagem.push("Como a ciclovia possui pontos íngremes e é bem extensa, é interessante que você tenha pratique ciclismo pelo menos uma vez por semana para ter maior segurança ao pedalar, frear, curvar, etc. Sua resposta foi de que raramente pedala, portanto não recomendamos que você realize a travessia.")
        break;

      case "nao-eqp"://não usa equipamentos de segurança
        erro = true
        mensagem.push("O uso de equipamentos de segurança são fundamentais para garantir a integridade e proteção do ciclista em caso de acidentes ou quedas, colaborando para que não haja lesões graves. Além disso, os equipamentos são objetos de uso obrigatório para utilizar a ciclovia da ponte. Como você não faz o uso de equipamentos de segurança, não recomendamos que você realize a travessia.")
        break;

      case "rev-4-6m"://revisão há mais de 3 meses
        erro = true
        mensagem.push("O principal objetivo da revisão é garantir o bom funcionamento e durabilidade da sua bicicleta, além da segurança do ciclista e demais pessoas presentes no espaço de percurso. Inclusive, manter a bike em ordem diminui a quebra de peças e economiza gastos indesejados e imprevistos. Ter uma corrente com defeito ou uma falha no freio é desmotivador e pode gerar acidentes indesejáveis. Por estes motivos, a revisão e a manutenção frequente das bicicletas são muito importantes. Você informou que a última revisão foi feita há mais de 3 meses, portanto recomendamos que faça uma revisão na sua bicicleta para que esteja 100% preparado para realizar a travessia.")
        break;

      case "rev-m6m"://revisão há mais de 3 meses
        erro = true
        mensagem.push("O principal objetivo da revisão é garantir o bom funcionamento e durabilidade da sua bicicleta, além da segurança do ciclista e demais pessoas presentes no espaço de percurso. Inclusive, manter a bike em ordem diminui a quebra de peças e economiza gastos indesejados e imprevistos. Ter uma corrente com defeito ou uma falha no freio é desmotivador e pode gerar acidentes indesejáveis. Por estes motivos, a revisão e a manutenção frequente das bicicletas são muito importantes. Você informou que a última revisão foi feita há mais de 3 meses, portanto recomendamos que faça uma revisão na sua bicicleta para que esteja 100% preparado para realizar a travessia.")
        break;

      case "nao-refl"://não usa refletor
        erro = true
        mensagem.push("Os refletores são acessórios muito importantes para manter a segurança do ciclista, visto que a maioria dos acidentes noturnos com este meio de transporte ocorrem porque os outros ciclistas/motoristas não conseguem visualizar o ciclista. Por isso, é de extrema importância o uso de refletores ou luzes indicadoras para pedalar e não recomendamos que você realize a travessia da ponte sem eles.")
        break;

      case "nao-sino"://não usa sininho
        erro = true
        mensagem.push("Os sinos ou buzinas funcionam como alertas sonoros para as pessoas que percorrem o mesmo caminho que o ciclista, sejam pedestres, motoristas, pilotos ou outros ciclistas. Geralmente são usados em ultrapassagens e são muito importantes. Como você informou que não possui buzina ou sininho, não recomendamos que realize a travessia.")
        break;

      case "nao-freio"://não tem freio
        erro = true
        mensagem.push("Os freios são um dos componentes mais importantes de uma bicicleta, pois permitem ao ciclista controlar a velocidade e parar a bicicleta de maneira segura e eficiente. Eles são essenciais para a segurança do ciclista, especialmente em situações de emergência ou em descidas íngremes, como as existentes na ciclovia da ponte. Pelo fato da sua bicicleta não possuir freios, não recomendamos que você realize a travessia.")
        break;
    }
    
    
  }

  if(respostas.includes("sim-eqp") && !(respostas.includes("capacete"))){//se o capacete não estiver marcado
    erro = true
    mensagem.push("Apesar de você possuir outros equipamentos de segurança, é essencial que você possua um capacete de ciclismo. Os equipamentos de segurança para ciclistas, como o próprio nome já diz, devem ser usados para garantir a segurança e integridade física do ciclista. Portanto, não recomendamos que você realize a travessia sem capacete.")
  }

  console.log(respostas.length)
  let existeEqp = false//boolean para verificar se há checkbox marcada ou não
  let temEquipamento = document.getElementById('eqp-sim')
  let naoTemEquipamento = document.getElementById('eqp-nao')
  if(temEquipamento.checked){
    existeEqp = true
  }else if(naoTemEquipamento.checked){
    existeEqp = false
  }
  
  console.log(existeEqp)
  
  // VALIDAÇÃO PARA VER SE FOI PREENCHIDO OU NÃO
  if((existeEqp == true && respostas.length >= 8) || (existeEqp == false && respostas.length >= 7)){
    document.getElementById('msgerro').style.display = 'none'
    mostrar(erro, mensagem)    
  }else{
    document.getElementById('msgerro').innerHTML = "<p>ERRO! VOCÊ DEVE RESPONDER TODAS AS PERGUNTAS!</p>"
  }
}





function mostrar(erro, mensagem){
  //esconder os conteúdos da tela
  document.getElementById('box-geral').style.display = 'none'
  document.getElementById('verificar').style.display = 'none'
  document.getElementById('intro').style.display = 'none'
  
  const divResultado = document.getElementById('result')
  const resultado = document.getElementById('res-texto')
  
  if(erro == true){
    //mostrar a div resultado e adicionar seu estilo
    divResultado.style.display = 'block'
    divResultado.classList.add('reprovado')

    //montar comçeo da mensagem
    resultado.innerHTML = '<p>Ops!</p><p>Pelo o que observamos, <b>você não está preparado</b> para realizar a travessia da ponte com segurança.</p>'+
          '<p>Vale lembrar que não estamos te proibindo de realizar a travessia pela ciclovia. A fiscalização e regulamentação dos ciclistas é de responsabilidade das autoridades públicas. Esta ferramenta tem o único intuito de contribuir para que sua pedalada seja mais segura.</p>'
    
    for(let j = 0;j<mensagem.length;j++){
      resultado.innerHTML += '<p>'+mensagem[j]+'</p>'
    }
  }
  else{
    //mostrar a div resultado e adicionar seu estilo
    divResultado.style.display = 'block'
    divResultado.classList.add('aprovado')

    ///montar mensagem
    resultado.innerHTML = '<p>Maravilha!</p><p>Pelo o que observamos, <b>você está preparado</b> para realizar a travessia da ponte com segurança.</p>'+
          '<p>Vale lembrar que não estamos te dando permissão legal para realizar a travessia pela ciclovia. A fiscalização e regulamentação dos ciclistas é de responsabilidade das autoridades públicas. Esta ferramenta tem o único intuito de contribuir para que sua pedalada seja mais segura.</p>'+
      '<p> Lembre-se de checar os freios, os pneus e seus equipamentos de segurança. Se for conveniente, você pode verificar a possibilidade de adquirir outros equipamentos, como retorvisor, apoio da bicileta, lanternas, etc.</p>'+
          '<p>Tenha uma boa pedalada!</p>'
  }
}