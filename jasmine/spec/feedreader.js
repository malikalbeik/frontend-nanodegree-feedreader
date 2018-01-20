/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {

    // checks to see if the allFeeds array is undefined or empty.
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // checks that every object in the allFeeds array has a URL.
    it('has a URL', function() {
      expect(allFeeds.every((element) => element.url !== undefined && element.url !== "")).toBe(true);
    });

    // checks that every object in the allFeeds array has a Name.
    it('has a name', function() {
      expect(allFeeds.every((element) => element.name !== undefined && element.name !== "")).toBe(true);
    });

  });



  describe("The menu", function() {

    var menu = document.querySelector('body'),
      menuIcon = document.querySelector('.menu-icon-link');

    // checkes to see if the menu is hidden by defualt.
    it('is hidden by defualt', function() {
      expect(menu.classList.contains('menu-hidden')).toBe(true);
    });

    // checks to see if the menu's visibility changes when the menu icon is clicked
    it('changes visibility when menu is clicked', function() {

      // On the first click.
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      // On the second click.
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());