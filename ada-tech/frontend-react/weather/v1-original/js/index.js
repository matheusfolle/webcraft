"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Localizando os elementos form e input
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-loc");
// Seleciona a sessão weather-info
const weatherInfoSec = document.querySelector("#weather-info");
// Se o form existir, coloca uma escuta a partir do envio do form
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    // Se a entrada ou a pesquisa for nula simplesmente retorna
    if (!input || !weatherInfoSec)
        return;
    // Se verdadeira, o loc abriga o valor da entrada
    const loc = input.value;
    if (loc.length < 3) {
        alert("O local precisa ter pelo menos 3 letras.");
        return;
    }
    try {
        // Fazendo requisição
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=e3cc7780d5e2706f7591edac48ab01c6&lang=pt_br&units=metric`);
        // Convertendo a resposta p/ JSON
        const data = yield response.json();
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
    }
    catch (err) {
        console.log("Erro ao obter dados.", err);
    }
}));
