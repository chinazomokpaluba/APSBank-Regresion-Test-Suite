function Carousel_Navigation()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.button3.ClickButton();
  page.button2.ClickButton();
  page.button1.ClickButton();
}