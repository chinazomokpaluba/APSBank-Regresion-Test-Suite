function Mobile_App_Download()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browser = Aliases.browser;
  let page = browser.pageApsBankMalta;
  page.buttonSignUp.ClickButton();
  page.panelSignUp.linkDetailsIdEuNewfrontierIbanki.panel.ClickR(71, 16);
  let browserWindow = browser.wndChrome_WidgetWin_1;
  browserWindow.Minimize();
  browserWindow.Click(157, 83);
  browserWindow.Minimize();
}

