export default function getIngriedients(data) {
    let result = null
    //TODO implement
    let strIngredients = Object.entries(data).filter((item)=>{
        return item[0].includes('strIngredient') && item[1]
    })

    strIngredients.sort(function (a, b) {
        return parseInt(a[0].replace('strIngredient', '')) - parseInt(b[0].replace('strIngredient', ''));
    })

    let strMeasures = Object.entries(data).filter((item)=>{
        return item[0].includes('strMeasure')
    })
    strMeasures.sort(function (a, b) {
        return parseInt(a[0].replace('strMeasure', '')) - parseInt(b[0].replace('strMeasure', ''));
    })

    result = strIngredients.map((item, i)=>{
        let pointerToMeasurement = ('strMeasure'+(i+1))
        return {ingriedient: item[1], measurement: data[pointerToMeasurement], id: data.idMeal}
    })

    return result
}