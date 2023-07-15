import httpStatusCodes from 'http-status-codes';

enum ZALO_AI_CODE {
  NOT_RECEIVE_IMAGE = -1,
  SUCCESSFUL = 0,
  PROCESSING = 1,
  MULTIPLE_ID = 2,
  
}

const customResponse = {
  [httpStatusCodes.OK]: 0,
  [httpStatusCodes.CREATED]: 1,
  [httpStatusCodes.BAD_REQUEST]: -1,
  [httpStatusCodes.FORBIDDEN]: -3,
};

const zaloAiResponse = {};

export default customResponse;
