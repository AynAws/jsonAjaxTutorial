let request = new XMLHttpRequest()
request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
request.onload = function() {
    console.log(request.responseText)
}