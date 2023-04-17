function createUser(formData){
    const user = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  return user;
};

const form = document.getElementById('signup-form');

form.addEventListener('submit', async(evt)=> {
    evt.preventDefault();
    const formData = new FormData(form);
    const user = createUser(formData);

    const res = await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const data = await res.json();
    console.log(data);
});
