const fs = require("fs")

const addBook = (newNote)=>{
    books = loadBooks()
    const duplicateNote = books.find((note)=>{
        return note.title==newNote.title
    })
    if(!duplicateNote){
        books.push(newNote)
        saveBooks(books)
        console.log("Book added successfully")
    }
    else{
        console.log("Cannot save duplicate Book title")
    }
}

const readBook = (title)=>{
    books = loadNotes()
    const res = notes.find((note)=>{
        if(title==note.title){
            return note
        }
    })
    if(res)
        console.log(res)
    else
        console.log("Book does not exists")
}

const listBooks = ()=>{
    books = loadBooks()
    if(books!=[]){
        console.log("Your Books:")
        books.forEach((book)=>{
            console.log("Title: "+book.title+", ", "published on: "+book.published)
        })
    }
    else{
        console.log("You have no books")
    }
}

const removeBook = (title)=>{
    books = loadBooks()
    const newBooks = notes.filter((note)=>{
        if(note.title!=title)
            return note
    })
    if(newBooks.length==books.length)
        console.log("No Book deleted")
    else{
        console.log("Book removed")
        saveNotes(newBooks)
    }
}

const saveBooks = (books)=>{
    fs.writeFileSync("books.json",JSON.stringify(books))
}

const loadBooks = ()=>{
    try{
        const dataBuffer = fs.readFileSync('books.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }   
}

module.exports = {addBook, readBook, listBooks, removeBook}