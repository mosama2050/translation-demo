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
  direction='ltr';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  useLanguage(language: string): void {
    if(language=="ar"){
      this.mName="محمد"
      this.direction="rtl"
    }else {
      this.mName="Mohamed";
      this.direction="ltr"
    }
    this.translate.use(language);
  }
}
