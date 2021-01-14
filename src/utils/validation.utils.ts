// IP validation
type ValidateIpType = 'all' | 'IPv4' | 'IPv6';

export const validateIPv4 = (value: string): boolean => {
  const regExp = /([0-9]{1,3}[\.]){3}[0-9]{1,3}/;
  return regExp.test(value);
};

export const validateIPv6 = (value: string): boolean => {
  const regExp = /((^|:)([0-9a-fA-F]{0,4})){1,8}/;
  return regExp.test(value);
};


export const validateIp = (type: ValidateIpType = 'all') => {
  return (value: string): boolean => {
    if (type === 'IPv4') {
      return validateIPv4(value);
    }
    if (type === 'IPv6') {
      return validateIPv6(value);
    }
    return validateIPv4(value) || validateIPv6(value);
  }
};


// Email validation
export const validateEmail = (email: string): boolean => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email)
};