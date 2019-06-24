# jasmine-test

Unit Testing web applications is an integral part of the web development process that ensures that with adding features etc the code is still tested and any break in functionality is immediately detected and rectified. 
The feed reader test is written using Jasmine test framework that tests the funcitonalilty of various RSS feeds loaded. 
The following are the test case specifications. 
1. It checks if the feed urls are defined and are not empty.
2. It checks if the feed names are defined and are not empty.
3. the menu element on the page is hidden by default.
4. The menu button should be functional, i.e should toggle the visibility of the menu element.
5. The feed container should contain at least one entry.
6. The loadFeed function should change the feed content.
When we have unit tests, we make sure we dont accidentaly break other functionalities when refactoring something else. Even if something breaks, we are alerted right away so we can start rectifying.


