import express from 'express';
import { PORT } from './utils/environment';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is running',
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
