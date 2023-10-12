import 'dotenv/config';

import express from 'express';

import userRoutes from './routes/user.router';
import areaRoutes from './routes/area.router';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', areaRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
