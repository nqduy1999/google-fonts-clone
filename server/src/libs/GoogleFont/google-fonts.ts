import HttpClient from '~/config/http';
import logger from '~/config/logger';

class GoogleFontApi extends HttpClient {
  /**
   * check existed phone
   * @param
   * @returns
   */
  async getALLFonts() {
    const API_KEY = process.env.GOOGLE_API_KEY;
    const path = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;
    try {
      const resp = await this.get(
        path,
        {},
        {
          headers: {},
        }
      );
      return resp.items;
    } catch (error) {
      console.log(error, 'error getALLFonts');
      logger.info(`API getALLFonts Error ${error}`);
    }
  }
}

export default GoogleFontApi;
