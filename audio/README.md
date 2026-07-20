# Local audio files

Two releases aren't on streaming platforms, so the site plays them directly instead of
linking out.

## ESPN — "Why Not Us? UMES Volleyball"
Single file, HTML5 audio player. Drop the mp3 in this folder as:

- espn-why-not-us.mp3

## Legion Of Doom vs Triune
Full 12-track album, already in place at `audio/legion-of-doom/`, numbered 01–12.
This one renders as an expandable tracklist on the site — click the album row to open
it, click any track to play it. No further setup needed unless you want to swap a file;
if you do, keep the same filenames referenced in the `tracks` array inside js/main.js,
or update the paths there to match new filenames.

## A note on file size
The Legion Of Doom files total about 114MB, which is fine for GitHub Pages to host and
serve, but it does make the repo heavier and slower to clone/push. If that ever becomes
a problem, re-exporting at 192kbps instead of 320kbps roughly halves the size with very
little audible difference for most listeners.
