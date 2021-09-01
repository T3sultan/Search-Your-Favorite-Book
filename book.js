
const searchBook=()=>{
    const inputField=document.getElementById('search-field');
    // console.log(inputField)
    const inputFieldText=inputField.value ;
    // console.log(inputFieldText)
    inputField.value='';

    // fetch api
    const url=`http://openlibrary.org/search.json?q=${inputFieldText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLoad(data.docs));  
}

//display show function
const displayLoad=(books)=>{
    // console.log(books)
   books.forEach(book=>{
       console.log(book.title)
   })
}