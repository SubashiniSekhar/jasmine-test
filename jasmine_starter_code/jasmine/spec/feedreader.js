/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has all urls defined and not empty', function () {
      for (const feed of allFeeds) {
        let feedurl = feed.url;
        expect(feedurl).toBeDefined();
        expect(feedurl).not.toBe("");
      }
    })
    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has all feed names defined and not empty', function () {
      for (const feed of allFeeds) {
        let feedname = feed.name;
        expect(feedname).toBeDefined();
        expect(feedname).not.toBe("");
      }
    })
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The Menu', function () {
    /* TODO: Write a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */
    it('has menu element hidden by default', function () {
      let menuEl = document.querySelector(".menu-hidden");
      expect(menuEl).not.toBe("");
    });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    it('hides and shows menu when the menu button is clicked', function () {
      $('.menu-icon-link')[0].click();
      let menuEl= document.querySelector(".menu-hidden");
      expect (menuEl).toBeNull();

      $('.menu-icon-link')[0].click();
      let menuEl2= document.querySelector(".menu-hidden");
      expect (menuEl2).toBeDefined();
    })

  });

  /* TODO: Write a new test suite named "Initial Entries" */

  describe('Initial Entries', function () {

    beforeEach(function (done) {
      loadFeed(2, function () {
        done();
      })
    })

    /* TODO: Write a test that ensures when the loadFeed
           * function is called and completes its work, there is at least
           * a single .entry element within the .feed container.
           * Remember, loadFeed() is asynchronous so this test will require
           * the use of Jasmine's beforeEach and asynchronous done() function.
           */
    it('has at least a single .entry element within .feed container', function (done) {
      let feed = document.querySelector(".feed");
      let entryElements = feed.querySelectorAll(".entry");
      expect(entryElements.length).toBeGreaterThan(0);
      done();
    });
  });
  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function () {
    let feedbefore, feedafter;
    beforeEach(function (done) {
      loadFeed(3, function () {
        feedbefore = document.querySelector(".feed");
      });

      loadFeed(0,function () {
        feedafter = document.querySelector(".feed");
        done();
      })

    });

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    it('should change the content after the loadFeed function has been called', function (done) {
      expect(feedbefore).not.toEqual(feedafter);
      done();
    })

  });

}());
