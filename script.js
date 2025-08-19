const form = document.getElementById('simulator-form')
const surfaceInput = document.getElementById('simulator-surface')
const frequencySelect = document.getElementById('simulator-frequency')
const windowsCheckbox = document.getElementById('simulator-windows')
const resultDiv = document.getElementById('simulation-result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const surface = parseFloat(surfaceInput.value)
    const frequency = frequencySelect.value
    const windows = windowsCheckbox.checked

    const rate = 1.50
    let multiplierPerFrequency = 0

    if (frequency === 'daily') {
        multiplierPerFrequency = 5
    } else if (frequency === 'weekly') {
        multiplierPerFrequency = 1
    } else if (frequency === 'weekly-2') {
        multiplierPerFrequency = 2
    }

    let totalCost = (surface * rate) * multiplierPerFrequency

    if (windows) {
        totalCost += (totalCost * 0.1)
    }

    const totalCostTTC = totalCost * 1.2

    resultDiv.innerHTML =
        `<h3>Résultat Simulation</h3>
               <p>Montant HT: ${totalCost.toFixed(2)}€</p>
               <p>Montant TTC: ${totalCostTTC.toFixed(2)}€</p>
              `
})