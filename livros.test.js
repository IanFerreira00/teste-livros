const { adicionarLivro, buscarLivro, removerLivro } = require('./test')

test("adicionar livro funciona", () => {
    const entrada = { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: 1943 }
    const resposta = [
        { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605  },
        { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', anoPublicacao: 1813 },
        { titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', anoPublicacao: 1954 },
        { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: 1943 }
    ]
    expect(adicionarLivro(entrada)).toEqual(resposta)
})

test("erro quando o formato da variavel for errado", () => {
    const livro1 = { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: 1943 };
    const livro2 = { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: 1943 };
    const livro3 = { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: '1943' };
    expect(() => adicionarLivro(livro1)).toThrow()
    expect(() => adicionarLivro(livro2)).toThrow()
    expect(() => adicionarLivro(livro3)).toThrow()
}) 

test("erro quando for um livro já disponivel no acervo", () => {
    const entrada = { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605  }
    expect(() => adicionarLivro(entrada)).toThrow()
})

test("buscar livro funciona", () => {
    const entrada = "Dom Quixote"
    const resposta = { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605  }
    expect(buscarLivro(entrada)).toEqual(resposta)
})

test("titulo começando com letra minuscula", () => {
    const entrada = 'Orgulho e Preconceito'
    expect(buscarLivro(entrada)).toEqual({ titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', anoPublicacao: 1813 })
})

test("buscar livro não disponivel no acervo", () => {
    const entrada = 'Jurassic Park'
    expect(() => buscarLivro(entrada)).toThrow()
})

test("remover livro funciona", () => {
    const entrada = 'O Senhor dos Anéis: A Sociedade do Anel'
    const resposta = [
        { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', anoPublicacao: 1605  },
        { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', anoPublicacao: 1813 },
        { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: 1943 }
    ]
    expect(removerLivro(entrada)).toEqual(resposta) 
})

test("titulo começando com letra minuscula", () => {
    const entrada = 'Dom Quixote'
    const resposta = [
        { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', anoPublicacao: 1813 },
        { titulo: 'O Pequeno principe', autor: 'Antoine de Saint-Exupéry', anoPublicacao: 1943 }
    ]
    expect(removerLivro(entrada)).toEqual(resposta)
})

test("remover livro não disponivel no acervo", () => {
    const entrada = 'Harry Potter e a Pedra Filosofal'
    expect(() => removerLivro(entrada)).toThrow()
})