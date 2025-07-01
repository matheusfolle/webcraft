# QR Code Challenge – Frontend Mentor

This was my first Frontend Mentor challenge. The goal was to replicate a QR code card component using only HTML and CSS.

## ✅ What I learned

- How to use the `:root` selector to define global variables (like colors), making the project easier to maintain.  
  > *(I don’t fully understand `:root` yet, but I can tell it goes beyond just color naming.)*

- How to use the `font` shorthand to define all font properties in a single line:
  ```css
  font: normal 700 1.5rem 'Outfit', sans-serif;
  ```

- How to center a div using `display: flex` on the parent element, along with `justify-content: center` and `align-items: center`, ideally with a `min-height: 100vh`.
- How to limit a container’s width using `max-width` to keep it centered and responsive.
- How to apply `box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);` to create a soft shadow without offset, adding depth to the card.
- How to center an image by setting its width to `100%`, as long as the container has defined dimensions.
- I used several `margin-bottom` values for spacing — simple and effective for this small layout.
- I’m getting used to using the `font` shorthand to keep my CSS cleaner.

## 📱 Next steps

- Add mobile responsiveness.

---

### 🇧🇷 Versão em Português

Este foi meu primeiro desafio no Frontend Mentor. A proposta era replicar um componente de cartão com um QR Code, com foco em HTML e CSS puro.

## ✅ O que aprendi

- A utilizar o seletor `:root` para definir variáveis globais (ex: cores), facilitando a manutenção do projeto.  
  > *(Ainda não entendo tudo sobre `:root`, mas já percebo que vai além de nomear cores.)*

- A compactar as definições de fonte usando a shorthand `font`, por exemplo:
  ```css
  font: normal 700 1.5rem 'Outfit', sans-serif;
  ```

- A centralizar elementos usando `display: flex` no elemento pai, combinando com `justify-content: center` e `align-items: center`, junto de uma altura mínima (`min-height`) com `100vh`.
- A usar `max-width` para limitar a largura da `div`, mantendo ela centralizada e proporcional à tela.
- A aplicar `box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);` para criar uma sombra sutil (sem deslocamento, apenas borrão), trazendo profundidade ao card.
- A centralizar imagens ajustando a largura para `100%`, desde que a `div` tenha dimensões bem definidas.
- Usei várias `margin-bottom` para espaçamento entre elementos — simples e funcional neste caso.
- Estou me acostumando a sempre usar o shorthand `font` para tornar o CSS mais limpo.

## 📱 Melhorias futuras

- Implementar responsividade para dispositivos móveis.
