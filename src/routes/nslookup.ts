import express from 'express';
import dns from 'dns/promises';

const router = express.Router();

router.get('/:domain', async (req, res) => {
  const { domain } = req.params;

  try {
    const [a, aaaa, cname, mx, ns] = await Promise.all([
      dns.resolve4(domain).catch(() => []),
      dns.resolve6(domain).catch(() => []),
      dns.resolveCname(domain).catch(() => []),
      dns.resolveMx(domain).catch(() => []),
      dns.resolveNs(domain).catch(() => []),
    ]);

    res.json({ domain, a, aaaa, cname, mx, ns });
  } catch (err: any) {
    res.status(500).json({ error: 'Erro ao consultar DNS', detail: err.message });
  }
});

export default router;
