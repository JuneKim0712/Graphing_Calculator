var layout = {
    yaxis: {
      scaleanchor: "x"
    }
}

const input = document.getElementById('input')

function f() {
    let plot_1 = {
        x: [],
        y: [],
        mode: 'lines'
    };
    let value = input.value
    let x = -10
    while (9.99 > x) {
        plot_1.y.push(eval(value));
        plot_1.x.push(x += 0.01);
    };
    return Plotly.newPlot('plot', [plot_1], layout);
};

window.addEventListener('keydown', e => {if (e.key == 'Enter') {
    f()
} else {
    return
}})
Plotly.newPlot('plot', [{x: 0, y: 0}], layout);