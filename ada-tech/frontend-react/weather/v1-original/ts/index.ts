// Localizando os elementos form e input
const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-loc");

// Seleciona a sessão weather-info
const weatherInfoSec = document.querySelector("#weather-info");

// Se o form existir, coloca uma escuta a partir do envio do form
form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Se a entrada ou a pesquisa for nula simplesmente retorna
  if (!input || !weatherInfoSec) return;

  // Se verdadeira, o loc abriga o valor da entrada
  const loc = input.value;

  if (loc.length < 3) {
    alert("O local precisa ter pelo menos 3 letras.");
    return;
  }

  try {
    // Fazendo requisição
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=e3cc7780d5e2706f7591edac48ab01c6&lang=pt_br&units=metric`
    );

    // Convertendo a resposta p/ JSON
    const data = await response.json();

    console.log(data);

    const info = {
      temp: Math.round(data.main.temp),
      place: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    weatherInfoSec.innerHTML = `
  <div class="weather-data">
          <h1>${info.place}</h1>

          <span>${info.temp}</span>
        </div>

        <img src="${info.icon}" />`;
  } catch (err) {
    console.log("Erro ao obter dados.", err);
  }
});
