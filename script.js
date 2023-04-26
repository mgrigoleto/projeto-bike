// estilo das opções de radio clickadas
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

// aparecer as opções dos equipamentos



// 
// 
// FUNÇÃO
// 
// 

// function verificar(){
//   se resposta = tal
//   esconde tudo => esconder()
//   mostrar(nao usa capacete)
// }

// function esconder(){
  
// }

// function mostrar(erro){
//   se erro = não usar capacete{
//     mensagem = você não usa capacete
//   }
//   return mensagem
// }