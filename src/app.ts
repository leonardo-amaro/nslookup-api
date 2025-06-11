import express from 'express';
import cors from 'cors';
import nslookupRoutes from './routes/nslookup';
import whoisRoute from './routes/whois';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/nslookup', nslookupRoutes);
app.use('/whois', whoisRoute);

export default app;
