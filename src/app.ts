import express from 'express';
import nslookupRoutes from './routes/nslookup';

const app = express();

app.use(express.json());
app.use('/nslookup', nslookupRoutes);

export default app;
