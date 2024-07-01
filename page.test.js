fixture`Validate input on the page`
  .page`https://www.nike.com/cart`;

test('verify the page', async (t) => {
  await t.wait(5000);
  await t.click('#promo-codes > summary > span > span > svg')
  await t.wait(5000);
  await t.typeText('#promo-codes > div > span > form > div.css-19ka2tk.e1mkeel42 > div > input','ABC')
  await t.wait(8000);
});
