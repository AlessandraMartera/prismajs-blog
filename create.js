const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

prisma.post
    .create({
        data:{
        title: "Questo è il mio primo post",
        slug: "firstPost", 
        image: "miopost.png", 
        content: "Questo è il mio primo post"
        }
    })
    .then( post => {
        console.log("new post:", post)
    } )
    .catch( error => console.error(error))