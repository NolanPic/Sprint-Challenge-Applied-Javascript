// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // header parent
    const header = document.createElement('header');
    header.classList.add('header');

    // date
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019'; // <-- Smarch should totally be a month
    header.appendChild(date);

    // logo/heading
    const logoHeading = document.createElement('h1');
    logoHeading.textContent = 'Lambda Times';
    header.appendChild(logoHeading);

    // temp
    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    header.appendChild(temp);

    return header;
}

document.querySelector('.header-container')
    .appendChild(Header());
