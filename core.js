var books = false;
var cds = false;
function onload() {
    var checkbox1 = document.getElementById("book-check");
    var checkbox2 = document.getElementById("cd-check");

    checkbox1.addEventListener("change", function () {
        if (checkbox1.checked) {
            books = true;
            cds = false;
            repData();
        } else {
            hideBooks();
        }
    });

    checkbox2.addEventListener("change", function () {
        if (checkbox2.checked) {
            cds = true;
            books = false;
            repData();
        } else {
            hideCDs();
        }
    });
}

async function repData() {
    try {

        const response = await fetch('BooksCatalog.json');
        const booksCatalog = await response?.json();

        const response2 = await fetch('CD.json');
        const CDCatalog = await response2?.json();

        const container = document.getElementById("test");
        const container2 = document.getElementById("test2");

        if (books) {
            let tableString = '<table><tr>';
            tableString += '<th>author</th>';
            tableString += '<th>title</th>';
            tableString += '<th>genre</th>';
            tableString += '<th>price</th>';
            tableString += '<th>publish_date</th>';
            tableString += '<th>description</th>';

            for (let i = 0; i < booksCatalog.catalog.books.length; i++) {
                tableString += '<tr>';
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

        } else if (cds) {
            let tableString2 = '<table><tr><th>title</th>';
            tableString2 += '<th>artist</th>';
            tableString2 += '<th>country</th>';
            tableString2 += '<th>company</th>';
            tableString2 += '<th>price</th>';
            tableString2 += '<th>year</th>';

            for (let i = 0; i < CDCatalog.CD.length; i++) {
                tableString2 += '<tr>';
                tableString2 += '<td>' + CDCatalog.CD[i].TITLE + '</td>';
                tableString2 += '<td>' + CDCatalog.CD[i].ARTIST + '</td>';
                tableString2 += '<td>' + CDCatalog.CD[i].COUNTRY + '</td>';
                tableString2 += '<td>' + CDCatalog.CD[i].COMPANY + '</td>';
                tableString2 += '<td>' + CDCatalog.CD[i].PRICE + '</td>';
                tableString2 += '<td>' + CDCatalog.CD[i].YEAR + '</td>';
                tableString2 += '</tr>';
            }

            tableString2 += '</table>';
            container2.innerHTML = tableString2;
        }

    } catch (error) {
        console.error("Download error: " + error.message);
    }
}

function hideBooks() {
    var container = document.getElementById("test");
    container.innerHTML = "";
}

function hideCDs() {
    var container2 = document.getElementById("test2");
    container2.innerHTML = "";
}