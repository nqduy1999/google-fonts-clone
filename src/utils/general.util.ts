/* eslint-disable no-useless-escape */
export const isScreensize = size => {
  let _isTrue = false;
  switch (size) {
    case 'xs':
      _isTrue = window.outerWidth < 400 ? true : false;
      break;
    case 'sm':
      _isTrue = window.outerWidth < 768 ? true : false;
      break;
    case 'md':
      _isTrue = window.outerWidth < 992 ? true : false;
      break;
    case 'lg':
      _isTrue = window.outerWidth < 1200 ? true : false;
      break;
    case 'xl':
      _isTrue = window.outerWidth >= 1200 ? true : false;
      break;
    default:
      break;
  }
  return _isTrue;
};
