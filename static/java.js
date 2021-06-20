const pessoa = {
    estado: true,
    serio: 'https://static.todamateria.com.br/upload/al/be/alberteinstein-cke.jpg',
    doidos: 'http://s2.glbimg.com/Gah8zM0ouHUOis6apjK8wUUFOUM=/s.glbimg.com/jo/g1/f/original/2013/03/13/sem-titulo-1_1.jpg',
}
function atualizarHumor() {
    const blocoHumor = document.getElementById('bloco_humor');
    const elementoImagem = document.getElementById('imagem');

    if (pessoa.estado){
        elementoImagem.src = pessoa.serio;
        blocoHumor.innerText = 'Betão tá sério!';     
    }else{
        elementoImagem.src = pessoa.doidos;
        blocoHumor.innerText = 'Betão tá doido!';
    }
}
atualizarHumor();

const botaoAlterarHumor = document.getElementById('alterar_humor');
botaoAlterarHumor.addEventListener('click', function(){
    pessoa.estado = !pessoa.estado;
    atualizarHumor();
});
