// obtaining data from API to list all users

const userList = document.getElementById('user-list');

axios.get('/users')
.then(res => {
    const users = res.data;
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.state}</td>
        `;
        userList.appendChild(row)
    });
})
.catch(error => {
    console.log(error);
})