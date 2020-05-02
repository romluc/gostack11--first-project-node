import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (request, response) => {
  return response.send('Hello, maaaaaannnns!');
});

app.listen(PORT, () => {
  console.log(`▶︎ Server up and running on ${PORT} 🛸`);
});
