Feature('testing wanderly');

Scenario('test wanderly', (I) => {
  I.amOnPage('https://wanderly.com');
  I.see('wanderly');
});

Scenario('test google', (I) => {
  I.amOnPage('https://google.com');
  // I.see('google');
});