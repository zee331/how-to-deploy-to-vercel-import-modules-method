import express from 'express'
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
