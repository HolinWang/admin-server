import * as crypto from 'crypto';

/**
 * 随机盐  产生随机字符串
 * @param len
 */

export function makeSalt(len = 3){
  return crypto.randomBytes(len).toString('base64');
}

export function encryptoPassword(password:string,salt:string) : string{
  if(!password || !salt){
    return '';
  }

  // 加密
  const tempSalt = Buffer.from(salt,'base64');
  return (
    crypto.pbkdf2Sync(password,tempSalt,10000,16,'sha1').toString('base64')
  )
}