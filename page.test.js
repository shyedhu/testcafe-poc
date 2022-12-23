import { Selector } from 'testcafe';


// fixture`Validate the nike.com checkout`
//   .page`https://www.nike.com/t/headbands-6-pack-mh3PSb/N0002545-176`;

// test('Add to bag and navigate to Checkout page', async (t) => {
//   const atc = Selector('[data-browse-component="ATCButton"] .add-to-cart-btn');
//   const carticon = Selector('#nav-cart > a > div > span');

//   // add to bag
//   await t.click(atc);
//   await t.debug();
  
  
// });

fixture`Validate the nike.com checkout`
  .page`https://www.nike.com/t/gift-card-RpyEVO`;

test('Add to bag and navigate to Checkout page', async (t) => {
  const atc = Selector('[data-browse-component="ATCButton"] .add-to-cart-btn');
  const carticon = Selector('#nav-cart > a > div > span');

  // add to bag
  await t.click(atc);
  await t.debug();
  
  
});