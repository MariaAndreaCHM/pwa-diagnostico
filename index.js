

    const getList = () => {
        fetch('https://reqres.in/api/users', {
            method: 'GET'
        }).then(res => res.json()).then(res => {
            let tbody = document.getElementById('tbody');
            let content = '';
    
            res.data.forEach((item, index) => {
                content += `<tr class="text">
                                <td>${index + 1}</td>
                                <td>${item.email}</td>

                                <td>${item.first_name}</td>
                                <td>${item.last_name}</td>
                                <td><img src="${item.avatar}" alt=""></td>

                            </tr>`;
            });
    
            tbody.innerHTML = content;
    
        }).catch(console.log);
    }
    getList()
    
    const save = () => {
        let person = {
            first_name: document.getElementById('firstname').value,
            last_name: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            
        }
    
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "appliaction/json"
            },
            body: JSON.stringify(person)
        }).then(res => {
    
        }).catch(console.log);
    }
    
    const update= id => {
        let person = {
            first_name: document.getElementById('name').value,
            last_name: document.getElementById('last').value,
            email: document.getElementById('email2').value,
            
        }
    
        fetch('https://reqres.in/api/users', {
            method: 'PUT',
            headers: {
                "Content-Type": "appliaction/json"
            },
            body: JSON.stringify(person)
        }).then(res => {
            
        }).catch(console.log);
    }