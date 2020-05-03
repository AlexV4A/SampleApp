import { IntroPage } from './intro.po';
import { browser, logging } from 'protractor';
import { WorkPage } from '../workboard/workboard.po';

describe('workspace-project App', () => {
  let page: IntroPage;
  let workPage : WorkPage;

  beforeEach(() => {
    page = new IntroPage();
    workPage = new WorkPage();
  });

  it('when login is unsuccesful', () => {
    page.navigateTo();
    page.fillCredentials({
      username: ''
    });
    expect(page.getPageTitleText()).toEqual('PLEASE ENTER YOU NAME AND PRESS ENTER');
  });

  it('when login is successful', () => {
    page.navigateTo();
    page.fillCredentials({
      username: 'Alex'
    });
    expect(workPage.getUsername()).toEqual('Hello Alex');
  });

});
