/* 
    .mjs는 ECMAScript(ES)를 사용하고 있음을 나타내는 확장명
    import, export 구문을 사용할 수 있음
*/
import { createServer } from 'node:http';       // require('http')와 같다

const server = createServer((req, res) => {     // requset : 사용자의 정보를 얻어올 수 있다(오는 객체) response : 정보를 줄 때 담아줄 객체(보내는 객체)
    console.log('서버가 동작중입니다')
    // console.log(req.headers)
    // console.log(req.method)
    console.log(req.url)

    const url = req.url
    if (url === '/') {
        console.log('index.html')
    }else if (url === '/portfolio') {
        console.log('portflio.html')
    }else if (url === '/sitemap') {
        console.log('sitemap.html')
    }else {     // 들어갈 때 나갈 때 총 두번을 찍게 되어서 알수없음도 출력된다.
        console.log('not-found.html')
    }

  res.writeHead(200, { 'Content-Type': 'text/plain' });     // 서버가 사용자에게 보내는 header
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});


