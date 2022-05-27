
// Your Code Here
const main= async() => {
    const response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json();
    books.forEach(renderBook);
}

const renderBook=(book) =>{

} 
