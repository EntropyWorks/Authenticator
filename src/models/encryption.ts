/* tslint:disable:no-reference */
/// <reference path="../../node_modules/@types/crypto-js/index.d.ts" />

class Encription {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  getEncryptedSecret(secret: string): string {
    if (!this.password) {
      return secret;
    }
    return CryptoJS.AES.encrypt(secret, this.password).toString();
  }

  getDecryptedSecret(secret: string): string {
    if (!this.password) {
      return secret;
    }
    return CryptoJS.AES.decrypt(secret, this.password)
        .toString(CryptoJS.enc.Utf8);
  }

  getEncryptionStatus(): boolean {
    return this.password ? true : false;
  }

  updateEncryptionPassword(password: string) {
    this.password = password;
  }
}