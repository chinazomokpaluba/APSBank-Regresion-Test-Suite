function Carousel_Navigation()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let panel = Aliases.browser.pageApsBankMalta.panelAnytimeAnywhere2;
  panel.button3.ClickButton();
  panel.button2.ClickButton();
  panel.button1.ClickButton();
}
