document.addEventListener('DOMContentLoaded', function() {
   
    function handleSubmit(event) {
        event.preventDefault(); 

        
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var category = document.getElementById('category').value;
        var items = document.getElementById('items').options[document.getElementById('items').selectedIndex].text;

        
        var table = document.querySelector('table'); 
        var newRow = table.insertRow(-1); 

        
        var cell1 = newRow.insertCell(0); 
        var cell2 = newRow.insertCell(1); 
        var cell3 = newRow.insertCell(2); 
        var cell4 = newRow.insertCell(3); 

       
        cell1.textContent = category;
        cell2.textContent = items;
        cell3.textContent = name;
        cell4.textContent = email;

        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('category').selectedIndex = 0;
        document.getElementById('items').selectedIndex = 0;
    }

    
    var form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});
