/*
    ESCOLAS LITERÁRIAS
    ===================

    Este arquivo contém:
    1. Os dados das escolas literárias.
    2. A criação da linha do tempo.
    3. A abertura dos detalhes.
    4. A navegação anterior/próxima.
    5. A navegação de volta para a linha do tempo.

    Para alterar o conteúdo do site, procure o objeto "schools".
*/


// =====================================================
// DADOS DAS ESCOLAS LITERÁRIAS
// =====================================================

const schools = [

    {
        id: "trovadorismo",

        name: "Trovadorismo",

        period: "Fim do século XII ao século XIV / início do XV",

        category: "LITERATURA MEDIEVAL",

        place: "Portugal medieval e demais espaços ibéricos ligados à tradição galego-portuguesa.",

        genres: "Cantigas líricas e satíricas; poesia trovadoresca.",

        history: [
            "O Trovadorismo surgiu em uma sociedade medieval organizada por relações de dependência, pela força da aristocracia e pela presença central da Igreja. A cultura escrita estava fortemente ligada aos ambientes religiosos e cortesãos, enquanto a transmissão oral tinha grande importância.",

            "Na Península Ibérica, a poesia trovadoresca se desenvolveu em contato com outras tradições medievais europeias. O sistema feudal, a cultura cortesã e os códigos do amor cortês ajudaram a formar temas como a vassalagem amorosa, a saudade e o conflito entre desejo e convenção social.",

            "As cantigas eram feitas para serem cantadas e articulavam palavra, música e performance. Por isso, compreender o Trovadorismo exige olhar para uma cultura em que a literatura não era separada da música como frequentemente acontece hoje."
        ],

        portugal: {
            period: "Fim do século XII ao século XIV / início do XV.",

            context:
                "A formação do reino português, a sociedade feudal e a cultura das cortes criaram um ambiente favorável à produção das cantigas. A língua galego-portuguesa foi o principal veículo da poesia lírica peninsular.",

            authors:
                "D. Dinis; João Garcia de Guilhade; Martim Codax; Paio Soares de Taveirós.",

            works:
                "Cantigas de Santa Maria, de Afonso X; Cancioneiro da Ajuda; Cancioneiro da Biblioteca Nacional; Cantiga da Ribeirinha, tradicionalmente atribuída a Paio Soares de Taveirós."
        },

        brazil: null,

        characteristics: [
            "Predomínio da poesia ligada à música.",
            "Cantigas de amor e de amigo.",
            "Cantigas de escárnio e de maldizer.",
            "Amor cortês e idealização amorosa.",
            "Presença de religiosidade medieval.",
            "Estrutura marcada por repetição, paralelismo e refrão."
        ],

        authorsWorks: [
            {
                author: "D. Dinis",
                role: "Rei de Portugal e trovador",
                works: [
                    "Cantigas de amor",
                    "Cantigas de amigo",
                    "Cantigas de escárnio e maldizer"
                ]
            },
            {
                author: "Martim Codax",
                role: "Trovador galego-português",
                works: [
                    "Cantigas de amigo de tema marítimo",
                    "Cantigas de Vigo"
                ]
            },
            {
                author: "Paio Soares de Taveirós",
                role: "Trovador galego-português",
                works: [
                    "Cantiga da Ribeirinha",
                    "Uma das composições tradicionalmente associadas ao início da tradição trovadoresca portuguesa"
                ]
            },
            {
                author: "Afonso X",
                role: "Rei de Castela e Leão",
                works: [
                    "Cantigas de Santa Maria"
                ]
            }
        ],

        social:
            "A literatura estava ligada à vida das cortes, à religião e à tradição oral. As cantigas também revelam relações sociais de gênero, hierarquia e honra. A figura do trovador não corresponde ao escritor moderno isolado: poesia, música e apresentação pública estavam frequentemente integradas.",

        curiosityTitle: "A literatura medieval podia ser cantada",

        curiosity:
            "As cantigas eram acompanhadas por música. O texto literário medieval, portanto, não deve ser imaginado apenas como uma página silenciosa: ele fazia parte de uma experiência sonora e performática."
    },


    {
        id: "humanismo",

        name: "Humanismo",

        period: "Portugal: aproximadamente 1434–1527",

        category: "TRANSIÇÃO MEDIEVAL / RENASCENTISTA",

        place: "Principalmente Portugal.",

        genres: "Crônica histórica, poesia palaciana, teatro e prosa moralizante.",

        history: [
            "O Humanismo português ocupa uma posição de transição entre a cultura medieval e o Renascimento. A expansão das cidades, o fortalecimento da monarquia, o desenvolvimento da escrita administrativa e o contato crescente com ideias humanistas europeias modificaram o ambiente cultural.",

            "A nomeação de Fernão Lopes como cronista-mor, em 1434, é frequentemente usada como marco inicial do período. Mais tarde, a chegada de Sá de Miranda a Portugal, em 1527, é tradicionalmente usada como marco final, embora as transformações tenham ocorrido de maneira gradual.",

            "Nesse momento convivem valores medievais e novas formas de observar o ser humano. A religiosidade continua importante, mas cresce o interesse pela experiência humana, pela história, pela observação social e pela cultura clássica."
        ],

        portugal: {
            period: "Aproximadamente 1434–1527.",

            context:
                "Portugal atravessava mudanças políticas e culturais relacionadas à consolidação da monarquia e ao início da expansão marítima. A corte tornou-se importante centro de produção cultural.",

            authors:
                "Fernão Lopes; Gil Vicente; Garcia de Resende; Bernardim Ribeiro.",

            works:
                "Crônicas de Fernão Lopes; Cancioneiro Geral; Auto da Barca do Inferno; Menina e Moça."
        },

        brazil: null,

        characteristics: [
            "Transição entre valores medievais e renascentistas.",
            "Maior atenção ao ser humano e à vida social.",
            "Crônica histórica com preocupação documental.",
            "Teatro de crítica social.",
            "Poesia palaciana.",
            "Presença simultânea de religiosidade e novas perspectivas humanistas."
        ],

        authorsWorks: [
            {
                author: "Fernão Lopes",
                role: "Cronista",
                works: [
                    "Crónica de D. Pedro",
                    "Crónica de D. Fernando",
                    "Crónica de D. João I"
                ]
            },
            {
                author: "Gil Vicente",
                role: "Dramaturgo",
                works: [
                    "Auto da Barca do Inferno",
                    "Auto da Índia",
                    "Farsa de Inês Pereira"
                ]
            },
            {
                author: "Garcia de Resende",
                role: "Poeta e cronista",
                works: [
                    "Cancioneiro Geral"
                ]
            },
            {
                author: "Bernardim Ribeiro",
                role: "Poeta e prosador",
                works: [
                    "Menina e Moça"
                ]
            }
        ],

        social:
            "O teatro de Gil Vicente é especialmente útil para compreender a sociedade portuguesa do período: personagens de diferentes grupos sociais aparecem em situações que expõem corrupção, hipocrisia, exploração e costumes. O Humanismo, portanto, não abandonou a religião, mas passou a observar com mais atenção os comportamentos humanos.",

        curiosityTitle: "Gil Vicente não escrevia apenas para divertir",

        curiosity:
            "Suas peças utilizavam humor, alegoria e crítica para representar diferentes setores da sociedade. Por isso, o teatro vicentino é uma importante fonte literária para compreender mentalidades do Portugal do século XVI."
    },


    {
        id: "classicismo",

        name: "Classicismo",

        period: "Portugal: século XVI, aproximadamente 1527–1580",

        category: "RENASCIMENTO",

        place: "Portugal, inserido no ambiente cultural do Renascimento europeu.",

        genres: "Poesia lírica, poesia épica, teatro e prosa.",

        history: [
            "O Classicismo português está ligado ao Renascimento, período de grande transformação cultural europeia. O redescobrimento e a valorização de modelos greco-romanos, o humanismo, o desenvolvimento das ciências e a circulação ampliada de livros transformaram a maneira como artistas e escritores pensavam a criação.",

            "Portugal vivia também o auge de sua expansão marítima. As viagens oceânicas ampliaram o contato com outros povos e territórios e fortaleceram o poder da Coroa. Essa realidade aparece de maneira monumental em Os Lusíadas, que transforma a viagem de Vasco da Gama em matéria épica.",

            "O Classicismo não significa simplesmente rejeitar a Idade Média. Ele representa uma nova valorização da medida, da proporção, da razão e dos modelos clássicos, convivendo com tensões religiosas e políticas próprias do século XVI."
        ],

        portugal: {
            period: "Aproximadamente 1527–1580.",

            context:
                "A chegada de Sá de Miranda da Itália, em 1527, é tradicionalmente tomada como marco inicial. O período coincide com a expansão ultramarina portuguesa e com o ambiente renascentista europeu.",

            authors:
                "Luís de Camões; Sá de Miranda; António Ferreira.",

            works:
                "Os Lusíadas; Rimas; Auto de Filodemo; Castro."
        },

        brazil: null,

        characteristics: [
            "Valorização dos modelos clássicos greco-romanos.",
            "Equilíbrio, proporção e clareza formal.",
            "Uso da medida nova, especialmente o decassílabo.",
            "Soneto e outras formas fixas.",
            "Racionalização da experiência amorosa.",
            "Presença de referências mitológicas.",
            "Poesia épica associada à expansão portuguesa."
        ],

        authorsWorks: [
            {
                author: "Luís de Camões",
                role: "Principal nome do Classicismo português",
                works: [
                    "Os Lusíadas",
                    "Rimas",
                    "Auto de Filodemo"
                ]
            },
            {
                author: "Sá de Miranda",
                role: "Poeta e introdutor de formas renascentistas em Portugal",
                works: [
                    "Poesias",
                    "Vilhalpandos",
                    "Estrangeiros"
                ]
            },
            {
                author: "António Ferreira",
                role: "Poeta e dramaturgo",
                works: [
                    "Castro",
                    "Poemas Lusitanos"
                ]
            }
        ],

        social:
            "A literatura clássica portuguesa conviveu com uma sociedade profundamente marcada pela monarquia, pelo catolicismo e pela expansão marítima. O Renascimento trouxe maior valorização da cultura clássica e do conhecimento humano, mas o período também foi marcado pela Reforma Protestante e pela reação católica, criando tensões entre novas ideias e estruturas religiosas tradicionais.",

        curiosityTitle: "Os Lusíadas transforma história em epopeia",

        curiosity:
            "Camões utiliza a viagem de Vasco da Gama como eixo de uma narrativa que combina acontecimentos históricos, mitologia clássica, referências ao mundo antigo e uma visão épica da expansão portuguesa."
    },


    {
        id: "quinhentismo",

        name: "Quinhentismo",

        period: "Brasil: 1500–1601, em periodização escolar tradicional",

        category: "LITERATURA COLONIAL BRASILEIRA",

        place: "Brasil colonial, especialmente no litoral sob domínio português.",

        genres: "Literatura de informação, cartas, relatos, crônicas e literatura de catequese.",

        history: [
            "O Quinhentismo é uma classificação usada principalmente para os primeiros textos produzidos no Brasil ou sobre o território brasileiro após a chegada portuguesa. Não corresponde a uma escola literária europeia autônoma como o Classicismo ou o Barroco.",

            "O contexto é o início da colonização portuguesa. A Coroa procurava explorar economicamente o território, controlar a ocupação e estabelecer estruturas administrativas e religiosas. Os textos produzidos nesse cenário tinham frequentemente funções práticas: informar a metrópole, descrever a terra ou participar da catequese.",

            "Por isso, a literatura quinhentista brasileira deve ser entendida em relação à colonização. Descrições da natureza e dos povos indígenas carregam o olhar dos autores europeus e refletem interesses religiosos, políticos e econômicos daquele momento."
        ],

        portugal: {
            period: "Não é normalmente tratado como uma escola literária portuguesa autônoma.",

            context:
                "Em Portugal, o século XVI corresponde ao ambiente renascentista e classicista. O Quinhentismo é uma denominação usada principalmente para a produção textual relacionada ao início da colonização do Brasil.",

            authors:
                "Não se aplica como escola portuguesa independente.",

            works:
                "A produção portuguesa do período inclui obras do Classicismo, como Os Lusíadas."
        },

        brazil: {
            period: "1500–1601, em periodização escolar tradicional.",

            context:
                "Corresponde aos primeiros séculos da presença portuguesa no território. A produção escrita estava ligada à exploração, administração, descrição da terra e catequese religiosa.",

            authors:
                "Pero Vaz de Caminha; José de Anchieta; Manuel da Nóbrega.",

            works:
                "Carta de Pero Vaz de Caminha; textos de José de Anchieta; Auto de São Lourenço."
        },

        characteristics: [
            "Descrição da natureza e do território.",
            "Relatos sobre os povos indígenas.",
            "Interesse informativo e documental.",
            "Literatura de catequese.",
            "Forte presença religiosa.",
            "Visão europeia sobre o território colonizado."
        ],

        authorsWorks: [
            {
                author: "Pero Vaz de Caminha",
                role: "Escrivão da armada de Pedro Álvares Cabral",
                works: [
                    "Carta a El-Rei D. Manuel sobre o achamento do Brasil"
                ]
            },
            {
                author: "José de Anchieta",
                role: "Jesu íta, missionário e escritor",
                works: [
                    "Auto de São Lourenço",
                    "Poemas religiosos",
                    "Textos de catequese"
                ]
            },
            {
                author: "Manuel da Nóbrega",
                role: "Jesu íta e missionário",
                works: [
                    "Informações e textos relacionados à atuação jesuítica no Brasil"
                ]
            }
        ],

        social:
            "O Quinhentismo está diretamente ligado ao encontro — profundamente desigual — entre colonizadores europeus e povos indígenas. Os textos são importantes testemunhos do início da colonização, mas precisam ser lidos criticamente, pois geralmente apresentam o território e seus habitantes a partir do ponto de vista europeu.",

        curiosityTitle: "A Carta de Caminha não foi escrita como um romance",

        curiosity:
            "Ela é uma carta de caráter informativo dirigida ao rei português. Sua importância literária está também na maneira como descreve a terra, os habitantes e o primeiro contato, tornando-se um dos textos fundadores da tradição escrita brasileira."
    },


    {
        id: "barroco",

        name: "Barroco",

        period: "Portugal: aproximadamente 1580–1756 | Brasil: 1601–1768",

        category: "BARROCO",

        place: "Portugal e Brasil colonial, com manifestações diferentes em cada contexto.",

        genres: "Poesia lírica e satírica, sermão, prosa religiosa, teatro e prosa moral.",

        history: [
            "O Barroco desenvolveu-se em uma Europa marcada por conflitos religiosos, especialmente pelas consequências da Reforma Protestante e da Contrarreforma Católica. A cultura barroca frequentemente expressa tensão entre o mundo material e a dimensão espiritual.",

            "Portugal viveu a União Ibérica entre 1580 e 1640 e, depois da Restauração, enfrentou desafios para recuperar sua autonomia e posição política. A literatura portuguesa do período se desenvolveu nesse ambiente de forte presença religiosa e monárquica.",

            "No Brasil colonial, a sociedade estava estruturada pela colonização, pela escravidão e pela economia agroexportadora. Bahia, Pernambuco, Rio de Janeiro e Minas Gerais tornaram-se importantes centros culturais. A literatura barroca brasileira expressou conflitos religiosos e morais, mas também críticas sociais, especialmente na poesia satírica de Gregório de Matos."
        ],

        portugal: {
            period: "Aproximadamente 1580–1756.",

            context:
                "União Ibérica, Restauração portuguesa de 1640, monarquia e forte influência do catolicismo.",

            authors:
                "Padre Antônio Vieira; Francisco Manuel de Melo; Soror Violante do Céu; António José da Silva.",

            works:
                "Sermões; História do Futuro; Obras métricas; Guerras do Alecrim e Manjerona."
        },

        brazil: {
            period: "Tradicionalmente 1601–1768.",

            context:
                "Brasil colonial, economia escravista, expansão da colonização e forte presença da Igreja Católica.",

            authors:
                "Gregório de Matos; Padre Antônio Vieira; Bento Teixeira; Frei Manuel de Santa Maria Itaparica.",

            works:
                "Prosopopeia; Sermões; poesia sacra, lírica e satírica de Gregório de Matos."
        },

        characteristics: [
            "Contrastes e conflitos.",
            "Antítese e paradoxo.",
            "Cultismo: exploração da linguagem e das imagens.",
            "Conceptismo: exploração do raciocínio e da argumentação.",
            "Religiosidade e preocupação com a morte.",
            "Conflito entre matéria e espírito.",
            "Sátira e crítica de costumes."
        ],

        authorsWorks: [
            {
                author: "Padre Antônio Vieira",
                role: "Orador sacro e escritor",
                works: [
                    "Sermão da Sexagésima",
                    "Sermão de Santo Antônio aos Peixes",
                    "Sermões"
                ]
            },
            {
                author: "Gregório de Matos",
                role: "Poeta brasileiro",
                works: [
                    "Poesia satírica",
                    "Poesia religiosa",
                    "Poesia lírico-amorosa"
                ]
            },
            {
                author: "Bento Teixeira",
                role: "Poeta",
                works: [
                    "Prosopopeia"
                ]
            },
            {
                author: "Francisco Manuel de Melo",
                role: "Escritor português",
                works: [
                    "Obras métricas",
                    "Apólogos dialogais"
                ]
            }
        ],

        social:
            "A sociedade barroca era profundamente hierarquizada. No Brasil, a escravidão estruturava a economia e as relações sociais. A literatura podia reforçar valores religiosos, mas também revelar conflitos e críticas. Gregório de Matos, por exemplo, tornou-se conhecido pela sátira de autoridades, costumes e grupos sociais da Bahia.",

        curiosityTitle: "Gregório de Matos ficou conhecido como 'Boca do Inferno'",

        curiosity:
            "O apelido está associado à sua poesia satírica e à tradição de críticas mordazes dirigidas à sociedade baiana. A atribuição e transmissão de muitos poemas também envolvem questões textuais e históricas."
    },


    {
        id: "arcadismo",

        name: "Arcadismo",

        period: "Portugal: 1756–1825 | Brasil: 1768–1836",

        category: "ARCADISMO / NEOCLASSICISMO",

        place: "Portugal e Brasil colonial, sob influência do Iluminismo europeu.",

        genres: "Poesia lírica, poesia épica, sátira e poesia pastoral.",

        history: [
            "O Arcadismo surgiu em diálogo com o Iluminismo e com a reação aos excessos do Barroco. A valorização da razão, da clareza e do equilíbrio acompanhava mudanças científicas e filosóficas que questionavam formas tradicionais de autoridade.",

            "Em Portugal, a fundação da Arcádia Lusitana, em 1756, é tradicionalmente usada como marco. O período também coincide com as reformas do Marquês de Pombal, que procuraram modernizar estruturas do Estado português.",

            "No Brasil, o Arcadismo se desenvolveu principalmente em Minas Gerais, região enriquecida pela mineração. A circulação de ideias iluministas e a tensão política do final do século XVIII, incluindo a Inconfidência Mineira, ajudam a explicar a presença de temas de liberdade e crítica ao poder."
        ],

        portugal: {
            period: "1756–1825, em periodização tradicional.",

            context:
                "Iluminismo, reformas pombalinas e criação da Arcádia Lusitana.",

            authors:
                "Correia Garção; Manuel Maria Barbosa du Bocage; Cruz e Silva; Marquesa de Alorna.",

            works:
                "Obras poéticas de Correia Garção; Rimas de Bocage; Metamorfoses."
        },

        brazil: {
            period: "1768–1836, em periodização tradicional.",

            context:
                "Ciclo do ouro, crescimento de centros urbanos de Minas Gerais, circulação de ideias iluministas e Inconfidência Mineira.",

            authors:
                "Cláudio Manuel da Costa; Tomás Antônio Gonzaga; Basílio da Gama; Santa Rita Durão.",

            works:
                "Obras poéticas; Marília de Dirceu; O Uraguai; Caramuru."
        },

        characteristics: [
            "Busca de simplicidade e equilíbrio.",
            "Referências à Antiguidade clássica.",
            "Bucolismo e pastoralismo.",
            "Idealização da vida no campo.",
            "Uso de pseudônimos pastoris.",
            "Influência do pensamento iluminista.",
            "Linguagem mais clara em reação ao excesso barroco."
        ],

        authorsWorks: [
            {
                author: "Tomás Antônio Gonzaga",
                role: "Poeta brasileiro",
                works: [
                    "Marília de Dirceu",
                    "Cartas Chilenas"
                ]
            },
            {
                author: "Cláudio Manuel da Costa",
                role: "Poeta brasileiro",
                works: [
                    "Obras",
                    "Vila Rica"
                ]
            },
            {
                author: "Basílio da Gama",
                role: "Poeta brasileiro",
                works: [
                    "O Uraguai"
                ]
            },
            {
                author: "Bocage",
                role: "Poeta português",
                works: [
                    "Rimas",
                    "Sonetos"
                ]
            }
        ],

        social:
            "A imagem de uma vida simples no campo contrastava com sociedades marcadas por desigualdade, burocracia, exploração colonial e conflitos políticos. No Brasil, muitos poetas árcades pertenciam às elites letradas e estavam ligados à administração colonial, mas alguns se envolveram com o ambiente político que antecedeu a Inconfidência Mineira.",

        curiosityTitle: "O Arcadismo brasileiro não foi apenas pastoral",

        curiosity:
            "Embora a poesia árcade frequentemente idealize a natureza, obras como O Uraguai e Cartas Chilenas permitem perceber conflitos políticos, disputas coloniais e críticas ao poder."
    },


    {
        id: "romantismo",

        name: "Romantismo",

        period: "Portugal: aproximadamente 1825–1870 | Brasil: 1836–1881",

        category: "ROMANTISMO",

        place: "Portugal e Brasil, com forte desenvolvimento da imprensa e do romance.",

        genres: "Poesia lírica, romance, novela, teatro, crônica e prosa histórica.",

        history: [
            "O Romantismo europeu surgiu em um período de revoluções políticas, crescimento das ideias liberais e fortalecimento de identidades nacionais. A literatura passou a valorizar mais intensamente subjetividade, emoção, imaginação, natureza e história.",

            "Em Portugal, o movimento está ligado às transformações políticas provocadas pelas revoluções liberais, pela Guerra Civil e pela consolidação do constitucionalismo. Almeida Garrett e Alexandre Herculano foram figuras fundamentais na renovação literária.",

            "No Brasil, a Independência de 1822 criou a necessidade cultural de construir símbolos de identidade nacional. A literatura romântica participou desse processo, valorizando a natureza brasileira, o indígena e temas históricos. Nas décadas seguintes, o movimento também desenvolveu vertentes ultrarromânticas e sociais."
        ],

        portugal: {
            period: "Aproximadamente 1825–1870.",

            context:
                "Liberalismo, Revolução Liberal do Porto, Guerra Civil portuguesa e transformações do Estado constitucional.",

            authors:
                "Almeida Garrett; Alexandre Herculano; Camilo Castelo Branco; Júlio Dinis; Soares de Passos.",

            works:
                "Camões; Viagens na Minha Terra; Eurico, o Presbítero; Amor de Perdição; As Pupilas do Senhor Reitor."
        },

        brazil: {
            period: "1836–1881, em periodização tradicional.",

            context:
                "Brasil independente, construção da identidade nacional, Império, escravidão e conflitos sociais que se intensificariam ao longo do século XIX.",

            authors:
                "Gonçalves de Magalhães; Gonçalves Dias; Álvares de Azevedo; Castro Alves; José de Alencar; Maria Firmina dos Reis.",

            works:
                "Suspiros Poéticos e Saudades; Canção do Exílio; Lira dos Vinte Anos; O Navio Negreiro; Iracema; Úrsula."
        },

        characteristics: [
            "Subjetividade e sentimentalismo.",
            "Nacionalismo.",
            "Valorização da natureza.",
            "Idealização amorosa.",
            "Indianismo no Brasil.",
            "Medievalismo e historicismo em Portugal.",
            "Ultrarromantismo.",
            "Poesia social e abolicionista."
        ],

        authorsWorks: [
            {
                author: "José de Alencar",
                role: "Romancista brasileiro",
                works: [
                    "Iracema",
                    "O Guarani",
                    "Senhora"
                ]
            },
            {
                author: "Gonçalves Dias",
                role: "Poeta brasileiro",
                works: [
                    "Canção do Exílio",
                    "I-Juca-Pirama"
                ]
            },
            {
                author: "Castro Alves",
                role: "Poeta brasileiro",
                works: [
                    "O Navio Negreiro",
                    "Espumas Flutuantes"
                ]
            },
            {
                author: "Almeida Garrett",
                role: "Escritor português",
                works: [
                    "Camões",
                    "Viagens na Minha Terra",
                    "Frei Luís de Sousa"
                ]
            },
            {
                author: "Camilo Castelo Branco",
                role: "Romancista português",
                works: [
                    "Amor de Perdição",
                    "A Queda dum Anjo"
                ]
            },
            {
                author: "Maria Firmina dos Reis",
                role: "Romancista brasileira",
                works: [
                    "Úrsula"
                ]
            }
        ],

        social:
            "O Romantismo acompanhou a expansão do público leitor e da imprensa. No Brasil, o romance tornou-se importante instrumento de construção de imagens do país, ao mesmo tempo em que autores como Castro Alves trataram de temas políticos e da escravidão. A presença de Maria Firmina dos Reis também mostra que a história do Romantismo brasileiro é mais diversa do que uma narrativa centrada apenas nos autores tradicionalmente canonizados.",

        curiosityTitle: "O Romantismo brasileiro teve várias gerações",

        curiosity:
            "A periodização escolar costuma dividir a poesia romântica brasileira em três gerações: nacionalista/indianista, ultrarromântica e condoreira. Essa divisão ajuda a visualizar mudanças internas do movimento, embora não seja uma fronteira rígida."
    },


    {
        id: "realismo",

        name: "Realismo",

        period: "Portugal: a partir de 1865 | Brasil: 1881–1902, em periodização tradicional",

        category: "REALISMO",

        place: "Portugal e Brasil.",

        genres: "Romance, conto, poesia, crítica e crônica.",

        history: [
            "O Realismo surgiu como reação às idealizações românticas e em diálogo com mudanças científicas, sociais e políticas do século XIX. Industrialização, urbanização, expansão da imprensa e novas teorias sobre sociedade e comportamento modificaram o ambiente intelectual.",

            "Em Portugal, a Questão Coimbrã, iniciada em 1865, tornou-se um marco de ruptura entre jovens intelectuais e representantes de uma literatura considerada excessivamente tradicional. O Realismo português aproximou-se de ideias críticas e de observação social.",

            "No Brasil, a Abolição da Escravidão em 1888 e a Proclamação da República em 1889 ocorreram no mesmo período de transformação literária. Machado de Assis desenvolveu uma prosa marcada por ironia, análise psicológica e observação das relações sociais."
        ],

        portugal: {
            period: "A partir de 1865, com consolidação nas décadas seguintes.",

            context:
                "Questão Coimbrã, Geração de 70, crise da monarquia e debate sobre ciência, sociedade e modernização.",

            authors:
                "Eça de Queirós; Antero de Quental; Cesário Verde.",

            works:
                "O Crime do Padre Amaro; O Primo Basílio; Os Maias; Odes Modernas; O Livro de Cesário Verde."
        },

        brazil: {
            period: "1881–1902, em periodização tradicional.",

            context:
                "Crise do Império, Abolição em 1888 e implantação da República em 1889.",

            authors:
                "Machado de Assis; Raul Pompeia.",

            works:
                "Memórias Póstumas de Brás Cubas; Quincas Borba; Dom Casmurro; O Ateneu."
        },

        characteristics: [
            "Crítica às idealizações românticas.",
            "Observação da sociedade.",
            "Ironia.",
            "Análise psicológica.",
            "Personagens mais complexos.",
            "Crítica às relações de poder.",
            "Questionamento de valores sociais."
        ],

        authorsWorks: [
            {
                author: "Machado de Assis",
                role: "Principal nome do Realismo brasileiro",
                works: [
                    "Memórias Póstumas de Brás Cubas",
                    "Quincas Borba",
                    "Dom Casmurro"
                ]
            },
            {
                author: "Eça de Queirós",
                role: "Principal nome do Realismo português",
                works: [
                    "O Crime do Padre Amaro",
                    "O Primo Basílio",
                    "Os Maias"
                ]
            },
            {
                author: "Antero de Quental",
                role: "Poeta e intelectual português",
                works: [
                    "Odes Modernas",
                    "Sonetos"
                ]
            },
            {
                author: "Raul Pompeia",
                role: "Escritor brasileiro",
                works: [
                    "O Ateneu"
                ]
            }
        ],

        social:
            "O Realismo volta seu olhar para relações sociais concretas: casamento, dinheiro, prestígio, religião, política e desigualdade. Em vez de apresentar personagens idealizados, muitos autores expõem contradições entre aquilo que as pessoas dizem defender e a maneira como efetivamente agem.",

        curiosityTitle: "Machado transforma o leitor em parte do jogo",

        curiosity:
            "Em várias obras, Machado de Assis conversa diretamente com o leitor, interrompe a narrativa e questiona suas próprias afirmações. Esse procedimento cria uma relação particularmente irônica entre narrador, personagem e público."
    },


    {
        id: "naturalismo",

        name: "Naturalismo",

        period: "Portugal: últimas décadas do século XIX | Brasil: aproximadamente 1881–1902",

        category: "NATURALISMO",

        place: "Portugal e Brasil, em diálogo com o pensamento científico europeu.",

        genres: "Principalmente romance e conto.",

        history: [
            "O Naturalismo desenvolveu-se dentro do ambiente intelectual do século XIX, quando teorias científicas e sociais ganharam enorme influência. O positivismo, o determinismo e teorias sobre hereditariedade e ambiente foram incorporados — de maneiras variadas e nem sempre rigorosas — à literatura.",

            "A literatura naturalista procurou observar comportamentos humanos como fenômenos condicionados por fatores sociais, ambientais e biológicos. Essa perspectiva aproximou o romance de uma espécie de investigação social.",

            "É importante não confundir Naturalismo com ciência. Os escritores utilizaram ideias científicas de sua época como instrumentos literários. Muitas dessas teorias foram posteriormente questionadas ou abandonadas pela ciência."
        ],

        portugal: {
            period: "Últimas décadas do século XIX.",

            context:
                "O Naturalismo português desenvolveu-se no ambiente intelectual da Geração de 70 e do Realismo.",

            authors:
                "Eça de Queirós; Abel Botelho; Júlio Lourenço Pinto.",

            works:
                "O Crime do Padre Amaro; O Primo Basílio; A Corja; O Barão de Lavos."
        },

        brazil: {
            period: "Aproximadamente 1881–1902.",

            context:
                "Urbanização, transformações sociais do final do Império, Abolição e início da República.",

            authors:
                "Aluísio Azevedo; Adolfo Caminha; Inglês de Sousa.",

            works:
                "O Mulato; O Cortiço; Casa de Pensão; Bom-Crioulo; O Missionário."
        },

        characteristics: [
            "Determinismo.",
            "Influência do ambiente.",
            "Hereditariedade como elemento explicativo.",
            "Observação de conflitos sociais.",
            "Temas considerados tabus.",
            "Ênfase em ambientes coletivos.",
            "Linguagem mais descritiva."
        ],

        authorsWorks: [
            {
                author: "Aluísio Azevedo",
                role: "Principal nome do Naturalismo brasileiro",
                works: [
                    "O Mulato",
                    "Casa de Pensão",
                    "O Cortiço"
                ]
            },
            {
                author: "Adolfo Caminha",
                role: "Romancista brasileiro",
                works: [
                    "Bom-Crioulo",
                    "A Normalista"
                ]
            },
            {
                author: "Eça de Queirós",
                role: "Realista com importantes elementos naturalistas",
                works: [
                    "O Crime do Padre Amaro",
                    "O Primo Basílio"
                ]
            }
        ],

        social:
            "O Naturalismo frequentemente escolhe ambientes marcados por pobreza, exploração, violência e desigualdade. O Cortiço, por exemplo, transforma uma habitação coletiva em espaço central da narrativa, permitindo observar como ambiente, relações econômicas e conflitos sociais interferem na vida das personagens.",

        curiosityTitle: "O Cortiço transforma o espaço em personagem coletivo",

        curiosity:
            "No romance de Aluísio Azevedo, o cortiço não funciona apenas como cenário. A dinâmica coletiva da habitação é essencial para compreender as personagens e os conflitos narrados."
    },


    {
        id: "parnasianismo",

        name: "Parnasianismo",

        period: "Brasil: principalmente 1880s–1890s | Portugal: influência sem a mesma periodização escolar brasileira",

        category: "PARNASIANISMO",

        place: "Movimento de origem francesa, com forte presença na poesia brasileira.",

        genres: "Poesia lírica e poesia descritiva.",

        history: [
            "O Parnasianismo surgiu em reação a certas tendências românticas e valorizou o trabalho formal do poema. Em uma época de grande confiança na ciência, na técnica e na objetividade, parte da poesia passou a enfatizar precisão, forma e acabamento.",

            "Na França, o movimento esteve ligado ao grupo reunido em torno das coletâneas do Parnasse contemporain. No Brasil, a estética parnasiana ganhou enorme força e tornou-se uma das tendências dominantes da poesia da Primeira República.",

            "A busca pela forma perfeita não significa ausência completa de sentimentos. O que muda é a prioridade dada ao tratamento formal, à linguagem trabalhada e à construção cuidadosa do poema."
        ],

        portugal: {
            period: "Não possui, em Portugal, a mesma periodização escolar consolidada observada no Brasil.",

            context:
                "Alguns poetas portugueses receberam influências parnasianas, mas a historiografia portuguesa costuma organizar o fim do século XIX em torno do Realismo, Naturalismo, Simbolismo e outras tendências.",

            authors:
                "A influência parnasiana aparece de maneira pontual em diferentes autores.",

            works:
                "Não há uma lista portuguesa equivalente ao cânone parnasiano brasileiro."
        },

        brazil: {
            period: "Principalmente a partir da década de 1880 até a década de 1890, prolongando-se além desse período.",

            context:
                "Final do Império e Primeira República, expansão da imprensa e valorização da cultura letrada.",

            authors:
                "Olavo Bilac; Raimundo Correia; Alberto de Oliveira; Francisca Júlia.",

            works:
                "Poesias; Sinfonias; Meridionais; Via Láctea."
        },

        characteristics: [
            "Valorização da forma.",
            "Rigor métrico.",
            "Uso cuidadoso de rimas.",
            "Soneto.",
            "Descrição objetiva e visual.",
            "Referências à Antiguidade clássica.",
            "Busca de acabamento formal."
        ],

        authorsWorks: [
            {
                author: "Olavo Bilac",
                role: "Poeta brasileiro",
                works: [
                    "Poesias",
                    "Via Láctea",
                    "Profissão de Fé"
                ]
            },
            {
                author: "Raimundo Correia",
                role: "Poeta brasileiro",
                works: [
                    "Sinfonias",
                    "As Pombas"
                ]
            },
            {
                author: "Alberto de Oliveira",
                role: "Poeta brasileiro",
                works: [
                    "Canções Românticas",
                    "Meridionais"
                ]
            },
            {
                author: "Francisca Júlia",
                role: "Poeta brasileira",
                works: [
                    "Mármores",
                    "Esfinges"
                ]
            }
        ],

        social:
            "O Parnasianismo brasileiro desenvolveu-se em um ambiente literário no qual o domínio da norma culta, das formas fixas e da tradição clássica possuía grande prestígio. Ao mesmo tempo, a sociedade brasileira passava por mudanças políticas profundas que culminariam na Abolição e na República.",

        curiosityTitle: "O soneto virou uma espécie de laboratório formal",

        curiosity:
            "Os poetas parnasianos dedicavam grande atenção a métrica, rima, vocabulário e construção das imagens. O poema era tratado como uma peça que exigia trabalho técnico rigoroso."
    },


    {
        id: "simbolismo",

        name: "Simbolismo",

        period: "Portugal: a partir de 1890 | Brasil: 1893–1902, em periodização tradicional",

        category: "SIMBOLISMO",

        place: "Portugal e Brasil, em diálogo com tendências simbolistas europeias.",

        genres: "Poesia lírica e prosa poética.",

        history: [
            "O Simbolismo surgiu como reação às tendências excessivamente objetivas e materialistas do final do século XIX. Em vez de explicar o mundo de maneira direta, os simbolistas buscaram sugeri-lo por meio de símbolos, musicalidade, imagens e estados subjetivos.",

            "O período foi marcado por rápidas transformações sociais e científicas, mas também por uma sensação de crise de valores. O avanço da industrialização e da vida urbana convivia com interesse crescente pelo espiritual, pelo sonho e pelo inconsciente.",

            "Em Portugal, a publicação de Oaristos, de Eugénio de Castro, em 1890, é tradicionalmente considerada um marco. No Brasil, Missal e Broquéis, de Cruz e Sousa, publicados em 1893, são marcos fundamentais."
        ],

        portugal: {
            period: "A partir de 1890, aproximadamente.",

            context:
                "Crise cultural e política do final do século XIX e transformação da poesia portuguesa.",

            authors:
                "Eugénio de Castro; Camilo Pessanha; António Nobre.",

            works:
                "Oaristos; Clepsydra; Só."
        },

        brazil: {
            period: "1893–1902, em periodização tradicional.",

            context:
                "Primeira República e ambiente cultural posterior à Abolição e à queda da monarquia.",

            authors:
                "Cruz e Sousa; Alphonsus de Guimaraens.",

            works:
                "Missal; Broquéis; Kyriale; Setenário das Dores de Nossa Senhora."
        },

        characteristics: [
            "Musicalidade.",
            "Sugestão em vez de explicação direta.",
            "Símbolos.",
            "Sinestesia.",
            "Espiritualidade.",
            "Sonho e subjetividade.",
            "Imagens nebulosas e linguagem sugestiva."
        ],

        authorsWorks: [
            {
                author: "Cruz e Sousa",
                role: "Principal nome do Simbolismo brasileiro",
                works: [
                    "Missal",
                    "Broquéis",
                    "Últimos Sonetos"
                ]
            },
            {
                author: "Alphonsus de Guimaraens",
                role: "Poeta simbolista brasileiro",
                works: [
                    "Câmara Ardente",
                    "Dona Mística",
                    "Kyriale"
                ]
            },
            {
                author: "Camilo Pessanha",
                role: "Poeta português",
                works: [
                    "Clepsydra"
                ]
            },
            {
                author: "Eugénio de Castro",
                role: "Poeta português",
                works: [
                    "Oaristos",
                    "Horas"
                ]
            }
        ],

        social:
            "O Simbolismo não desaparece simplesmente diante do Modernismo. Muitos procedimentos simbolistas — musicalidade, subjetividade, liberdade de imagens e exploração de estados interiores — continuaram influenciando poetas posteriores.",

        curiosityTitle: "Cruz e Sousa ampliou as possibilidades da poesia brasileira",

        curiosity:
            "A poesia de Cruz e Sousa utiliza forte musicalidade, imagens sensoriais e símbolos para abordar temas espirituais, existenciais e também experiências de exclusão e preconceito."
    },


    {
        id: "pre-modernismo",

        name: "Pré-Modernismo",

        period: "Brasil: aproximadamente 1902–1922",

        category: "PERÍODO DE TRANSIÇÃO",

        place: "Principalmente Brasil.",

        genres: "Romance, conto, crônica, ensaio e poesia.",

        history: [
            "O Pré-Modernismo é uma classificação especialmente usada para a literatura brasileira das primeiras décadas do século XX. Não se trata de uma escola literária homogênea: os autores apresentam estilos muito diferentes.",

            "O período é marcado por profundas contradições da Primeira República. O país passava por urbanização e modernização em algumas regiões, enquanto grande parte da população enfrentava pobreza, exclusão e ausência de direitos. Conflitos como Canudos e o Contestado revelaram tensões sociais profundas.",

            "A literatura desse período aproximou-se de temas brasileiros concretos: sertão, subúrbios, racismo, pobreza, conflitos sociais, desigualdade regional e formação da identidade nacional. Por isso, costuma ser estudada como ponte entre tendências anteriores e o Modernismo."
        ],

        portugal: {
            period: "Não há um equivalente português consensual chamado Pré-Modernismo.",

            context:
                "Portugal desenvolvia outras correntes de renovação literária, incluindo o Simbolismo e, posteriormente, o Modernismo ligado à geração de Orpheu.",

            authors:
                "Não se aplica como escola portuguesa independente.",

            works:
                "A periodização portuguesa deve ser estudada por suas próprias correntes e acontecimentos."
        },

        brazil: {
            period: "Aproximadamente 1902–1922.",

            context:
                "Primeira República, urbanização, desigualdade social, conflitos rurais e crescimento das grandes cidades.",

            authors:
                "Euclides da Cunha; Lima Barreto; Monteiro Lobato; Graça Aranha; Augusto dos Anjos.",

            works:
                "Os Sertões; Triste Fim de Policarpo Quaresma; Urupês; Canaã; Eu."
        },

        characteristics: [
            "Crítica social.",
            "Interesse pelo Brasil real.",
            "Regionalismo.",
            "Denúncia de desigualdades.",
            "Linguagem ainda ligada a estilos anteriores.",
            "Temas urbanos e rurais.",
            "Transição para a ruptura modernista."
        ],

        authorsWorks: [
            {
                author: "Euclides da Cunha",
                role: "Escritor e jornalista",
                works: [
                    "Os Sertões"
                ]
            },
            {
                author: "Lima Barreto",
                role: "Romancista e cronista",
                works: [
                    "Triste Fim de Policarpo Quaresma",
                    "Clara dos Anjos"
                ]
            },
            {
                author: "Monteiro Lobato",
                role: "Escritor e editor",
                works: [
                    "Urupês",
                    "Cidades Mortas"
                ]
            },
            {
                author: "Augusto dos Anjos",
                role: "Poeta",
                works: [
                    "Eu"
                ]
            }
        ],

        social:
            "O Pré-Modernismo ajuda a perceber que a modernização brasileira não aconteceu de maneira uniforme. Enquanto cidades como São Paulo cresciam rapidamente, conflitos sociais, pobreza rural e exclusão permaneciam presentes. Essa contradição tornou-se matéria literária.",

        curiosityTitle: "Os Sertões mistura literatura, história e ciência",

        curiosity:
            "A obra de Euclides da Cunha combina relato jornalístico, análise histórica, geografia, sociologia e linguagem literária para interpretar a Guerra de Canudos."
    },


    {
        id: "modernismo",

        name: "Modernismo",

        period: "Brasil: 1922 em diante | Portugal: a partir de 1915",

        category: "MODERNISMO",

        place: "Portugal e Brasil, com movimentos próprios e diferentes cronologias.",

        genres: "Poesia, romance, conto, crônica, teatro, ensaio e manifesto.",

        history: [
            "O Modernismo não foi um único estilo internacional, mas um conjunto de movimentos de ruptura e renovação. As vanguardas europeias — como futurismo, cubismo, expressionismo e dadaísmo — questionaram formas artísticas tradicionais e influenciaram escritores de língua portuguesa.",

            "Em Portugal, a revista Orpheu, publicada em 1915, tornou-se marco do Modernismo português. Fernando Pessoa, Mário de Sá-Carneiro e Almada Negreiros estão entre os nomes associados a esse momento.",

            "No Brasil, a Semana de Arte Moderna ocorreu em São Paulo entre 11 e 18 de fevereiro de 1922. O movimento buscou renovar a linguagem artística, questionar modelos acadêmicos e repensar a identidade cultural brasileira. Depois da ruptura inicial, o Modernismo brasileiro desenvolveu fases com características distintas."
        ],

        portugal: {
            period: "A partir de 1915, com a revista Orpheu como marco fundamental.",

            context:
                "Primeira República portuguesa, crise política e cultural, impacto da Primeira Guerra Mundial e circulação das vanguardas europeias.",

            authors:
                "Fernando Pessoa; Mário de Sá-Carneiro; Almada Negreiros; José Régio.",

            works:
                "Orpheu; Mensagem; Livro do Desassossego; A Confissão de Lúcio; Nome de Guerra."
        },

        brazil: {
            period: "A partir de 1922; periodização tradicional costuma dividir o movimento em fases.",

            context:
                "Primeira República, urbanização, industrialização, mudanças sociais e culturais e busca de novas formas de representar o Brasil.",

            authors:
                "Mário de Andrade; Oswald de Andrade; Manuel Bandeira; Carlos Drummond de Andrade; Graciliano Ramos; Jorge Amado; Cecília Meireles.",

            works:
                "Pauliceia Desvairada; Macunaíma; Memórias Sentimentais de João Miramar; Libertinagem; Alguma Poesia; Vidas Secas; Capitães da Areia."
        },

        characteristics: [
            "Ruptura com modelos tradicionais.",
            "Liberdade formal.",
            "Verso livre.",
            "Experimentação linguística.",
            "Ironia e humor.",
            "Valorização de temas brasileiros.",
            "Regionalismo.",
            "Crítica social.",
            "Pluralidade de estilos."
        ],

        authorsWorks: [
            {
                author: "Mário de Andrade",
                role: "Poeta, romancista e pesquisador brasileiro",
                works: [
                    "Pauliceia Desvairada",
                    "Macunaíma"
                ]
            },
            {
                author: "Oswald de Andrade",
                role: "Poeta e escritor brasileiro",
                works: [
                    "Memórias Sentimentais de João Miramar",
                    "Manifesto da Poesia Pau-Brasil",
                    "Manifesto Antropófago"
                ]
            },
            {
                author: "Fernando Pessoa",
                role: "Poeta português",
                works: [
                    "Mensagem",
                    "Livro do Desassossego",
                    "Poesia de diferentes heterônimos"
                ]
            },
            {
                author: "Carlos Drummond de Andrade",
                role: "Poeta brasileiro",
                works: [
                    "Alguma Poesia",
                    "Sentimento do Mundo",
                    "A Rosa do Povo"
                ]
            },
            {
                author: "Graciliano Ramos",
                role: "Romancista brasileiro",
                works: [
                    "Vidas Secas",
                    "São Bernardo",
                    "Angústia"
                ]
            }
        ],

        social:
            "O Modernismo brasileiro amadureceu ao longo do século XX. A primeira fase enfatizou ruptura e experimentação; a segunda aprofundou questões sociais, regionais e psicológicas; e a poesia de autores posteriores ampliou as possibilidades abertas pelo movimento. Em Portugal, a multiplicidade de autores e projetos estéticos também impede reduzir o Modernismo a uma única fórmula.",

        curiosityTitle: "A Semana de 1922 não criou sozinha o Modernismo",

        curiosity:
            "Ela se tornou um marco simbólico fundamental no Brasil, mas a renovação artística já vinha sendo preparada por experiências anteriores. A própria Câmara dos Deputados registra que existem críticas à ideia de tratar o evento como único fundador da modernidade cultural brasileira."
    },


    {
        id: "contemporanea",

        name: "Literatura Contemporânea",

        period: "Principalmente da segunda metade do século XX ao século XXI",

        category: "LITERATURA CONTEMPORÂNEA",

        place: "Portugal, Brasil e outros países e comunidades de língua portuguesa.",

        genres: "Romance, conto, poesia, crônica, teatro, autoficção, literatura juvenil e formas híbridas.",

        history: [
            "A literatura contemporânea não corresponde a uma única escola literária. É justamente sua diversidade que a caracteriza. Depois das grandes vanguardas do século XX, diferentes autores passaram a combinar estilos, gêneros e tradições sem necessariamente pertencer a um movimento único.",

            "No Brasil, a literatura posterior à Segunda Guerra Mundial dialogou com urbanização acelerada, ditadura militar, redemocratização, desigualdades sociais, transformações culturais e novas identidades. A poesia concreta, por exemplo, explorou relações entre palavra, espaço e visualidade.",

            "Em Portugal, a literatura da segunda metade do século XX foi profundamente marcada pela experiência do Estado Novo, pela Revolução dos Cravos de 1974, pela descolonização e pela integração europeia. Nos países africanos de língua portuguesa, independências nacionais e experiências pós-coloniais também produziram literaturas próprias e muito relevantes."
        ],

        portugal: {
            period: "Da segunda metade do século XX ao presente.",

            context:
                "Estado Novo, Revolução dos Cravos de 1974, descolonização e transformações sociais posteriores.",

            authors:
                "José Saramago; Lídia Jorge; António Lobo Antunes; Sophia de Mello Breyner Andresen.",

            works:
                "Memorial do Convento; Ensaio sobre a Cegueira; A Costa dos Murmúrios; Os Cus de Judas; O Cavaleiro da Dinamarca."
        },

        brazil: {
            period: "Da segunda metade do século XX ao presente.",

            context:
                "Ditadura militar, redemocratização, urbanização, desigualdades sociais, transformações culturais e novas vozes literárias.",

            authors:
                "Clarice Lispector; João Guimarães Rosa; João Cabral de Melo Neto; Conceição Evaristo; Milton Hatoum; Itamar Vieira Junior.",

            works:
                "A Hora da Estrela; Grande Sertão: Veredas; Morte e Vida Severina; Ponciá Vicêncio; Dois Irmãos; Torto Arado."
        },

        characteristics: [
            "Pluralidade estética.",
            "Mistura de gêneros.",
            "Fragmentação narrativa.",
            "Memória e identidade.",
            "Questões urbanas e sociais.",
            "Diversidade de vozes e experiências.",
            "Releitura crítica do passado.",
            "Diálogo com cinema, música, internet e outras artes."
        ],

        authorsWorks: [
            {
                author: "José Saramago",
                role: "Romancista português",
                works: [
                    "Memorial do Convento",
                    "Ensaio sobre a Cegueira",
                    "O Evangelho Segundo Jesus Cristo"
                ]
            },
            {
                author: "Clarice Lispector",
                role: "Escritora brasileira",
                works: [
                    "A Hora da Estrela",
                    "Perto do Coração Selvagem",
                    "Laços de Família"
                ]
            },
            {
                author: "Conceição Evaristo",
                role: "Escritora brasileira",
                works: [
                    "Ponciá Vicêncio",
                    "Olhos d'Água",
                    "Becos da Memória"
                ]
            },
            {
                author: "Mia Couto",
                role: "Escritor moçambicano",
                works: [
                    "Terra Sonâmbula",
                    "O Outro Pé da Sereia"
                ]
            },
            {
                author: "Itamar Vieira Junior",
                role: "Escritor brasileiro",
                works: [
                    "Torto Arado"
                ]
            }
        ],

        social:
            "A literatura contemporânea amplia o número de vozes que participam da produção literária e revisita temas como raça, gênero, memória, colonialismo, migração, violência, território, desigualdade e identidade. Nos países africanos de língua portuguesa, a literatura também se relaciona diretamente com experiências coloniais, independências e construção de identidades nacionais.",

        curiosityTitle: "Contemporâneo não significa uma nova escola",

        curiosity:
            "O termo descreve principalmente uma condição histórica. Não existe uma única estética contemporânea: diferentes tendências convivem ao mesmo tempo."
    }

];


