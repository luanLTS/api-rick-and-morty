const BASE_URL = `https://rickandmortyapi.com/api`;
let json = document.getElementById("json");
let oldCount = 1;
let count = 11;

const fetchPerson = async (oldCountP, countP) => {
  if (countP >= 826 || oldCountP >= 826) return;
  let cards = document.querySelector(".cards");
  oldCount = oldCountP;
  count = countP;
  for (let i = oldCount; i < count; i++) {
    if (i === 826) return;
    console.log(i);
    console.log(`${BASE_URL}/character/${i}`);
    let { data } = await axios.get(`${BASE_URL}/character/${i}`);
    let { image, species, name, status } = data;
    let location = data.location.name;
    let origin = data.origin.name;

    let card = `<div class="card">
                    <div class="card-image">
                    <img id="image" src="${image}" alt="">
                </div>
                <div class="card-infos">
                    <div class="name">
                    <span class="${status}" id="status">${status}</span>
                        <p id="name">${name}</p>
                    </div>
                    <div class="location">
                        <p id="location"><span id="location-title">Specie:</span> ${species}</p>
                        <p id="location"><span id="location-title">Location:</span> ${location}</p>
                        <p id="origin"><span style="font-weight: 600;color: #fff;">Origin:</span> ${origin}</p>
                    </div>
                </div>
                </div>`;
    cards.innerHTML += card;
  }
};

fetchPerson(oldCount, count);
