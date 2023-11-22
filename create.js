const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const postsList = [
    {
      title: "Viaggio nella natura",
      slug: "viaggio-natura-selvaggia",
      image: "https://example.com/immagine1.jpg",
      content: "Durante il mio ultimo viaggio, ho esplorato la natura selvaggia e ho scoperto luoghi incredibili..."
    },
    {
      title: "Ricette italiane",
      slug: "ricette-italiane",
      image: "https://example.com/immagine2.jpg",
      content: "Oggi condividerò alcune delle migliori ricette della cucina italiana che ho imparato nel tempo..."
    },
    {
      title: "Escursione",
      slug: "escursione",
      content: "L'escursione in montagna è stata un'esperienza avvincente, con paesaggi mozzafiato e sfide emozionanti..."
    },
    {
      title: "Arte urbana",
      slug: "arte-urbana",
      image: "https://example.com/immagine3.jpg",
      content: "Ho esplorato la scena dell'arte urbana in diverse città, ammirando i graffiti e le espressioni artistiche delle strade..."
    },
    {
      title: "Riflessioni quotidiane",
      slug: "riflessioni-quotidiane",
      content: "Condivido alcune riflessioni sulla vita quotidiana, cercando di trovare significato nelle piccole cose che spesso trascuriamo..."
    },
  ];

prisma.post
    .createMany({
    data: postsList,
    })
    .then( post => {
        console.log("new post:", post)
    } )
    .catch( error => console.error(error))