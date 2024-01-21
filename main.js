const items = document.querySelector('.items')
const cards = document.querySelector('.cards')
const json = () => {
    const xhr =new XMLHttpRequest()
    xhr.open('GET','person.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.addEventListener('load',() => {
        const persons = JSON.parse(xhr.response)
        persons.forEach(persons =>  {
            const person = document.createElement('div')
            person.classList.add('style')
            person.innerHTML = `
            <img src = '${persons.person_photo}'alt = 'img' class="img">
            <h2>name:${persons.name}</h2>
            <span>age:${persons.age}</span>
            `
            cards.append(person)
        })
    })
}
json()
const request = new XMLHttpRequest()
request.open('GET','person.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.addEventListener('load',() => {
    const answer = JSON.parse(request.response)
    console.log(answer)
})
