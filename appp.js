var xhr = new XMLHttpRequest();
xhr.open("GET", "books.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        console.log("Данные из JSON-файла:");
        console.log(jsonData);
    }
};
xhr.send();