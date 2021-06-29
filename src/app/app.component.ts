import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate';
  mName='Mohamed';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  useLanguage(language: string): void {
    if(language=="ar"){
      this.mName="محمد"
    }else {
      this.mName="Mohamed"
    }
    this.translate.use(language);
  }
}
