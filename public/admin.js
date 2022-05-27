
// Your Code Here
const main = async() => {
    const response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json();
    books.forEach(renderBook);
}

const renderBook = (book) =>{
    let root = document.querySelector('root');
    //create a new li element to add new title
    let li = document.createElement('li');
    li.textContent = book.title;
    //update quality input
    let quatityInput = document.createElement('input')
    quantityInput.value = book.quantity;
    // update a submit button
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save';
 
    saveButton.addEventListener('click' ,() =>{
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: book.id,
                        quantity: quantityInput.value
        })

    })
    li.append(quantityInput, saveButton)

    root.append(li)
})

main();