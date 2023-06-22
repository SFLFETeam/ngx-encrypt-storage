# NgxEncryptStorage

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

# Installation

```
npm i ngx-encrypt-storage --save
```
## Inject in component

- you can import in component level to use as singleton service.

## Version support

| Angular version | library version |
| ----- | ----- |
| 15 | 15.0.0 |

## Usage

```
....
import { NgxEncryptStorageService } from 'ngx-encrypt-storage';

@Component({
  ......
  providers: [NgxEncryptStorageService]
})
export class AppComponent {

  constructor(
    private storageService:NgxEncryptStorageService,
  ){
    this.loadData();
  }
  loadData(){
    // for local storage
    this.storageService.setLocalStorageItem('keyName', 'obj','encryptKey');
  }
}

```

## API
### Inputs
| Input | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| keyName | string | true | key used to store data |
| obj | any | true | value what need to store |
| encryptKey | string | false | if provide encryptKey then it will convert data to encrypted format else normal data will store |

### Methods
| Name | Params | Description | 
| ----- | ----- | ----- |
| setLocalStorageItem | keyName(required), obj(required), encryptKey(optional) | To store value in local storage |
| getLocalStorageItem | keyName(required), encryptKey(optional) | To get value from local storage |
| setSessionStorageItem | keyName(required), obj(required), encryptKey(optional) | To store value in session storage |
| getSessionStorageItem | keyName(required), encryptKey(optional) | To get value from session storage |
| clearLocalStorageByKey | keyName(required) | For remove item from local storage |
| clearSessionStorageByKey | keyName(required) | For remove item from session storage |
| clearAllLocalStorage | - | For remove all items form local storage |
| clearAllSessionStorage | - | For remove all items form session storage |

