const outer = document.getElementById('outer')
outer.addEventListener('click', (e) => {
    if (e.target.id == 'inner') {
        console.log('play black note');
    } else {
        console.log('play white note');
    }
})