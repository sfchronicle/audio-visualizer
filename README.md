# Audio visualizations

For the story on Cecilia Lam, which involves many audio clips of 911 dispatch calls.

[Reference](https://github.com/bignerdranch/music-frequency-d3) and [documentation](https://www.bignerdranch.com/blog/music-visualization-with-d3-js/). I chose to use this as a reference because I like Javascript and D3, but I've included some other options below if this one doesn't work out. 

#### Workflow
I ran this with `python -m SimpleHTTPServer` instead of  `npm install` and `grunt`.

#### Goal
To be able to make many mini audio visualizations of the 911 calls, which would presumably be embedded in the longform story on Lam.

#### What I changed from original
Added multiple audio files, got rid of buttons for pause and volume toggle, added HTML audio bar, made visual changes.

#### Issue
The way the code is structured now makes it unable to handle multiple audio files. Only the visualization for the last audio file gets rendered. If you comment line 47 of `app.js` back in, you'll see that `renderChart()` gets stuck in a loop on the last audio file. Line 48, which calls `renderChart()` recursively with `window.requestAnimationFrame`, is where the issue lies.

#### Other options
- [Audiogram](https://github.com/nypublicradio/audiogram) -- converts audio to video
- [Wavesurfer.js](https://wavesurfer-js.org/) -- a static visualization of the audio frequencies




  









