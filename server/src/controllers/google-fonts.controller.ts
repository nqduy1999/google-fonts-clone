import httpStatusCodes from 'http-status-codes';
import GoogleFontApi from '~/libs/GoogleFont/google-fonts';
import IController from '~/types/IController';
import apiResponse from '~/utilities/apiResponse';

class GoogleFontsController {
  getAllFonts: IController = async (req, res) => {
    const googleApi = new GoogleFontApi();
    try {
      const fonts = await googleApi.getALLFonts();
      apiResponse.result(res, { fonts }, httpStatusCodes.OK);
    } catch (error) {
      apiResponse.result(res, error, httpStatusCodes.BAD_REQUEST);
    }
  };
}

export default GoogleFontsController;
