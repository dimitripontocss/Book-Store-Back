import db from "../database/mongo.js"

export async function registerProduct(req, res){
    try{
        console.log("oie")
        await db.collection("products").insertMany([{
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/31772765/2666082.jpg?v=637647406736600000",
            name: "Código Limpo",
            author: "Robert C. Martin",
            description: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software.",
            price: "R$ 80,00"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12103199/1008971706.jpg?v=637142225824030000",
            name:"O Poder do Hábito",
            author: "Charles Duhigg",
            description: "Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los.",
            price:"R$ 47,30"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12109004/1008976499.jpg?v=637142247801500000",
            name: "Mindset",
            author: "Carol Dweck",
            description: "Carol S. Dweck, professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama de “mindset”, é crucial para o sucesso.",
            price: "R$ 59,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12117341/1009213203.jpg?v=637142278797730000",
            name: "Pequeno Manual Antirracista",
            author: "Djamila Ribeiro",
            description: "Dez lições breves para entender as origens do racismo e como combatê-lo. Neste pequeno manual, a filósofa e ativista Djamila Ribeiro trata de temas como atualidade do racismo, negritude, branquitude, violência racial, cultura, desejos e afetos.",
            price: "R$ 32,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12603909/1010078680.jpg?v=637152644087470000",
            name: "O Conto da Aia",
            author: "Margaret Atwood",
            description: "Escrito em 1985, o romance distópico O conto da aia, da canadense Margaret Atwood, tornou-se um dos livros mais comentados em todo o mundo nos últimos meses, voltando a ocupar posição de destaque nas listas do mais vendidos em diversos países.",
            price: "R$ 39,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12101548/1008972955.jpg?v=637142220125430000",
            name: "1984",
            author: "George Orwell",
            description: "Em seu último romance, o autor criou um personagem chamado Winston, que vive aprisionado em uma sociedade completamente dominada pelo Estado. Essa submissão ao poder, é relatada, inclusive, na rotina desse personagem, que trabalha com a falsificação de registos históricos, a fim de satisfazer os interesses presentes.",
            price: "R$ 29,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/31727885/minha-hist..jpg?v=637363982883370000",
            name: "Minha História",
            author: "Michelle Obama",
            description: "Um relato íntimo, poderoso e inspirador da ex-primeira-dama dos Estados Unidos. Com uma vida repleta de realizações significativas, Michelle Obama se consolidou como uma das mulheres mais icônicas e cativantes de nosso tempo.",
            price: "R$ 57,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/14018888/sol-e-para-todos.jpg?v=637179048372130000",
            name: "O Sol É Para Todos",
            author: "Harper Lee",
            description: "A nova edição revista de um dos maiores clássicos da literatura mundial Um livro emblemático sobre racismo e injustiça: a história de um advogado que defende um homem negro acusado de estuprar uma mulher branca nos Estados Unidos dos anos 1930 e enfrenta represálias da comunidade racista.",
            price: "R$ 50,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12110250/1007739147.jpg?v=637142252496370000",
            name: "Harry Potter e A Pedra Filosofa",
            author: "J. K. Rowling",
            description: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural.",
            price: "R$ 39,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12104428/1007711683.jpg?v=637142230218030000",
            name: "Admirável Mundo Novo",
            author: "Aldous Huxley",
            description: "Uma sociedade inteiramente organizada segundo princípios científicos, na qual a mera menção das antiquadas palavras “pai” e “mãe” produzem repugnância. Um mundo de pessoas programadas em laboratório, e adestradas para cumprir seu papel numa sociedade de castas biologicamente definidas já no nascimento.",
            price: "R$ 33,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/31727813/1010086297.jpg?v=637360457063700000",
            name: "As Aventuras De Mike",
            author: "Gabriel Dearo",
            description: "Sabe aquele garoto popular da escola?Que é descolado se veste bem e faz sucesso com as garotas?Pois é, esse com certeza não é o Mike.Na verdade, o Mike é exatamente o contrário de tudo isso! Ele é desastrado, prefere videogames e salgadinhos no lugarde futebol, e é PÉSSIMO com as garotas.",
            price: "R$ 33,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/31754842/1011224255.jpg?v=637481546255100000",
            name: "O Príncipe - Obra Completa",
            author: "Nicolau Maquiavel",
            description: "Se O Príncipe figura como uma das obras de maior influência da humanidade, os comentários feitos por Rainha Cristina Wasa da Suécia e Napoleão Bonaparte aparecem para enriquecer a obra que se tornou livro de cabeceira dos maiores líderes do planeta.",
            price: "R$ 42,00"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12107927/1008997059.jpg?v=637142244051200000",
            name: "O Milagre Da Manhã",
            author: "Hal Elrod",
            description: "Conheça o método simples e eficaz que vai proporcionar a vida dos sonhos — antes das 8 horas da manhã! Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades.",
            price: "R$ 29,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12704918/1010086493.jpg?v=637154233963100000",
            name: "Felicidade - Modos De Usar",
            author: "Cortella, Karnal e Pondé",
            description: "Um bate-papo entre três pensadores pop sobre um assunto que interessa a todo mundo: como ser feliz. O livro é resultado do debate entre Cortella, Karnal e Pondé em comemoração aos 15 anos da Editora Planeta no Brasil,realizado em maio de 2018.",
            price: "R$ 39,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12109662/1009192610.jpg?v=637142250382570000",
            name: "O Ódio Que Você Semeia",
            author: "Angie Thomas",
            description: "1º lugar na lista do New York Times. Uma história juvenil repleta de choques de realidade. Um livro contra o racismo em tempos tão cruéis e extremos. Starr aprendeu com os pais, ainda muito nova, como uma pessoa negra deve se comportar na frente de um policial.",
            price: "R$ 37,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12110699/1008837628.jpg?v=637142254225270000",
            name: "As Coisas Que Você Só Vê Quando Desacelera",
            author: "Haemin Sunim",
            description: "Um livro para os dias de hoje, repleto de verdades universais, lindamente escrito e ilustrado. Cada parágrafo possui a própria semente, que cria raízes para a sabedoria mais profunda e atemporal. Uma obra para se ter sempre à mão.",
            price: "R$ 36,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12564499/1010073032.jpg?v=637152462077370000",
            name: "O Tatuador De Auschwitz",
            author: "Heather Morris",
            description: "A incrível história, baseada em fatos, de um amor que os cruéis muros de Auschwitz não foram capazes de impedir Nesse romance histórico, um testemunho da coragem daqueles que ousaram enfrentar o sistema da Alemanha nazista, o leitor será conduzido pelos horrores vividos dentro dos campos de concentração da Alemanha nazista e verá que o amor não pode ser limitado por muros e cercas.",
            price: "R$ 39,70"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12109506/1003668301.jpg?v=637142249737330000",
            name: "Eleanor & Park - Slim",
            author: "Rainbow Rowell",
            description: "Eleanor & Park é engraçado, triste, sarcástico, sincero e, acima de tudo, geek. Os personagens que dão título ao livro são dois jovens vizinhos de dezesseis anos. Park, descendente de coreanos e apaixonado por música e quadrinhos, não chega exatamente a ser popular, mas consegue não ser incomodado pelos colegas de escola.",
            price: "R$ 24,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/12112055/1005025332.jpg?v=637142259321300000",
            name: "Box - o Essencial da Mitologia",
            author: "Herma Wilson",
            description: "Estudiosos, professores de universidades, intelectuais e especialistas de vários campos do saber costumam dizer que a Grécia é o berço da civilização ocidental.",
            price: "R$ 44,90"
        },
        {
            imageUrl:"https://lojasaraiva.vteximg.com.br/arquivos/ids/31757820/1011229147.jpg?v=637483840281530000",
            name: "Sapiens",
            author: "Yuval Noah Harari",
            description: "O autor repassa a história da humanidade, ou do homo sapiens, desde o surgimento da espécie durante a pré-história até o presente, mas em vez de apenas “inventariar” os fatos históricos ele os relaciona com questões do presente e os questiona de maneira surpreendente.",
            price: "R$ 69,90"
        }
    ])
        return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    }
}

export async function getProducts(req, res){
    try {
        const products = await db.collection("products").find().toArray()
        return res.send(products)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}