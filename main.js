$(document).ready(function() {
    $('#btn').on('click', () => {
        $.ajax({
            url: "https://learnwebcode.github.io/json-example/animals-1.json",
            dataType: "json",
            method: "GET",
            success: data => render(data)
        })
    })
    
})
let index = -1;
function render(DATA) {
    let skib = '';

    $('#animal-info').each(() => {
        index++
        skib += DATA[index].name + " is a " + DATA[index].species + "."
    })

    $('#animal-info').append(`<p>${skib}</p>`)
    console.log('render works')
}