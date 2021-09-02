
//error 
document.getElementById('error-message').style.display = 'none'

document.getElementById('total-search').style.display = 'none' ////total search result none display

//button clicked function
const searchBook = () => {
    const inputField = document.getElementById('search-field');

    const inputFieldText = inputField.value;

    // console.log(inputFieldText)
    inputField.value = '';

    document.getElementById('error-message').style.display = 'block' //error

    document.getElementById('total-search').style.display = 'none' //total search result none display

    //data load fetch
    const url = `https://openlibrary.org/search.json?q=${inputFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoad(data.docs))
        .catch(error => displayError(error)) //catch

}
//error function
const displayError = error => {
    console.log(error)
    document.getElementById('error-message').style.display = 'block'
}


//display show function
const displayLoad = books => {
    console.log(books)
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = ''; //new data load

    //for each 
    books.forEach(book => {
        console.log(books.length)


        document.getElementById('error-message').style.display = 'none'//error
        document.getElementById('total-search').style.display = 'block'////total search result block display


        const totalSearchResult = document.getElementById('total-search');
        totalSearchResult.innerText = books.length;  //total search result

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `     
    <div class="card h-100 shadow rounded-2 border-secondary "> 
            <img 
            style="width: 100%;height: 400px; 
            class="figure-img img-fluid" 
            src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="...">
             <div class="card-body">
                 <h5 class='text-waring'> ${book.title}</h5>
                <p class="card-title fs-6"">Author Name: ${book.author_name}</p>
                <h6 class="card-title">Publisher: ${book.publisher}</h6>
                <p class="card-text">First publish: ${book.first_publish_year}</p>
            
            </div>
    </div>

       
    `;
        searchResult.appendChild(div);

    })

}

