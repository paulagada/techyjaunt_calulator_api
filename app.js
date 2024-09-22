const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/calculate/add', (req, res) => {
  const { num1, num2 } = req.body;
  const sum = num1 + num2;
  res.json({ result: sum });
});

app.post('/api/calculate/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  const difference = num1 - num2;
  res.json({ result: difference });
});

app.post('/api/calculate/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  const product = num1 * num2;
  res.json({ result: product });
});

app.post('/api/calculate/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }
  const answer = num1 / num2;
  res.json({ result: answer });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
