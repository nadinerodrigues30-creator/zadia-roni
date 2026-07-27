# Convite de casamento — Zádia & Roni

## Estrutura da pasta
```
index.html      -> o site (não precisa editar)
dados.js        -> TODAS as informações editáveis (nomes, data, local, whatsapp, pix, presentes...)
assets/
  casal.jpg     -> foto do casal
  local.jpg     -> foto do espaço/local da festa
  musica.mp3    -> música de fundo (ADICIONE este arquivo — veja abaixo)
  presentes/    -> coloque aqui fotos "meme" dos presentes, se quiser usar fotos em vez de emoji
```

## Como adicionar a música
O YouTube não deixa tocar áudio automaticamente de forma confiável em celular.
A solução mais garantida é usar um arquivo de música (mp3) de verdade:

1. Consiga o arquivo em mp3 da música escolhida (uma cópia sua, ou um site de música livre de direitos)
2. Renomeie o arquivo para `musica.mp3`
3. Coloque dentro da pasta `assets/`
4. Pronto — o site já está programado pra tocar esse arquivo quando o convite for aberto

## Como reaproveitar para outro casal (novo cliente)
1. Copie a pasta inteira
2. Abra `dados.js` e troque os textos (nomes, data, endereço, WhatsApp, Pix, presentes)
3. Troque as imagens dentro de `assets/` pelas fotos do novo casal
4. Não precisa mexer em `index.html` nem no visual

## Como publicar no GitHub Pages
1. Crie uma conta em github.com (se ainda não tiver)
2. Clique em **New repository**, dê um nome (ex: `convite-zadia-roni`) e crie
3. Clique em **Add file > Upload files** e arraste os 3 itens: `index.html`, `dados.js` e a pasta `assets`
4. Clique em **Commit changes**
5. Vá em **Settings > Pages**
6. Em "Branch", selecione `main` e a pasta `/root`, depois **Save**
7. Espere 1–2 minutos e atualize a página — vai aparecer o link do site (algo como `https://seuusuario.github.io/convite-zadia-roni/`)

Esse é o link que você compartilha com os convidados.
