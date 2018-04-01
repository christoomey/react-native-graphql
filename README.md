React Native - GraphQL Sample App
=================================

This repository contains the code for a sample app I used alongside a
presentation I gave at the [March 2018 meeting][] of the [Boston React Native
Meetup group][]. You can see a recoding of the talk in [the meetup recording][],
starting at 32 minutes in.

The goal of the presentation was to provide a short overview of GraphQL,
specifically from the point of view of React Native developers, or more
generally mobile client developers.

The sample app demonstrates how to integrate a React Native (or React) app with
a GraphQL API. The app used the [Apollo framework][] along with its stellar
[React bindings][] to interact with the [GitHub GraphQL API][]. In addition, the
focus was on the pattern of collocating queries with components, specifically
highlighting the use of `fragment`s within sub-components to allow each
component to own its data, while allowing the application to compose queries
from the fragments and efficiently interact with the GraphQL API.

The slides for the presentation can be found [here][].

[march 2018 meeting]: https://www.meetup.com/Boston-React-Native/events/248243386/
[boston react native meetup group]: https://www.meetup.com/Boston-React-Native/
[apollo framework]: https://www.apollographql.com/docs/react/
[react bindings]: https://github.com/apollographql/react-apollo
[github graphql api]: https://developer.github.com/v4/
[here]: https://www.dropbox.com/s/asgbdi7f4z2nvoz/react-native-graphql.pdf?dl=0

[the meetup recording]: https://www.youtube.com/watch?v=-siuWbeaN4M&feature=youtu.be&t=32m25s

Running the Sample App
----------------------

The sample app was built using [Expo][], so you'll need to download their
desktop app in order to run this app.

In addition, you'll need to generate a GitHub access token to authenticate with
the GraphQL API. You can follow [these instructions][] to generate a token.

Once you've generated a token, you'll need to add it to a `.env` file:

```sh
# .env file in the root of the project
GITHUB_TOKEN=<your-token-here>
```

**Note** - The app will be connected to live data and your account based on the
token you provide. The only action built into the app is to Star & Unstar
repositories, but just be super clear, those actions will be refelected on
github.com.

Exploring the App
-----------------

The focus of the sample app is to demonstrate how we can colocate queries
alongside our components using GraphQL and Apollo. Most notable is the UserPage
component (`src/pages/UserPage.js`) and the associated tree of sub-components.

The `UserPage` has its query defined right alongside it in the component file.
The query itself pulls in GraphQL `fragment`s to compose the full query for the
page. These fragments themselves are defined alongside the components that need
the data, for example in `src/componenst/Org.js` and `src/components/Repo.js`
files.

The `Repo` component also pulls in sub-fragments from the
`src/components/Language.js` and `src/components/ToggleStarButton.js` to define
the full `Repo` fragment. This demonstrates how we can use GraphQL query syntax,
and specifically fragments, to allow each of our components to manage the data
they uniquely need, and concisely express those needs to parent components.

The `query-samples/` directory contains the combined query for the UserPage to
demonstrate what the query looks like when all the fragments are stitched
together. `query-samples/user-query-with-fragments.graphql` contains the actual
query with fragments alongside the main query, while
`query-samples/user-query.graphql` contains the query with the fragments
inlined, showing what it would look like had we written it as a single top-level
query.

[expo]: https://expo.io/
[these instructions]: https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql
