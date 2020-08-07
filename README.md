# Demo URL

[https://iktash.github.io/preact-app/](https://iktash.github.io/preact-app/)

# Points of interest

-   I tried to do a minimalistic approach to the project, so the only dependency that makes it into production is Preact.
-   UI/UX is pretty basic, just to show the data: with more time I'd do something much more compelling.
-   I used both AccuWeather and Kiwi APIs for fetching the data.
-   **The AccuWeather API has a hard limit of only 50 hits per day!**.
-   The setup uses Webpack for building the project and for running the development server as well.
-   In the development build, source maps for js and scss are supported. They are not included in production to minimize the size of the bundle.
-   I used Typescript for hardening the quality and assisting in development.
-   I used SASS as a CSS solution with BEM approach.
-   I used ESLint/Prettier to further increase development comfort.
-   The selector for Jamie's origin location uses debouncing to minimize the number of requests going to flights API while the user filters through the options.

# Structure of the project

All the source code is placed in the `/src` directory and the production files are put in the `/dist` directory. In the `/src` I have the following categories of files:

-   Preact components: `/src/App`, `/src/DesinationLocation`, `/src/Flights`, `/src/Forecast` and `/src/LocationSelector`. These components always render something. They might have `.scss` files with CSS content and they all have `index.ts` file to have a fine control over what exactly is exposed to the outer code.
-   API services: `/src/api/weather` for fetching forecast data and `src/api/flights` for fetching the data related to flights.
-   Utility funcions that are easily shareable: `/src/utils/date` for working with dates and `/src/utils/hooks` has custome hooks used in components.

# Possible improvements

-   Could improve UI/UX a lot, including much better Location selector. I would use much more interactive graphs for displaying data - for this, I would probably choose to work with SVG.
-   Fine-tuning webpack for more optimizations: build size, lazy-loading etc.
-   Both used APIs require secret keys for authorization purposes and I currently placed them directly in the codebase, which is not secure. So better to store those either on backend or in some kind of environment variables.
-   Currently any erros occuring during API requests are not handled, so could address it together with a nice mechanism to signal problems to the user.
-   The APIs return tons of data, so could imporve a lot by utilizing it.
-   I would like to have several categories for searching the flights, i.e. `cheapest`, `most comfortable` and `balanced`. Currently only the cheapest are returned.
-   I haven't used any centralized state management solution which is ok for such a small app, but is not viable as it grows. I would try to use Recoil or MobX, possibly Redux.
-   The current CSS management is ok, but for growing the application I would prefer to have some kind of scoped CSS solution.
