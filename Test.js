const input = document.getElementById("input")
const answer = document.getElementById("answer")

function GetAnswer() {
    let check = CheckAnswer()
    if (check == true) {
        answer.innerHTML = `${input.value} = ` + String(eval(input.value))
        input.value = ''
    } else {
        answer.innerHTML = 'Error'
        input.value = ''
    }
}

function CheckAnswer() {
    const checklist = [' ', '0', '1', '2', '3', '4', 
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
            return false
        }
    }
    return true
}

window.addEventListener('keydown', e => {
    if (e.key == 'Enter' && input.value != '') {
            GetAnswer()
        } else {
        return
    }
})