// =====================================================
// ELEMENTOS DA INTERFACE
// =====================================================

const timeline = document.getElementById("timeline");

const schoolPlaceholder =
    document.getElementById("school-placeholder");

const schoolDetail =
    document.getElementById("school-detail");

const backButton =
    document.getElementById("back-button");

const previousButton =
    document.getElementById("previous-button");

const nextButton =
    document.getElementById("next-button");


// Elementos do conteúdo
const schoolCategory =
    document.getElementById("school-category");

const schoolName =
    document.getElementById("school-name");

const schoolPeriod =
    document.getElementById("school-period");

const schoolPlace =
    document.getElementById("school-place");

const schoolGenres =
    document.getElementById("school-genres");

const schoolHistory =
    document.getElementById("school-history");

const schoolCharacteristics =
    document.getElementById("school-characteristics");

const authorsWorks =
    document.getElementById("authors-works");

const schoolSocial =
    document.getElementById("school-social");

const schoolCuriosityTitle =
    document.getElementById("school-curiosity-title");

const schoolCuriosity =
    document.getElementById("school-curiosity");

const schoolIndex =
    document.getElementById("school-index");


// Portugal
const portugalSection =
    document.getElementById("portugal-section");

const portugalPeriod =
    document.getElementById("portugal-period");

