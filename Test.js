const f = document.getElementById("f")

function update(e) {
    if (e.key == 'Enter') {
        f.innerHTML = ''
    } else {
        f.innerHTML += e.key
    }
}

window.addEventListener('keydown', e => update(e))