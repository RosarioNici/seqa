;
import { DOCUMENT } from '@angular/common';
import { faq } from './faq.dat';
import { Component, Inject, Renderer2, OnInit,} from '@angular/core';

@Component({
  selector: 'app-formazione',
  templateUrl: './formazione.component.html',
  styleUrls: ['./formazione.component.scss']
})
export class FormazioneComponent {
faqarray = faq

 constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  public ngOnInit() {
    const storeId = 80810004;
    const script = this.renderer2.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('src', `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2020-02-17`);
    script.onload = this.injectEcwidProductBrowser(storeId);

    this.renderer2.appendChild(this.document.getElementById('ecwidScriptsSection'), script);
  }

  private injectEcwidProductBrowser(storeId: number) {
    return () => {
      const ecwidBrowserScript = document.createElement('script');
      ecwidBrowserScript.setAttribute('type', 'text/javascript');
      ecwidBrowserScript.setAttribute('charset', 'utf-8');
      ecwidBrowserScript.text = `xCategoriesV2("id=my-categories-80810004"); xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");Ecwid.init();`;
      document.head.appendChild(ecwidBrowserScript);
    };
  }


}
