import {produce} from 'immer'

let book = {title: "Harry Potter"}

function publish(book) { 
    return produce(book, draftBook => {
        draftBook.isPublished = true
    })
}

const newbook = publish(book)

console.log(book)

console.log(newbook)

