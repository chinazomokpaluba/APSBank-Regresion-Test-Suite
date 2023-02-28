function Need_Help()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let browser = Aliases.browser;
  let page = browser.pageApsBankMalta;
  page.buttonSignUp.ClickButton();
  let link = page.linkNeedHelp;
  link.ClickR(44, 9);
  link.ClickR(35, 12);
  browser.wndChrome_WidgetWin_1.Minimize();
}