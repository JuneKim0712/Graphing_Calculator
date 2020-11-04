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
    if (CheckAnswer() == 
    let value = input.value
    let x = -10
    while (9.99 > x) {
        plot_1.y.push(eval(value));
        plot_1.x.push(x += 0.01);
    };
    return Plotly.newPlot('plot', [plot_1], layout);
};

function CheckAnswer() {
    const checklist = ['y', ' ', '0', '1', '2', '3', '4', 
    '5', '6', '7', '8', '9', '/', '.', '%', 
    '+', '[', ']', '(', ')', '*']
    let leninput = input.value.length
    let index = 0
    while (leninput > index) {
        let char = input.value[index]
        if (checklist.includes(char)) {
            index += 1
            continue
        } else {
            return [false, char]
        }
    }
    return [true, true]
}

window.addEventListener('keydown', e => {
    if (e.key == 'Enter' && input.value != '') {
            f()
        } else {
        return
    }
})

Plotly.newPlot('plot', [{x: 0, y: 0}], layout);