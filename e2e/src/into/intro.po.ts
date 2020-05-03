import { browser, by, element } from 'protractor';

export class IntroPage {
  
  private credentials = {
    username: 'test'
  };
  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(credentials: any = this.credentials) {
    element(by.css('[name="username"]')).sendKeys(credentials.username);
    element(by.css('[type="submit"]')).click();
  }

  getPageTitleText() {
    return element(by.css('app-root .text-class')).getText();
  }
}
