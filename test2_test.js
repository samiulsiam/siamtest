Feature('testing youtube');

Scenario('test wanderly', (I) => {
  I.amOnPage('https://youtube.com');
  I.see('youtube');
});

