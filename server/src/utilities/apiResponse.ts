import { Response } from 'express';
import HttpStatusCode from 'http-status-codes';
import constants from '~/constants';

export interface IOverrideRequest {
  code: number;
  message: string;
  positive: string;
  negative: string;
}

export interface ICookie {
  key: string;
  value: string;
}
export default class ApiResponse {
  static result = (
    res: Response,
    data: object,
    status: number = 200,
    cookie: ICookie = null,
  ) => {
    if (cookie) {
      res.cookie(cookie.key, cookie.value);
    }
    res.status(200).json({
      data,
      success: constants.HTTPResponse[status] >= 0,
      code: constants.HTTPResponse[status],
    });
  };

  static setCookie = (res: Response, key: string, value: string) => {
    res.cookie(key, value);
  };

  static responseEmpty = (res: Response, property: string) => {
    ApiResponse.result(
      res,
      {
        msg: `${property} is not empty`,
      },
      HttpStatusCode.BAD_REQUEST,
    );
  };
}
