const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form)

    formData.forEach((value, field) => {
        console.log(value);
        console.log(field);
    })
    
})
