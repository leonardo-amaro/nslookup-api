export function parseWhois(raw: string) {
  const getValue = (pattern: RegExp): string | undefined => {
    const match = raw.match(pattern);
    return match?.[1]?.trim();
  };

  const getValues = (pattern: RegExp): string[] => {
    return [...raw.matchAll(pattern)].map((m) => m[1].trim());
  };

  return {
    domainName: getValue(/Domain Name:\s*(.+)/i),
    registrar: getValue(/Registrar:\s*(.+)/i),
    creationDate: getValue(/Creation Date:\s*(.+)/i),
    expiryDate: getValue(/Expir(?:y|ation) Date:\s*(.+)/i),
    nameServers: getValues(/Name Server:\s*(.+)/gi),
  };
}
