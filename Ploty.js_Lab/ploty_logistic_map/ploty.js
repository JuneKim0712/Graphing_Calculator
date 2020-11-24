function eq(x) {
    let em = [0.5];
    let lim = 0

    while (100 > lim) {
        em.push(x * em[lim] * (1 - em[lim]))
        lim += 1
    }

    return em};

function lm() {
    let layout = {
        yaxis: {
          scaleanchor: "x"
        }
    };
    let plot = {x:[], y:[]};
    let lim = 0;

    while (100 > lim) {
    plot.x.push(x += 0.001);
    plot.y.push(eq(x));
    Plotly.newPlot('plot', [plot], layout);
    };

    console.log(plot)

    return Plotly.newPlot('plot', [plot], layout);
};
