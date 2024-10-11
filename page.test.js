fixture`Validate input on the page`
  .page`https://the-internet.herokuapp.com/basic_auth`;

test('verify the page', async (t) => {
  await t.wait(5000);
});
