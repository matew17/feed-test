# ZemogaTest

## Clarifications

Not scoped:

- "Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)"

I would have added some http calls to a WebApi updating the values of the votes, it would be probably a great thing to use a real time tech as Sockets or Firebase to have the data updated in real time.

I didn't add that implementation because of the time that I had available to develop this Test.

- "You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with."

I used Angular because it's the framework which I am familiar with. I tried to use best techniques and good practices to make an scalable app.

- "Bonus points: Some sort of Test (E2E, BDD, etc)"

Sorry, I didn't add unit testing but I have experience with them, I normally follow standars test adding test per file and mocking all necessary data to test every file.

On the projects that I have work on the minimun test coverage is 90%, which is great.

## Architecture explanation

Some key values that I added are the following:

- Scalable Ska Folding following the angular style guide.
- I tried to type all as I could, didn't create interfaces due to the time that I had to develop this test.
- I added some nice configurations to use SCSS imports easyly.
- I added some nice configurations on the tsconfig.json with the paths of the most used files, so the imports on the ts files looks like : import {something} from "@app/something", which I really think is great and looks clean.
- Pretty much all in the app is a generic and reusable component, which I think it's one of the adventages of using angular. It allows you to have a great architecture and also to reuse components.
- I added some mocked https calls on services files to emulate the usage of a api calls.
- Ska folding was planned with a features folder due to the nature of the app, so on the app component we have just the router outlet. And then on every feature component you can reuse all you need.
- I thought on having a base layout but I didn't want to add complexity on the app, however I think that if the menu and footer are not going to change it's a nice to have feature.
- I created some mixins using scss to follow good patters, also added var colors and I tried to use those on every component.
- The Navigation from one page to another is redirecting to the same component, however it could be easily changed to redirect to modules and use adventage of lazy loading.
- Images are comming from a CDN called Cloudinary and those have a configuration to use Auto format, which allows to download the images in different formats depending on the network you're using and also gives you a better performance.
- I added only one mock of data per page (Only One), but it could easily be changed if desired.

## Evidence
![Desktop presentation](https://github.com/matew17/feed-test/blob/master/evidence/desktop.gif)


![Mobile presentation](https://github.com/matew17/feed-test/blob/master/evidence/mobile.gif)
