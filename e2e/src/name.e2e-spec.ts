import { AppPage } from './name.po';

describe('Name view', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should initially display no name and an empty textfield where the name can be changed', () => {
    page.navigateTo();
    expect(page.getNameInput().getAttribute('value')).toEqual('');
    expect(page.getNameOutput().getText()).toEqual('');
  });

  it('should display the name "Rudi" after "Rudi" was typed into the textfield', function () {
    page.navigateTo();
    page.getNameInput().clear();
    page.getNameInput().sendKeys('Rudi');
    expect(page.getNameOutput().getText()).toEqual('Rudi');
  });
});
