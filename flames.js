document.getElementById('flamesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');
    const flames = ['Friend', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];
    
    let combinedNames = name1 + name2;
    
    for (let char of name1) {
        combinedNames = combinedNames.replace(char, '');
    }
    
    const count = combinedNames.length % flames.length;
    const result = flames[count];
    
    document.getElementById('result').innerText = `The result is: ${result}`;
});
