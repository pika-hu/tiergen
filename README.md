# TierGen

TierGen is a modern evolution of online tier list makers that aims to be frictionless while adding powerful new features that streamline the user experience. At baseline it will replicate the standard features of existing tier list makers through a more intuitive interface, but future enhancements will implement features that address key user pain points when making tier lists through existing tools. Design goal is to be simple and easy to setup without needing to authenticate to private APIs, create a backend database/server, or bogged down by feature creep.

**Note**: One of the goals of this project is to leverage gen AI as much as possible to develop the codebase. Feel free to fork this repo, but please don't try to push any code changes to it. Also, since this is a personal project for educational purposes, it aims to reduce cost as much as possible, so it isn't designed to be scalable and may use practices that are not compatible with commercial use.

## Implemented Features

### Baseline Core Functionality

- Display default tier list and items as draggable objects
- Arrange items via drag and drop
- Create tier function with selectable color and name
- Arrange tier functionality via drag and drop
- Toggle Settings module to delete tier, clear tier of ranked items, and change color
- Rename tiers and items through double-click
- Create new items through textbox generation and bulk image upload
- Local persistent storage through caching
- Reset to default tier list display while clearing cache
- Export tier list as image
- Generate alternative text format for clarity

## Possible Future Features

### Additional Tier Making Functionality

Features that don't qualify as baseline functionality but are still enhancement that can be made to the tier making experience.

- Name tier list through title
- **(shelved)** Select multiple items through rectangular drag and ctrl-click
  - Originally had this implementation but wasn't super happy with it. May revisit at a later time.
- Search bar to easily find specific labeled items to rank or identify when dealing with many items
- Add Help button to bring up instructions, tips, and other informationals
- Multi-platform optimization (largely mobile)

### Easy Addition of New Items through Integrated Search

One of the biggest friction points to making tier lists is creating all the rankable items. An integrated search engine would allow users to quickly select and title images to make rankable items.

- Add search box where user can query what they are looking for
- Integrate to different APIs to fetch images corresponding to user input
  - Music API for songs, artists, and albums - Spotify not accepting new app integrations right now, will look into alternatives like iTunes or last.fm
  - Game API for video games, Topsters uses IGDB
  - Movie API for movies, TV shows, and actors. Topsters uses TMDB, maybe look into "people" function
- Add generic search as the option to scrape the internet for pictures
  - Solution 1: Involves gemini with google search integration. It seems actually cheaper than direct google search API. Likely involves some app integration and tighter quota before paid service, but would be more fluid.
  - Solution 2: Duckduckgo search integration through proxy
- Use Gemini/other genAI as natural language processor middleware allowing users to write more free-form queries while the AI will translate it into a searchable input

### Built-in Web-based Music Player

Inspired by <https://ostier.top/> for ranking Lost Ark soundtracks. An integrated music player would be a way for people ranking music to easily listen to a track without having to go to a 3rd party. May fork this into it's own separate tier maker because of niche application.

- Auto-derive item type to identify if a rankable item is a song that can be played
- Create exclusive area to drop item in that pulls the item name as a search input string
- Implement media controls like play/pause, seek, and volume control
- Integrate with authless solution to 
  - This is going to be the hard part, I've been trying to see how Discord music bots get their audio tracks

### Social Features

A big motivation to create tier lists is to share them. These features would make it easier to do so. The more interesting features would involve setting up a backend which does conflict with the intentional simple front-end only design that can easily be used plug-and-play, but may incorporate this in the future if the project grows.

- Social media integration for easy sharing to selected social media platforms
- Import existing tier list to use as a template or to view other people's rankings
  - Develop JSON framework for import/export or leverage Gen AI to generate tier list based on export output
- **(Server dependency)** User accounts through OAuth to save created tier lists server-side
- **(Server dependency)** Live collaborative ranking using websockets to allow users to interact with the same board in real-time