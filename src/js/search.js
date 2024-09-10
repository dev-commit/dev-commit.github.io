const inputElement = document.getElementById('search-input')
const resultElement = document.getElementById('search-result')
const linksElement = document.getElementById('links')

inputElement.value = ''

inputElement.addEventListener('input', function(event) {
    const value = event.target.value
    const resultArr = []

    searchArr.forEach(element => {
        element.title.forEach(el => {
            const a1 = el.toLowerCase()
            const a2 = value.toLowerCase()

            if (a1.includes(a2)) {
                resultArr.push({
                    title: el,
                    path: element.path
                })
            }
        })
    })

    let html = '';
    resultArr.forEach(element => {
        html += `
            <button
                class="search-button"
                onclick="
                    history.pushState(null, '', window.location.origin + '${element.path}');
                    // window.location.href = window.location.origin + '${element.path}';
                    window.location.reload();
                "
            >
                ${element.title}
            </button>
        `
    })

    if (value !== '') {
        resultElement.innerHTML = html
    } else {
        resultElement.innerHTML = ''
    }
});

linksElement.addEventListener('click', function(event) {
    resultElement.innerHTML = ''
    inputElement.value = ''
});
