async function asyncBooks() {
    try {
        const response = await fetch('BooksCatalog.json');
        const booksCatalog = await response?.json();

        const container = document.getElementById("test");

        let tableString = '<table><tr><th>id</th>'
        tableString += '<th>author</th>'
        tableString += '<th>title</th>'
        tableString += '<th>genre</th>'
        tableString += '<th>price</th>'
        tableString += '<th>publish_date</th>'
        tableString += '<th>description</th>'

        for (let i = 0; i < booksCatalog.catalog.books.length; i++) {
            tableString += '<tr>';
            tableString += '<td>' + booksCatalog.catalog.books[i].id + '</td>';
            tableString += '<td>' + booksCatalog.catalog.books[i].author + '</td>';
            tableString += '<td>' + booksCatalog.catalog.books[i].title + '</td>';
            tableString += '<td>' + booksCatalog.catalog.books[i].genre + '</td>';
            tableString += '<td>' + booksCatalog.catalog.books[i].price + '</td>';
            tableString += '<td>' + booksCatalog.catalog.books[i].publish_date + '</td>';
            tableString += '<td>' + booksCatalog.catalog.books[i].description + '</td>';
            tableString += '</tr>';
        }

        tableString += '</table>';
        container.innerHTML = tableString;
    } catch(error) {
        console.error("Download error: " + error.message);
    }
}