var layout = {
    yaxis: {
      scaleanchor: "x"
    }
};

const input = document.getElementById('input');
const cos = num => {return Math.cos(num)}
const tan = num => {return Math.tan(num)}
const sin = num => {return Math.sin(num)}
const e = Math.E
const pi = Math.PI 

function f() {
    const check = CheckAnswer();
    let plot_1 = {
        x: [],
        y: [],
        mode: 'lines'
    };
    
    if (check[0] == false) {
        window.alert(`invaild charactor ${check[1]}`);
        return;
    };

    let value = input.value;
    let x = -100.01;

    while (100 > x) {
        plot_1.x.push(x += 0.001);
        plot_1.y.push(eval(value));
    };
    return Plotly.newPlot('plot', [plot_1], layout);
};

function CheckAnswer() {
    const checklist = ['x', 'c','o', 's', 't', 'a', 'n', 'i', 'e', 'p', '-', ' ', '0', '1', '2', '3', '4', 
    '5', '6', '7', '8', '9', '/', '.', '%', 
    '+', '[', ']', '(', ')', '*'];

    let leninput = input.value.length;
    let index = 0;

    while (leninput > index) {
        let char = input.value[index];
        if (checklist.includes(char)) {
            index += 1;
            continue;
        } else {
            return [false, char];
        };
    };
    return [true, true];
};

window.addEventListener('keydown', e => {
    if (e.key == 'Enter' && input.value != '') {f();} else {return};});

Plotly.newPlot('plot', [{x: 0, y: 0}], layout);