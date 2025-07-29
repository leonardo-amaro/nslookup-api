// @ts-ignore
import whois from 'whois';
import whoisJson from 'whois-json';

export function lookupWhois(domain: string): Promise<string> {
  return new Promise((resolve, reject) => {
    whois.lookup(domain, (err: any, data: string) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

export async function lookupWhoisJson(domain: string) {
  try {
    const data = await whoisJson(domain);
    return data;
  } catch (error) {
    console.error('Erro ao buscar WHOIS:', error);
  }
}

export async function nationalWhois(domain: string) {
  try {
    const response = await fetch(`https://rdap.registro.br/domain/${domain}`).then((result) => result.json());
    return response;
  } catch (error) {
    console.error("Erro de consulta Whois Nacional: ", error);
  }
}
