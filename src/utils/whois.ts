// @ts-ignore
import whois from 'whois';

export function lookupWhois(domain: string): Promise<string> {
  return new Promise((resolve, reject) => {
    whois.lookup(domain, (err: any, data: string) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
