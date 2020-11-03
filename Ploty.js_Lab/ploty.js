function fx() {
    let plot_1 = {
        x: [0],
        y: [0],
        mode: 'lines'
    };    
    for (i=100000;i > plot_1.y[plot_1.x.length-1];) {
    plot_1.x.push(plot_1.x[plot_1.x.length-1] + 0.1);
    plot_1.y.push(plot_1.x[plot_1.x.length-1] ** 2);
    };
    return [plot_1]
};
var layout = {
    yaxis: {
      scaleanchor: "x"
    }
}

Plotly.newPlot('plot', fx(), layout);