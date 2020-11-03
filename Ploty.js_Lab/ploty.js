function fx() {
    let plot_1 = {
        x: [0],
        y: [0],
        mode: 'lines'
    };    
    for (i=10;i > plot_1.y[plot_1.x.length-1];) {
    plot_1.x.push(plot_1.x[plot_1.x.length-1] + 0.1);
    plot_1.y.push(plot_1.x[plot_1.x.length-1] ** 2);
    };
    let fixed = {
        x: [plot_1.y[plot_1.x.length-1]],
        y: [plot_1.y[plot_1.x.length-1]],
        mode: "markers"
    };
    return [plot_1, fixed]
};

Plotly.newPlot('plot', fx());