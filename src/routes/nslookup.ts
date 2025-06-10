import express from 'express';
import dns from 'dns/promises';

const router = express.Router();

router.get('/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const [addresses, cname, mx] = await Promise.all([
      dns.resolve(domain).catch(() => []),
      dns.resolveCname(domain).catch(() => []),
      dns.resolveMx(domain).catch(() => []),
    ]);

    res.json({ domain, addresses, cname, mx });
  } catch (err: any) {
    res.status(500).json({ error: 'Erro ao consultar DNS', detail: err.message });
  }
});

export default router;
