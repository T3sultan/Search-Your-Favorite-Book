
//error 
document.getElementById('error-message').style.display = 'none'

//button clicked function
const searchBook = () => {
    const inputField = document.getElementById('search-field');
    // console.log(inputField)
    const inputFieldText = inputField.value;
    // console.log(inputFieldText)
    inputField.value = '';
    document.getElementById('error-message').style.display = 'block'



    // fetch api
    const url = `https://openlibrary.org/search.json?q=${inputFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoad(data.docs))
        .catch(error => displayError(error))
}
//error function
const displayError = error => {
    //console.log(error)
    document.getElementById('error-message').style.display = 'none'
}


//display show function
const displayLoad = (books) => {
    console.log(books)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // let countBooks=0;
    books.forEach(book => {
        //    console.log(book.title)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `     
    <div class="card h-100 shadow rounded-2 border-secondary "> 
            <img 
            style="width: 100%;height: 400px; 
            class="figure-img img-fluid" 
            src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="...">
             <div class="card-body">
                 <h4 class='text-waring'><span>Book Name:</span> ${book.title}</h4>
                <h6 class="card-title">Author Name: ${book.author_name[0]}</h6>
                <h6 class="card-title">Publisher: ${book.publisher}</h6>
                <p class="card-text">First publish: ${book.first_publish_year}</p>
            
            </div>
    </div>

       
    `;
        // countBooks=countBooks+books[book];


        searchResult.appendChild(div)


    })
    //    console.log(countBooks)
}

