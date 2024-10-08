const demo_div = document.getElementById('Demo');
const input = document.getElementById('User');
const btn = document.getElementById('btn')

const popularMovies = async () => {

        let api = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=105b3449e54997efc78dbad890bf50dc`);

        let data = await api.json();

        console.log(data);
        
        demo_div.innerHTML = data.results.map((item) => 
        
            `<div class="posters">
                <img src="https://image.tmdb.org/t/p/w1280${item.poster_path}">
                <h3>${item.title}</h3>
                <div class="details"> 
                <p><b> Views : ${item.vote_average}K</b></p>
                 <p><b> Date : ${item.release_date}</b></p>
                </div>
            </div>`

        
) 
};

popularMovies();

const SearchMovies = async () => {
    
    demo_div.innerHTML = ""

    let searchApi = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=105b3449e54997efc78dbad890bf50dc&query=${input.value}`);

    let data = await searchApi.json();

   
    demo_div.innerHTML = data.results.map((item)=>
        
        `
        <div class="main">
                <img src="https://image.tmdb.org/t/p/w1280${item.poster_path}">
                <h3>${item.title}</h3>
                <div class="details"> 
                <p><b> Views : ${item.vote_average}K</b></p>
                 <p><b> Date : ${item.release_date}</b></p>
                </div>
            </div>
        `
)
        
};