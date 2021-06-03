const food = [
    {
        name: 'chicken',
        coefficient: 0.42,
        price: 300   
    },
    {
        name: 'pig',
        coefficient: 0.38,
        price: 500
    },
    {
        name: 'fish',
        coefficient: 0.5,
        price: 1000
    }
]

const time = [
    {
        name: 'turbo',
        coefficient: 1
    },
    {
        name: 'middle',
        coefficient: 1.5
    },
    {
        name: 'max',
        coefficient: 2
    }
]

document.querySelectorAll('input[name=party], input[name=meat], input[name=people]').forEach(element => {
    element.addEventListener('change', calculate)
})

function calculate() {
    const meat = document.querySelector('input[name=meat]:checked').value
    const people = parseInt(document.querySelector('input[name=people]').value)
    const party = document.querySelector('input[name=party]:checked').value

    if (isNaN(people)) {
        alert('Введите количество шашлычников')
    } else {
        const foodObj = food.find(item => item.name === meat)

        const foodQ = foodObj.coefficient
        const timeQ = time.find(item => item.name === party).coefficient
        const mass = (foodQ * timeQ * people).toFixed(2)
        const price = foodObj.price * mass

        document.querySelector('h4').textContent = `Количество мяса: ${mass} кг, цена: ${price} руб.`
    }
}

calculate()