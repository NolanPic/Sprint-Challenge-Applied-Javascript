// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(item) {
    // card parent element
    const card = document.createElement('div');
    card.classList.add('card');

    // headline
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = item.headline;
    card.appendChild(headline);

    // author
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    // img-container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    // img
    const img = document.createElement('img');
    img.src = item.authorPhoto;
    img.setAttribute('alt', item.authorName);
    imgContainer.appendChild(img);

    // author credit
    const authorCredit = document.createElement('span');
    authorCredit.textContent =  `By ${item.authorName}`;
    author.appendChild(authorCredit);
    
    return card;
}

function CardList(items) {
    if(!items.length) {
        return null;
    }

    return items.map(item => Card(item));
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log('card data', res);
        return formatArticleData(res.data.articles);
    })
    .then(articles => {
        console.log('formatted articles', articles);

        // create cards
        const cardList = CardList(articles);

        // append cards
        const cardParent = document.querySelector('.cards-container');
        cardList.forEach(card => cardParent.appendChild(card));
    })
    .catch(err => console.warn(err));

/**
 * Formats article object data into an array of articles
 * @param {*} data -- the original data
 * @returns {array} -- the new array
 */
function formatArticleData(data) {
    let array = [];

    const keys = Object.keys(data);
    keys.forEach(key => {

        // give each article a category based on the object structure
        // not needed, just makes sense to do
        data[key].forEach(item => {
            item.category = key;
        })
        array = [...array, ...data[key]];
    });

    return array;
}

