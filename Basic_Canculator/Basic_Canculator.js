const input = document.getElementById("input");
const answer = document.getElementById("answer");

function GetAnswer() {
    let check = CheckAnswer();
    if (check[0] == true) {
        answer.innerHTML = `Ans = ${input.value}`;
        input.value = String(eval(input.value));
    } else {window.alert(`invaild charactor ${check[1]}`)};
};

function CheckAnswer() {
    const checklist = [' ', '0', '1', '2', '3', '4', 
    '5', '6', '7', '8', '9', '/', '.', '%', 
    '+', '[', ']', '(', ')', '*'];
    let leninput = input.value.length;
    let index = 0;
    while (leninput > index) {
        let char = input.value[index];
        if (checklist.includes(char)) {
            index += 1;
            continue;
        } else {return [false, char]};
    };
    return [true, true];
};

window.addEventListener('keydown', e => e.key == 'Enter' && input.value != '' ? GetAnswer() : false)