const portugalContext =
    document.getElementById("portugal-context");

const portugalAuthors =
    document.getElementById("portugal-authors");

const portugalWorks =
    document.getElementById("portugal-works");


// Brasil
const brazilSection =
    document.getElementById("brazil-section");

const brazilPeriod =
    document.getElementById("brazil-period");

const brazilContext =
    document.getElementById("brazil-context");

const brazilAuthors =
    document.getElementById("brazil-authors");

const brazilWorks =
    document.getElementById("brazil-works");


// =====================================================
// ESCOLA ATUAL
// =====================================================

let currentIndex = 0;


// =====================================================
// CRIAÇÃO DA LINHA DO TEMPO
// =====================================================

function createTimeline() {

    timeline.innerHTML = "";

    schools.forEach((school, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "timeline-item";

        button.dataset.index = index;

        button.innerHTML = `
            <span class="timeline-dot"></span>

            <span class="timeline-period">
                ${getShortPeriod(school.period)}
            </span>

            <span class="timeline-name">
                ${school.name}
            </span>

            <span class="timeline-place">
                ${getPlaceLabel(school)}
            </span>
        `;

        button.addEventListener("click", () => {
            showSchool(index);
        });

        timeline.appendChild(button);
    });
}


// =====================================================
// PEQUENAS FUNÇÕES DE APOIO
// =====================================================

