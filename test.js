let plot_1 = {
    x: [0],
    y: [0],
    mode: 'lines'
};

for (length = plot_1.x.length-1;100000000 > length; length = plot_1.x.length-1) {
plot_1.x.push(plot_1.x[length] + 0.1);
plot_1.y.push(plot_1.x[length] ** 2);
};