const BASE_URL = `https://rickandmortyapi.com/api`;
let json = document.getElementById("json");

const fetchPerson = async (count) => {
    let { data } = await axios.get(`${BASE_URL}/character/${count}`);
    console.log(data);
    let { image, species, name, status } = data;
    let location = data.location.name;
    let origin = data.origin.name;

    console.log(`NAME -> ${name}`);
    console.log(`SPECIES -> ${species}`);
    console.log(`IMAGE -> ${image}`);
    console.log(`STATUS ->   ${status}`);
    console.log(`LOCATION -> ${location}`);
    console.log(`ORIGIN -> ${origin}`);
};

fetchPerson(1);
