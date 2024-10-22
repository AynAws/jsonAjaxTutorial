$(document).ready(function() {
    $('#btn').on('click', () => {
        $.ajax({
            url: `https://learnwebcode.github.io/json-example/animals-${count}.json`,
            dataType: "json",
            method: "GET",
            success: data => render(data)
        },
        error: function(xhr, status, error) {
            console.error('Error:', error); // Handle errors
        })
    })
    
})
let index = -1
let count = 1
function render(DATA) {
    let skib = '';

    if (index === 2) {
        index = -1
        count++
    }

    $('#animal-info').each(() => {
        index++
        skib += DATA[index].name + " is a " + DATA[index].species + " that likes to eat "
        for (ii = 0; ii < DATA[index].foods.likes.length; ii++) {
            if (ii === 0) {
                skib += DATA[index].foods.likes[ii]
            } else {
                skib += " and " + DATA[index].foods.likes[ii]
            }
        }
        skib += " and dislikes "
        for (ii = 0; ii < DATA[index].foods.dislikes.length; ii++) {
            if (ii === 0) {
                skib += DATA[index].foods.dislikes[ii]
            } else {
                skib += " and " + DATA[index].foods.dislikes[ii]
            }
        }
        skib += '.'
    })

    $('#animal-info').append(`<p>${skib}</p>`)
    console.log('render works')

    if (count >= 3 && index === 2) {
        $('#btn').remove()
    }
}