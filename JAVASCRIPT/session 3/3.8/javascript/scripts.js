

var books = {};
var authors = {};
var id = 1;
var id1 = 1;
function addBook(Name,Author_id,Year_read,Rating){

        books[id] = {
        "id":id,
        "name":Name,
        "year":Year_read,
        "rating":Rating,
        "author":Author_id
        }   
        id+=1;
    
}

function addAuthor(name){
    authors[id1] = {
        "name" : name,
        "id":id1
    }
    id1+=1;
}

function editBook(Name,Author_id,Year_read,Rating,Id){
    let bookEdited  = false;
    for ( let key of Object.keys(books)){
        if(key == Id){
            books[key].name = Name;
            books[key].author = Author_id;
            books[key].year = Year_read;
            books[key].rating  = Rating;
            bookEdited = true;
            break;
        }
        // console.log(books[key]);
    }
    if(bookEdited == false)
    console.log("Book not found!");
    else
    console.log("Book edited successfully");

}


function editAuthor(name,Id){
    let authorEdited = false;
    for( key of Object.keys(authors))
    {
        if(key == Id){
            authors.name = name;
            authorEdited = true;
            break;
        }
    }
    if(authorEdited == false)
    console.log("author not found with given ID");
    else
    console.log("Author edited Successfully");
}

function booksWithRating(rating)
{
    let bookFound = false;
    console.log("Books with higher rating ");
    for ( let key of Object.keys(books)){
        if(books[key].rating >= rating){
            console.log(books[key].rating);
            bookFound = true;
        }
    }
    if(bookFound == false)
    console.log(" Not found");
}


function listAllBooks(){

    for ( let key of Object.keys(authors)){
        for ( let bookKey of Object.keys(books)){
                if(key == bookKey){
                    console.log(books[bookKey].name);
                }
        }
    }
}

while(true){

    let choice = window.prompt("choose option -\n1)Add Book\n2)Edit Book\n3)Add Author\n4)Edit Author\n5. List all books with a rating higher than the requested rating.\n6.List of books from each author.\n7)Exit");
    choice = Number(choice);
    let book_name,authorID,yearRead,rating,author_name;
    if(choice == 7)
        break;
    else
    switch(choice){

        case 1:
             book_name = window.prompt("Enter book name");
             authorID = window.prompt("Enter author ID");
             yearRead = window.prompt("Enter year read");
             rating = window.prompt("Enter rating");
            addBook(book_name,authorID,yearRead,rating);
            console.log("book added successfully!");
            break;
        case 2:
            //Edit books
            book_name = window.prompt("Enter book name");
            authorID = window.prompt("Enter author ID");
            yearRead = window.prompt("Enter year read");
            rating = window.prompt("Enter rating");
            let id_book = Number(window.prompt("Enter Book ID"));
            editBook(book_name,authorID,yearRead,rating,id_book);
            break;
        case 3:
            author_name= window.prompt("Enter author name");
            addAuthor(author_name);
            break;
        case 4:
            //Edit authors
            let id_author = Number(window.prompt("Enter author ID"));
            author_name = window.prompt("Enter author name");
            editAuthor(author_name,id_author);
            break;
        case 5:
            //books with rating
            let book_rating = Number(window.prompt("Enter rating"));
            booksWithRating(book_rating);
            break;
        case 6:
            listAllBooks();
            break;
    
    }
}

