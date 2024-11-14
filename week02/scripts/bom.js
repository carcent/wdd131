document.addEventListener("DOMContentLoaded", function() {

    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

 
    button.addEventListener('click', function() {

        const chapter = input.value.trim();

        if (chapter !== '') {

            const li = document.createElement("li");
            const deleteButton = document.createElement("button");


            li.textContent = chapter;  
            deleteButton.textContent = '❌'; 

            li.appendChild(deleteButton);
            list.appendChild(li);

            deleteButton.addEventListener('click', function() {
                list.removeChild(li); 
            });

            input.value = '';
            input.focus();
        } else {

            input.focus();
        }
    });


    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            button.click();  
            
        }
    });
});