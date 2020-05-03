import { WorkPage } from './workboard.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: WorkPage;

  beforeEach(() => {
    page = new WorkPage();
  });

  it('when child called', () => {
    page.navigateTo();
    page.callChild();
    browser.driver.sleep(2000);
    expect(page.getChildText()).toEqual('');
  });
});
