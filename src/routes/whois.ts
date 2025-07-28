import express from 'express';
import { lookupWhois, nationalWhois } from '../utils/whois';
import { parseWhois, parseWhoisBr } from '../utils/parseWhois';

const router = express.Router();

router.get('/:domain', async (req, res) => {
  const { domain } = req.params;

  if (domain.endsWith(".br")) {
    try {
      const whoisBr = await nationalWhois(domain);
      const parsed = parseWhoisBr(whoisBr);

      res.json({ domain, whois: parsed });
    } catch (err: any) {
      res.status(500).json({ error: 'Erro ao consultar WHOIS Nacional', detail: err.message });
    }
  } else {
    try {
      const rawWhois = await lookupWhois(domain);
      const parsed = parseWhois(rawWhois);
  
      res.json({ domain, whois: parsed });
    } catch (err: any) {
      res.status(500).json({ error: 'Erro ao consultar WHOIS', detail: err.message });
    }
  }
});

export default router;
