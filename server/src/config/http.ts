import fetch from 'node-fetch';
class HttpClient {
  async get(url: string, params?: any, config?: any): Promise<any> {
    console.log(config, 'config.headers');

    const request = await fetch(url + new URLSearchParams(params), {
      method: 'GET',
      headers: config.headers,
    });
    const data = await request.json();
    return data;
  }

  async post(url: string, body?: any, config?: any): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };

    const request = await fetch(url, {
      method: 'POST',
      body,
      headers: headers,
    });
    const data = await request.json();
    return data;
  }
}

export default HttpClient;
