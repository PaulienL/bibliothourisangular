import { browser, element, by } from 'protractor';

export class NewtestbiblioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
