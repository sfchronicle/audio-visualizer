
  var allClips = ["audioElement0", "audioElement1", "audioElement2"];

  console.log("hello");

  for (var i = 0; i < allClips.length; i++) {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById("audioElement"+ i.toString());
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();


  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);




  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  var frequencyData = new Uint8Array(200);

  var svgHeight = '90';
  var svgWidth = '300';
  var barPadding = '1';

  //console.log("#audioElementsvg" + i.toString());

  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  }

  var svg = createSvg('#audioElementsvg'+ i.toString(), svgHeight, svgWidth);


  // Create our initial D3 chart.
  svg.selectAll('rect')
     .data(frequencyData)
     .enter()
     .append('rect')
     .attr('x', function (d, j) {
        return j * (svgWidth / frequencyData.length);
     })
     .attr('width', svgWidth / frequencyData.length - barPadding);

  // Continuously loop and update chart with frequency data.
  function renderChart() {
    console.log(i);
     requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     //console.log(frequencyData);

     // Update d3 chart with new data.
     svg.selectAll('rect')
        .data(frequencyData)
        .attr('y', function(d) {
           //return (svgHeight - d)/2;
           return svgHeight-d/3;
        })
        .attr('height', function(d) {
           return d/3;
        })
        .attr('fill', '#000');
  }

  // Run the loop
  renderChart();

}

