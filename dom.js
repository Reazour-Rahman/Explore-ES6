//add border
document.getElementById('add-border').addEventListener('click',
function() {
    document.getElementById('friend-container').style.border = '3px solid black'
})
//add background
document.getElementById('add-background').addEventListener('click',
function() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'green'
        friend.style.color = 'white'
    }
});
//add friend
document.getElementById('add-friend').addEventListener('click',
function() {
    const container = document.getElementById('friend-container');
    const makeDiv = document.createElement('div');
    makeDiv.classList.add('friend');
    makeDiv.innerHTML = `
            <h2 class="friend-name">Friend-5</h2>
            <p>Lorem, ipsum.</p>
    `
    container.appendChild(makeDiv)
});
//color friend name
document.getElementById('add-color').addEventListener('click',
function() {
    const names =document.getElementsByClassName('friend-name');
    for (const name of names) {
        name.style.color = 'blue'
    }
});
//reset
document.getElementById('reset').addEventListener('click',
function() {
    
});