function getShortPeriod(period) {

    // Mantém o texto completo disponível na página,
    // mas deixa a timeline visualmente mais limpa.

    if (period.length <= 28) {
        return period;
    }

    return period
        .replace("aproximadamente ", "")
        .replace("em periodização tradicional", "")
        .trim();
}


function getPlaceLabel(school) {

    if (school.brazil && school.portugal) {
        return "PT + BR";
    }

    if (school.brazil) {
        return "Brasil";
    }

    return "Portugal";
}


function paragraphsToHTML(paragraphs) {

    return paragraphs
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");
}


function getCountryAuthors(country) {

    if (!country) {
        return "";
    }

    return country.authors;
}


// =====================================================
// MOSTRAR UMA ESCOLA
// =====================================================

function showSchool(index, shouldScroll = true) {

    currentIndex = index;

    const school = schools[index];

    if (!school) {
        return;
    }


    // -----------------------------------------
    // Conteúdo principal
    // -----------------------------------------

    schoolCategory.textContent =
        school.category;

    schoolName.textContent =
        school.name;

    schoolPeriod.textContent =
        school.period;

    schoolPlace.textContent =
        school.place;

    schoolGenres.textContent =
        school.genres;

    schoolIndex.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(schools.length).padStart(2, "0")}`;


    // -----------------------------------------
    // Contexto histórico
    // -----------------------------------------

    schoolHistory.innerHTML =
        paragraphsToHTML(school.history);


    // -----------------------------------------
    // Portugal
    // -----------------------------------------

    if (school.portugal) {

        portugalSection.classList.remove("hidden");

        portugalPeriod.textContent =
            school.portugal.period;

        portugalContext.textContent =
            school.portugal.context;

        portugalAuthors.textContent =
            school.portugal.authors;

        portugalWorks.textContent =
            school.portugal.works;

    } else {

        portugalSection.classList.add("hidden");
    }


    // -----------------------------------------
    // Brasil
    // -----------------------------------------

    if (school.brazil) {

        brazilSection.classList.remove("hidden");

        brazilPeriod.textContent =
            school.brazil.period;

        brazilContext.textContent =
            school.brazil.context;

        brazilAuthors.textContent =
            school.brazil.authors;

        brazilWorks.textContent =
            school.brazil.works;

    } else {

        brazilSection.classList.add("hidden");
    }


    // -----------------------------------------
    // Características
    // -----------------------------------------

    schoolCharacteristics.innerHTML = "";

    school.characteristics.forEach(characteristic => {

        const item =
            document.createElement("div");

        item.className =
            "characteristic";

        item.textContent =
            characteristic;

        schoolCharacteristics.appendChild(item);
    });


    // -----------------------------------------
    // Autores e obras
    // -----------------------------------------

    authorsWorks.innerHTML = "";

    school.authorsWorks.forEach(person => {

        const card =
            document.createElement("div");

        card.className =
            "author-card";

        const worksList =
            person.works
                .map(work => `<li>${work}</li>`)
                .join("");

        card.innerHTML = `
            <h4>${person.author}</h4>

            <p class="role">
                ${person.role}
            </p>

            <ul>
                ${worksList}
            </ul>
        `;

        authorsWorks.appendChild(card);
    });


    // -----------------------------------------
    // Sociedade
    // -----------------------------------------

    schoolSocial.innerHTML =
        `<p>${school.social}</p>`;


    // -----------------------------------------
    // Curiosidade
    // -----------------------------------------

    schoolCuriosityTitle.textContent =
        school.curiosityTitle;

    schoolCuriosity.textContent =
        school.curiosity;


    // -----------------------------------------
    // Estado dos botões
    // -----------------------------------------

    previousButton.disabled =
        currentIndex === 0;

    nextButton.disabled =
        currentIndex === schools.length - 1;


    previousButton.style.opacity =
        currentIndex === 0 ? "0.45" : "1";

    nextButton.style.opacity =
        currentIndex === schools.length - 1 ? "0.45" : "1";


    // -----------------------------------------
    // Estado visual da timeline
    // -----------------------------------------

    document
        .querySelectorAll(".timeline-item")
        .forEach((item, itemIndex) => {

            item.classList.toggle(
                "active",
                itemIndex === currentIndex
            );
        });


    // -----------------------------------------
    // Mostrar conteúdo
    // -----------------------------------------

    schoolPlaceholder.classList.add("hidden");

    schoolDetail.classList.remove("hidden");


    // -----------------------------------------
    // Rolar até a seção
    // -----------------------------------------

    if (shouldScroll) {

        schoolDetail.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// =====================================================
// VOLTAR PARA A LINHA DO TEMPO
// =====================================================

function goBackToTimeline() {

    schoolDetail.classList.add("hidden");

    schoolPlaceholder.classList.remove("hidden");

    document
        .querySelectorAll(".timeline-item")
        .forEach(item => {
            item.classList.remove("active");
        });


    document
        .getElementById("linha-do-tempo")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


// =====================================================
// ESCOLA ANTERIOR
// =====================================================

function showPrevious() {

    if (currentIndex > 0) {

        showSchool(
            currentIndex - 1
        );
    }
}


// =====================================================
// PRÓXIMA ESCOLA
// =====================================================

function showNext() {

    if (currentIndex < schools.length - 1) {

        showSchool(
            currentIndex + 1
        );
    }
}


// =====================================================
// EVENTOS
// =====================================================

backButton.addEventListener(
    "click",
    goBackToTimeline
);


previousButton.addEventListener(
    "click",
    showPrevious
);


nextButton.addEventListener(
    "click",
    showNext
);


// =====================================================
// TECLADO
// =====================================================

document.addEventListener(
    "keydown",
    event => {

        // Só utiliza as setas quando uma escola
        // está aberta.

        if (schoolDetail.classList.contains("hidden")) {
            return;
        }


        if (event.key === "ArrowLeft") {
            showPrevious();
        }


        if (event.key === "ArrowRight") {
            showNext();
        }


        if (event.key === "Escape") {
            goBackToTimeline();
        }
    }
);


// =====================================================
// INICIALIZAÇÃO
// =====================================================

createTimeline();


// A página começa na introdução.
// Nenhuma escola é aberta automaticamente.
