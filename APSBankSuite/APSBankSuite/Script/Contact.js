function Contact()
{
  Browsers.Item(btChrome).Navigate("https://ebank.apsbank.com.mt/Omni/Retail/home/login?r=%2fOmni%2fRetail");
  Aliases.browser.pageApsBankMalta.linkContact.panel.Click(22, 19);
}