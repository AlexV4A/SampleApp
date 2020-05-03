import { browser, by, element } from 'protractor';

export class WorkPage {
  
  private credentials = {
    username: 'test'
  };
  navigateTo() {
    return browser.get('/workboard');
  }

  getUsername() {
    return element(by.css('app-root .username-text')).getText();
  }
  
  callChild(){
    element(by.id('callChild')).click();
  }

  getChildText(){
    return element(by.css('.action-data')).getText();
  }
}
