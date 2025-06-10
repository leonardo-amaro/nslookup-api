import express from 'express';
import nslookupRoutes from './routes/nslookup';
import whoisRoute from './routes/whois';

const app = express();

app.use(express.json());
app.use('/nslookup', nslookupRoutes);
app.use('/whois', whoisRoute);

export default app;
