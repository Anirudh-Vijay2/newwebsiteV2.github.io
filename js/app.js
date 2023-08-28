const NewsBox = document.querySelector('.india-headline-body');
const loadbox = document.querySelector('.loadbox');
const business = document.querySelector('.BusinessAllBody');
const sports = document.querySelector('.SportsBody');
const rightnav = document.querySelector('.navbar-inside-right');

document.querySelector('.navbar').style.display = 'none';

(async () => {
  try {
    // Fetch top headlines for India
    const responseIndia = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8127727ffc49478ab6685dd16fadc301');
    const dataIndia = await responseIndia.json();
    
    for (const crr of dataIndia.articles) {
      NewsBox.innerHTML += `
      <div class="card">
      <img src="${crr.urlToImage || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}" alt="News Image">
      <div class="card-content">
      <p title>${crr.title}</p>
        <button class="collapsible">Read Description</button>
        <div class="content">
          <p>${crr.description || "Description Not Available"}</p>
          <p>Author: ${crr.author}</p>
          <p>Source: ${crr.source.name}</p>
          <a href="${crr.url}" class="read-button">Read more</a>
        </div>
      </div>
    </div>
      `;
    }

    // Fetch top business headlines for the US
    const responseBusinessUS = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8127727ffc49478ab6685dd16fadc301');
    const dataBusinessUS = await responseBusinessUS.json();

    for (const bdx of dataBusinessUS.articles) {
      business.innerHTML += `
      <div class="card">
      <img src="${bdx.urlToImage || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}" alt="News Image">
      <div class="card-content">
      <p title>${bdx.title}</p>
        <button class="collapsible">Read Description</button>
        <div class="content">
          <p>${bdx.description || "Description Not Available"}</p>
          <p>Author: ${bdx.author}</p>
          <p>Source: ${bdx.source.name}</p>
          <a href="${bdx.url}" class="read-button">Read more</a>
        </div>
      </div>
    </div>
      `;
    }

    // Fetch top business headlines for India
    const responseBusinessIndia = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8127727ffc49478ab6685dd16fadc301');
    const dataBusinessIndia = await responseBusinessIndia.json();

    for (const INDDx of dataBusinessIndia.articles) {
      business.innerHTML += `
      <div class="card">
      <img src="${INDDx.urlToImage || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}" alt="News Image">
      <div class="card-content">
      <p title>${INDDx.title}</p>
        <button class="collapsible">Read Description</button>
        <div class="content">
          <p>${INDDx.description || "Description Not Available"}</p>
          <p>Author: ${INDDx.author}</p>
          <p>Source: ${INDDx.source.name}</p>
          <a href="${INDDx.url}" class="read-button">Read more</a>
        </div>
      </div>
    </div>
      `;
    }

    // Fetch top sports headlines for India
    const responseSportsIndia = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8127727ffc49478ab6685dd16fadc301');
    const dataSportsIndia = await responseSportsIndia.json();

    for (const sdxx of dataSportsIndia.articles) {
      sports.innerHTML += `
      <div class="card">
      <img src="${sdxx.urlToImage || 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}" alt="News Image">
      <div class="card-content">
      <p title>${sdxx.title}</p>
        <button class="collapsible">Read Description</button>
        <div class="content">
          <p>${sdxx.description || "Description Not Available"}</p>
          <p>Author: ${sdxx.author}</p>
          <p>Source: ${sdxx.source.name}</p>
          <a href="${sdxx.url}" class="read-button">Read more</a>
        </div>
      </div>
    </div>
      `;
    }

    // Other code related to collapsibles, loading, navigation, etc.
    setTimeout(() => {
      const collapsibles = document.querySelectorAll('.collapsible');
      collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function(e) {
            console.log(this.classList)
            // this.classList.toggle('active');
            collapsible.classList.toggle('active')
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
              content.style.display = 'none';
            } else {
              content.style.display = 'block';
            }
          });
      });

      loadbox.style.display = 'none';
      document.querySelector('.navbar').style.display = 'flex';
      document.querySelector('body').style.overflowY = 'auto';
    }, 2000);

    document.querySelector('.toggle').addEventListener('click', () => {
        if(rightnav.style.display == 'none'){
            rightnav.style.display='block'
            document.querySelector('.toggle').innerHTML="<i class='bx bx-x'></i>"
          }
        else{
            rightnav.style.display='none'
            document.querySelector('.toggle').innerHTML="<i class='bx bx-menu'></i>"
          }
    });

    const navItems = document.querySelectorAll('.nav-items');
    const viewportWidth = window.innerWidth;
    console.log('Viewport width:', viewportWidth);
    if(viewportWidth < 600){
        navItems.forEach(bt => bt.addEventListener('click', () =>{ 
          rightnav.style.display = 'none'
          document.querySelector('.toggle').innerHTML="<i class='bx bx-menu'></i>"
      }));
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
})();
