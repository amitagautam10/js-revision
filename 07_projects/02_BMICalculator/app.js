const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    let BMI = 0   
    if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = "Please give a valid height"
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
      }

      else{
         BMI = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`
      }
       
      if(BMI < 18.6){
        results.innerHTML += `<br/> Under weight`
      }

      else if(BMI >= 18.6 && BMI <= 24.9){
        results.innerHTML += `<br/> Normal range`
      }

      else if(BMI >= 24.9){
        results.innerHTML += `<br/> Over weight`
      }
})