function UsernameandPhysucalToken()
{
  Browsers.Item(btEdge).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  let page = Aliases.browser.pageApsBankMalta;
  page.radiobuttonLoginradio.ClickButton();
  page.textbox.Click(48, 25);
}
