function Mobile_App_Download()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.buttonSignUp2.ClickButton();
  let panel = page.panelSignUp;
  panel.linkDetailsIdEuNewfrontierIbanki.panel.ClickR(49, 15);
  panel.linkId1454207441.panel.ClickR(58, 23);
  panel.buttonClose.ClickButton();
}