# Wizard scorecard

This is my attempt at creating a scorecard for the card game [Wizard]().

Currently, it uses React and Redux and builds with Vite.
This project was borne out of a slight exasperation with the scorecards that come with the game, but mostly a desire for a useful side-project. When I started, I realized how far Redux (specifically, RTK) had come since I last started a project with it. I wasn't sure whether I'd like RTK, so I created an `rtk` branch so that I could move forward with development using the legacy Redux I'm familiar with (in the `main` branch) and doing the same work with RTK in the `rtk` branch (I occasionally merge `main` -> `rtk` for features and rewrite legacy Redux as RTK).

As of this README edit, this project is very incomplete.
## TODO:
### game logic
- confirm committing round data ("Are you sure?")
- confirm bids before advancing to score phase (hoc toggle - are you sure?)
- render previous rounds (include scores)
- indicate dealer
- calculate score
- endgame
- reset button?
- figure out edge cases (final round - no trump?)
### style
- find better filler for irrelevant phases
- make it look nice
- cull CSS and move everything to one file
- (maybe) obscure details of previous rounds until they get focus?
### technical details
- reset store on app load
- middleware for persistence
- ui testing
- delete setRound (probably)
- i18n (move all text into strings file)
- github static site
- more scaffolding steps?
