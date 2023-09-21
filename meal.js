const load = (searchtect) => {
    document.getElementById('spinner').classList.remove('hidden');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtect}`;
    fetch(url)
        .then(res => res.json())
        .then(data => show(data.meals))
}
show = (data) => {
    console.log(data)
    const sec = document.getElementById('maindiv');
    sec.innerHTML = '';
    const showall = document.getElementById('ShowAll');
    if (data.length > 10) {
        showall.classList.remove('hidden');
        data = data.slice(0, 9);
    } else {
        showall.classList.add('hidden');
    }
    data.map(item => {
        const div = document.createElement('section');
        div.innerHTML = `<div class="bg-green-100 rounded-3xl p-2 shadow-xl" id="Foods">
        <img src="${item.strMealThumb}" alt="" class="rounded-3xl mx-auto">
        <h3 class="my-4 text-center text-3xl font-semibold">${item.strMeal}</h3>
        <p class="my-4 text-center text-xl font-normal">${item.strCategory},${item.strMeasure1}</p>
        <button class="text-xl font-medium py-2 px-4 bg-sky-300 rounded-lg w-full" onclick="Showmodal(${item.idMeal})">More</button>
        </div>`
            ;
        sec.appendChild(div);
    })
    document.getElementById('spinner').classList.add('hidden');


}
load('fish');
document.getElementById('search-box').addEventListener('keypress', () => {
    document.getElementById('spinner').classList.remove('hidden');
    const searchValue = document.getElementById('search-box').value;
    load(searchValue);
})
// document.getElementById('Foods').addEventListener('click', () => {

//     alert('coming soon');
// })

const Showmodal = (data) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayModal(data.meals[0].strInstructions, data.meals[0].strMeal))

}
const displayModal = (info1, info2) => {
    document.getElementById('foodDesc').innerHTML = info1.slice(0, 500);
    document.getElementById('modal-title').innerHTML = info2;
    document.getElementById('modalSection').classList.remove("hidden");
}

document.getElementById('ShowAll').addEventListener('click', () => {
    const searchValue = document.getElementById('search-box').value;
    load1(searchValue);
})
const load1 = (searchtect) => {
    document.getElementById('spinner').classList.remove('hidden');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtect}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showAllData(data.meals))
}
showAllData = (data) => {
    console.log(data.length)
    const sec = document.getElementById('maindiv');
    sec.innerHTML = '';
    const showall = document.getElementById('ShowAll');
    showall.classList.add('hidden');
    data.map(item => {
        const div = document.createElement('section');
        div.innerHTML = `<div class="bg-green-100 rounded-3xl p-2 " id="Foods">
        <img src="${item.strMealThumb}" alt="" class="rounded-3xl mx-auto">
        <h3 class="my-4 text-center text-3xl font-semibold">${item.strMeal}</h3>
        <p class="my-4 text-center text-xl font-normal">${item.strCategory},${item.strMeasure1}</p>
        <button class="text-xl font-medium py-2 px-4 bg-sky-300 rounded-lg w-full" onclick="Showmodal(${item.idMeal})">More</button>
        </div>`
            ;
        sec.appendChild(div);
    })
    document.getElementById('spinner').classList.add('hidden');
}
document.getElementById('CLosemodal').addEventListener('click', () => {
    document.getElementById('modalSection').classList.add('hidden');
})
