const inputElement = document.getElementById('search-input')
const resultElement = document.getElementById('search-result')
const containerElement = document.getElementById('container')

inputElement.value = ''

inputElement.addEventListener('input', function(event) {
    const value = event.target.value
    const resultArr = []

    searchArr.forEach(element => {
        element.title.forEach(el => {
            const a1 = el.toLowerCase()
            const a2 = value.toLowerCase()

            if (a1.includes(a2)) {
                const title = el
                    .replace(/->/g, '›')
                    .replace( /&lt;(.*?)&gt;/g, '<u-code-light>&lt;$1&gt;</u-code-light>')

                resultArr.push({
                    title,
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
        resultElement.innerHTML = '<div class="search-result-wrapper">'+html+'<div>'
    } else {
        resultElement.innerHTML = ''
    }
});

containerElement.addEventListener('click', function(event) {
    resultElement.innerHTML = ''
    inputElement.value = ''
});
