import express from 'express';
import { lookupWhois } from '../utils/whois';
import { parseWhois } from '../utils/parseWhois';

const router = express.Router();

router.get('/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const rawWhois = await lookupWhois(domain);
    const parsed = parseWhois(rawWhois);

    res.json({ domain, whois: parsed });
  } catch (err: any) {
    res.status(500).json({ error: 'Erro ao consultar WHOIS', detail: err.message });
  }
});

export default router;
