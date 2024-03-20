var characters = [
    {
      "name": "Немо",
      "age": 1, 
      "occupation": "Рыбенок",
      "person_photo": "https://static.wikia.nocookie.net/disney/images/f/f2/Profile_-_Nemo.jpg/revision/latest?cb=20190529221404"
    },
    {
      "name": "Марлин",
      "age": 30,
      "occupation": "Отец Немо",
      "person_photo": "https://media.2x2tv.ru/content/images/2021/08/nemo.jpg"
    },
    {
      "name": "Дори",
      "age": 27,
      "occupation": "Синяя рыбка с короткой памятью",
      "person_photo": "https://storage.weacom.ru/v1632/18/zKkvAFamK80.jpg"
    },
];

var charactersContainer = document.getElementById('characters-container');

characters.forEach(character => {
    var card = document.createElement('div');
    card.classList.add('card');

    var img = document.createElement('img');
    img.src = character.person_photo;
    img.alt = character.name;

    var name = document.createElement('h2');
    name.textContent = character.name;

    var age = document.createElement('p');
    age.textContent = 'Возраст: ' + character.age;

    var occupation = document.createElement('p');
    occupation.textContent = 'Профессия: ' + character.occupation;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(occupation);

    charactersContainer.appendChild(card);
});