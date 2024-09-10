const inputElement = document.getElementById('search-input');
const resultElement = document.getElementById('search-result');

inputElement.value = ''

inputElement.addEventListener('input', function(event) {
    const value = event.target.value;

    const resultArr = []

    searchArr.forEach(element => {
        element.title.forEach(el => {
            const a1 = el.toUpperCase()
            const a2 = value.toUpperCase()

            if (a1.includes(a2)) {
                resultArr.push({
                    title: el,
                    path: element.path
                })
            }
        })
    })

    const onClick = `
        console.log(1);
        console.log(2)
    `

    let html = '';
    resultArr.forEach(element => {
        // html += `<a class="search-link" href="${element.path}">${element.title}</a>`
        html += `<button class="search-link" onclick="${onClick}">${element.title}</button>`
    })

    resultElement.innerHTML = html
});


