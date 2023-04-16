fixture`Validate the nike.com page`
  .page`https://www.nike.com/w`;

test('verify nike.com page', async (t) => {
  await t.debug();
});
