
function mudar(pop){

    var queijo = Number(pop);
    var projeto = document.getElementById("H21");
    var texto = document.getElementById("card-textid");
    var link = document.getElementById("bola-"); 


    switch (queijo) {
        case 1:
            projeto.innerHTML = "Projeto 1";
            texto.innerHTML = "Uns dos meus primeiros projetos desenvolvidos, Sendo ele desenvolvido em sala de aula com o objetivo de conhecer a linguagem C# onde mexiamos com banco de dados para guardar nomes, produtos, emails e etc... Enfim um sistema.";
            link.href = "https://github.com/Ze-Edu/ClassLabNu";
            break;
        case 2:
            projeto.innerHTML = "Projeto 2";
            texto.innerHTML = "Projeto de treino para funcionalidades de responsividade nos sites que fazemos, vimos GRID e FLEX fazendo os devidos ajustes para a responsividade total, um gap aqui um padding ali...";
            link.href = "https://github.com/Ze-Edu/GRID-e-FLEX";
            break;
        case 3:
            projeto.innerHTML = "Projeto 3";
            texto.innerHTML = 'Projeto de redes desenvolvido em grupo, onde pegamos nossa empresa criada e implementamos uma planta de cabeamento e nos dispositivos, instalamos softwares de segurança, como PFsense, Microtik, onde apresentamos esse projeto em sala.';
            link.href = "https://github.com/Ze-Edu/Projeto-de-Redes";
            break;
    
        default:
            
            break;
    }
}