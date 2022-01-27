const yargs = require("yargs")
const books = require("./books")

const argv = yargs.argv

const command = argv._[0]
// Add new note
if(command==="add"){
    const title = argv._[1]
    const published = argv._[2]
    if(title && published){    
        newNote = {title:title, published:published}
        books.addBook(newNote)
    }
    else{
        console.log("Please provide a title and a published date")
    }
}

if(command=='read'){
    const title = argv._[1]
    if(title){
        books.readBook(title)
    }
    else{
        console.log("Please provide a book title")
    }
}

if(command=='list'){
    books.listBooks()
}

if(command=='remove'){
    const title = argv._[1]
    if(title){
        books.removeBook(title)
    }
    else{
        console.log("Please provide a title")
    }
}