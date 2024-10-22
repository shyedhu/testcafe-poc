fixture`Validate the page`
  .page`https://www.google.com/`;

test('verify the page', async (t) => {
  await t.wait(5000);
});
