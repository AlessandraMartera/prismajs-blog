const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();


// find del singolo post tramite slug
prisma.post
    .delete({
        where: {
            slug: "ricette-italiane"
        }
    })
    .then( post => {
        console.log("il post eliminato:", post)
    } )
    .catch( error => console.error(error))
