import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class NgxEncryptStorageService {
  constructor() {}
  // For set encrypted data to local storage
  public setLocalStorageItem(keyName: string, obj: any, encryptKey?: string) {
    try {
      if (encryptKey) {
        localStorage.setItem(keyName, this.encrypt(JSON.stringify(obj), encryptKey));
      } else {
        localStorage.setItem(keyName, JSON.stringify(obj));
      }
    } catch (error) {
      return error;
    }
  }

  // For get decrypted data from local storage
  public getLocalStorageItem(keyName: string, encryptKey?: string) {
    try {
      let data = localStorage.getItem(keyName) || '';
      if (encryptKey) {
        const value = this.decrypt(data, encryptKey);
        return value ? JSON.parse(value):value;
      } else {
        return JSON.parse(data);
      }
    } catch (error) {
      return error;
    }
  }

  // For set encrypted data to session storage
  public setSessionStorageItem(keyName: string, obj: any, encryptKey?: string) {
    try {
      if (encryptKey) {
        sessionStorage.setItem(keyName, this.encrypt(JSON.stringify(obj), encryptKey));
      } else {
        sessionStorage.setItem(keyName, JSON.stringify(obj));
      }
    } catch (error) {
      return error;
    }
  }

  // For get decrypted data from session storage
  public getSessionStorageItem(keyName: string, encryptKey?: string) {
    try {
      let data = sessionStorage.getItem(keyName) || '';
      if (encryptKey) {
        const value = this.decrypt(data, encryptKey);
        return value ? JSON.parse(value):value;
      } else {
        return JSON.parse(data);
      }
    } catch (error) {
      return error;
    }
  }

  // For encrypt data
  public encrypt(txt: string, encryptKey: string) {
    return CryptoJS.AES.encrypt(txt, encryptKey).toString();
  }

  // For decrypt data
  public decrypt(txtToDecrypt: string, encryptKey: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, encryptKey).toString(CryptoJS.enc.Utf8);
  }
}
