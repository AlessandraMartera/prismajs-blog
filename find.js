const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();


// find del singolo post tramite slug
prisma.post
    .findUnique({
        where: {
            slug: "ricette-italiane"
        }
    })
    .then( post => {
        console.log("il post ricercato è:", post)
    } )
    .catch( error => console.error(error))

// find di tutti i post
prisma.post
    .findMany()
    .then( post => {
        console.log("tutti i post sono:", post)
    } )
    .catch( error => console.error(error))
