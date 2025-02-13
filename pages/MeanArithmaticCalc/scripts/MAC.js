let data_set = [];



function updateDataset() {
    let datasetDisplay = document.getElementById('dataset');
    let datasetString = data_set.join(', ');
    datasetDisplay.innerHTML = datasetString;
    mean();
}



function mean() {
    let meanElement = document.getElementById('mean');
    if (data_set.length === 0) {
        meanElement.innerHTML = '0';
    } else {
        let sum = 0;
        for (let i = 0; i < data_set.length; i++) {
            sum += data_set[i];
        }
        let mean = sum / data_set.length;
        meanElement.innerHTML = mean;
    }
}



function addButton() {
    let input = document.getElementById('input');
    let inputFloat = parseFloat(input.value);
    if (isNaN(inputFloat)) {
        alert('Please enter a valid number.');
    }
    else {
        data_set.push(inputFloat);
        updateDataset();
    }
}



function removeButton() {
    let input = document.getElementById('input');
    let inputFloat = parseFloat(input.value);

    if (isNaN(inputFloat)) {
        alert('Please enter a valid number.');
    }
    else {
        let searchValue = data_set.indexOf(inputFloat);
        if (searchValue === -1) {
            alert('Value not found in the dataset.');
        }
        else {
            data_set.splice(searchValue, 1);
            updateDataset();
        }
    }
}