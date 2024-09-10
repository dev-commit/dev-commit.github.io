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

    let html = '';
    resultArr.forEach(element => {
        html += `
            <button
                class="search-button"
                onclick="
                    window.location.href = window.location.origin + '${element.path}';
                    window.location.reload()
                "
            >
                ${element.title}
            </button>
        `
    })

    resultElement.innerHTML = html
});


