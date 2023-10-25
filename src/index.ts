import 'dotenv/config';

import express from 'express';

import areaRoutes from './routes/area.router';
import cropeventsRoutes from './routes/crop.event.router';
import cropRoutes from './routes/crop.router';
import transactionRoutes from './routes/transaction.route';
import userRoutes from './routes/user.router';
import validateRoutes from './routes/validate.router';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', userRoutes);

app.use('/', validateRoutes);

app.use('/api', areaRoutes);
app.use('/api', cropRoutes);
app.use('/api', cropeventsRoutes);
app.use('/api', transactionRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
