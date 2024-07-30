const http = require('http');
let count1 = 0;
let count2 = 0;
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.writeHead(200, {
         'Content-Type': 'text/html; charset=UTF-8'
      });
      count1++;
      res.end(
         `<h1>Добро пожаловать на мой сайт</h1>
         <a href="/about">Ссылка на страницу /about</a>
         <p>Просмотров: ${count1}</p>
         `
      );
   } else if (req.url === '/about') {
      res.writeHead(200, {
         'Content-Type': 'text/html; charset=UTF-8'
      });
      count2++;
      res.end(
         `<h1>About</h1>
         <a href="/">Ссылка на страницу /</a>
         <p>Просмотров: ${count2}</p>
         `
      );
   } else {
      res.writeHead(404, {
         'Content-Type': 'text/html; charset=UTF-8'
      });
      res.end(
         `<h1>Ошибка 404</h1>
         <p>Страница не найдена</p>
         `
      );
   }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});