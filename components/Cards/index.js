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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log('card data', res);
        return formatArticleData(res.data.articles);
    })
    .then(articles => {
        console.log('formatted articles', articles);
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