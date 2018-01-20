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

    // checks to see if the menu's visibility changes when the menu icon is clicked.
    it('changes visibility when menu is clicked', function() {

      // On the first click.
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      // On the second click.
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  describe("Initial Entries", function() {

    // checkes if the loadFeed function(a asynchronous function) is called and executed properly.
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('loadFeed function is called and executed properly', function(done) {
      var container = document.querySelector('.feed');
      expect($('.parent .child') && initialComplete).toBe(true);
      done();
    });

  });


  describe('New Feed Selection', function() {
    var initFeedSelection;
    //check if the that the content changes after running the loadFeed function.
    beforeEach(function(done) {
      loadFeed(0, function() {
        initFeedSelection = document.querySelector(".feed").innerHTML;
        loadFeed(1, function() {
          done();
        });
      });
    });


    it('feed is loaded by the loadFeed function', function(done) {
      var newFeedSelection = document.querySelector(".feed").innerHTML;
      expect(initFeedSelection).not.toBe(newFeedSelection);
      done();
    });
  });
}());