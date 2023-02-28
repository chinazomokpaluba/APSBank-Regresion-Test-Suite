function UsernameandMobileApp()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.radiobuttonLoginradio2.ClickButton();
  page.textbox2.Click(21, 26);
  page.passwordbox.Click(41, 26);
}