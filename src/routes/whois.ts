import express from 'express';
import { lookupWhois } from '../utils/whois';

const router = express.Router();

router.get('/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const data = await lookupWhois(domain);
    res.json({ domain, whois: data });
  } catch (err: any) {
    res.status(500).json({ error: 'Erro ao consultar WHOIS', detail: err.message });
  }
});

export default router;
