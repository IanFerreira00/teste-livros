const livro = { titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', anoPublicacao: 1967 };
const livro2 = { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605 };

var livros = [
    { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605 },
    { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', anoPublicacao: 1813 },
    { titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', anoPublicacao: 1943 }
]


function adicionarLivro(livro) {
    const tituloTeste = livro.titulo.toString()
    const autorTeste = livro.autor.toString()
    const anoTeste = Number(livro.anoPublicacao)
    for(i=0; i < livros.length; i++){
        if(livros[i].titulo === livro.titulo){
            throw new Error(`o livro ${livro.titulo} já esta disponivel no acervo`)
        }
    }
    if (livro.titulo === tituloTeste && livro.autor === autorTeste && livro.anoPublicacao === anoTeste) {
        livros.push(livro)
    } else {
        throw new Error(`Não foi possivel adicionar o livro ${livro.titulo}`)
    }

    return livros
}
//console.log(adicionarLivro(livro))

function buscarLivro(titulo) {
    titulo = titulo.toLowerCase()
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo.toLocaleLowerCase() === titulo) {
            return livros[i];
        }
    }
    throw new Error(`O livro ${titulo} não foi encontrado no acervo`);
}
console.log(buscarLivro('Dom Quixote'))

function removerLivro(titulo) {
    titulo = titulo.toLowerCase()
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo.toLocaleLowerCase() === titulo) {
            livros.splice(i, 1)
            return livros
        }

    }
    throw new Error(`O livro ${titulo} não foi encontrado no acervo`);
}


module.exports = {adicionarLivro, buscarLivro, removerLivro}