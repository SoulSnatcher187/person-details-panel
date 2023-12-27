async function loadData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

let personsData;

function renderSummaryPane() {
    const summaryPane = document.getElementById('summaryPane');
    summaryPane.innerHTML = '';

    personsData.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.className = 'person-summary';
        personDiv.textContent = person.name;

        personDiv.addEventListener('click', () => showPersonDetails(person));
        summaryPane.appendChild(personDiv);
    });
}

function showPersonDetails(person) {
    const detailPane = document.getElementById('detailPane');
    detailPane.innerHTML = '';

    const detailDiv = document.createElement('div');
    detailDiv.className = 'person-details';

    const keys = Object.keys(person);
    keys.forEach(key => {
        const detailItem = document.createElement('p');
        detailItem.innerHTML = `<strong>${key}:</strong> ${person[key]}`;
        detailDiv.appendChild(detailItem);
    });

    detailPane.appendChild(detailDiv);
}

loadData().then(data => {
    personsData = data;
    renderSummaryPane();
});
