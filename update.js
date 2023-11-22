const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();


// find del singolo post tramite slug
prisma.post
    .update({
        where: {
            id: 1
        },
        data: {
            published: true,
        },
    })
    .then( post => {
        console.log("il post modificato:", post)
    } )
    .catch( error => console.error(error))
