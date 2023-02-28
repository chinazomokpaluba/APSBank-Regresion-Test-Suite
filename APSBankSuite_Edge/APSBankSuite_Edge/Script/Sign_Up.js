function Sign_Up()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.buttonSignUp.ClickButton();
  page.panel.Click(9, 10);
  let panel = page.panelSignUp;
  panel.buttonNext.ClickButton();
  panel.buttonClose.ClickButton();
}