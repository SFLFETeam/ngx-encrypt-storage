import { Component } from '@angular/core';
import { NgxEncryptStorageService } from 'ngx-encrypt-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  constructor(private secureservice:NgxEncryptStorageService) {
    secureservice.setLocalStorageItem('local data', 'this is encrypted storage','2948404D63516654');
    console.log(secureservice.getLocalStorageItem('local data','2948404D63516654'));
  }
  onClickClear() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
