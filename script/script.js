let entrevista = {
    entrevistador: "Giovani (Lindinha)",
    entrevistado: "Breno (Docinho)",
    questoes: [
        {
            p:"O que você planeja fazer ao terminar os estudos?",
            r:"Trabalhar com algo que me dê dinheiro."
        },
        
        {
            p:"Como você se vê em 5 anos?",
            r:"Morando fora, e casado com minha mulher."
        },

        {
            p:"Quais são suas metas financeiras?",
            r:"Receber o suficente para proporcionar uma vida boa para minha familia."
        },

        {
            p:"Quais são suas metas pessoais?",
            r:"Aprender 2 línguas, tocar piano, talvez fazer facul, tirar CNH."
        },

        {
            p:"Vocẽ acredita nossa amizade permanecerá após os estudos? Como acha que poderiamos fortalecer os laços?",
            r:"Sim,  5 minutinhos sem perder a amizade."
        },

         {
            p:"Quem foi a(s) pesssoa(s), que teve maior influências em suas escolhas da vida?",
            r:"Eu"
        },

        {
            p:"Quais são suas metas profissiionais?",
            r:"Trabalhar, sempre estar aprendendo algo novo"
        },

       {
            p:"Como você planeja cuidar de sua saúde e bem estar a medida que envelhece?",
            r:"Praticar exercícios,me hidratar, comer alimentos saudavéis "
        }
    ]
}

entrevistador: "Micahel (大きなアヒル)",
entrevistado: "Daniel (Quep)",
questoes: [
    {
        p:"questão1?",
        r:""
    },
    
    {
        p:"questão2?",
        r:""
    },

    {
        p:"questão3?",
        r:""
    },

    {
        p:"questão4?",
        r:""
    },

    {
        p:"questão5?",
        r:""
    },

     {
        p:"questão6?",
        r:""
    },

    {
        p:"questão7?",
        r:""
    },

   {
        p:"questão8?",
        r:""
    }
]
}

entrevistador: " Breno (Docinho)",
entrevistado: "Giovani (Lindinha)",
questoes: [
    {
        p:"questão1?",
        r:""
    },
    
    {
        p:"questão2?",
        r:""
    },

    {
        p:"questão3?",
        r:""
    },

    {
        p:"questão4?",
        r:""
    },

    {
        p:"questão5?",
        r:""
    },

     {
        p:"questão6?",
        r:""
    },

    {
        p:"questão7?",
        r:""
    },

   {
        p:"questão8?",
        r:""
    }
]
}

entrevistador: "Daniel (Quep)",
entrevistado: "Michael (大きなアヒル)",
questoes: [
    {
        p:"questão1?",
        r:""
    },
    
    {
        p:"questão2?",
        r:""
    },

    {
        p:"questão3?",
        r:""
    },

    {
        p:"questão4?",
        r:""
    },

    {
        p:"questão5?",
        r:""
    },

     {
        p:"questão6?",
        r:""
    },

    {
        p:"questão7?",
        r:""
    },

   {
        p:"questão8?",
        r:""
    }
]
}

function abrir_aba(num){
    for(let i = 1   ; i <= 5; i++){
        let id_btn = "btn"+i;
        let id_aba = "aba"+i;
        document.getElementById(id_btn).disabled = false;
        document.getElementById(id_aba).style.display = "none";
        
    }



    if(num == "1"){
        document.getElementById("btn1").disabled = true;
        document.getElementById("aba1").style.display= "block";
        document.getElementById("Idex").style.display = "none";

    }

    if(num == "2"){
        document.getElementById("btn2").disabled = true;
        document.getElementById("aba2").style.display= "block";
        document.getElementById("Idex").style.display = "none";
    }

    if(num == "3"){
        document.getElementById("btn3").disabled = true;
        document.getElementById("aba3").style.display= "block";
        document.getElementById("Idex").style.display = "none";
    }

    if(num == "4"){
        document.getElementById("btn4").disabled = true;
        document.getElementById("aba4").style.display= "block";
        document.getElementById("Idex").style.display = "none";
    }

    if(num == "5"){
        document.getElementById("btn5").disabled = true;
        document.getElementById("aba5").style.display= "block";
        document.getElementById("Idex").style.display = "none";
    }



}       




/*



let contador=null;
let inicio= 0;
let fim=0;



function contagem(){
    if(inicio!=fim){
      document.getElementById("valor").innerHTML=inicio;
      if(inicio>fim){ inicio--;
    }else{
        inicio++;
    }
  }
}

  function contar(){
    inicio=document.getElementById("inicio").value;
    fim=document.getElementById("fim").value;
    if(inicio>fim) inicio=Number(fim)-1;
    else fim = Number(fim) + 1 ;
    contador=setInterval(contagem,1000);
}
*/ 
