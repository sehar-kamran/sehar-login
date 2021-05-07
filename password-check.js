function checkforblank() {
        
    if (document.getElementById('user').value == "") {
        alert('Please provide a valid username.');
        return false;
    } else if (document.getElementById('password').value == "") {
        alert('Please provide a valid password.');
        return false;
    } else if (document.getElementById('user').value == 'sehar.k'){
        if (document.getElementById('password').value == 'kamran'){
            window.setTimeout(function(){

// Correct password redirect. How did you find me?
window.location.href = "https://sehar-kamran.github.io/sehar-login/loading.html";

}, 1);
        } else return alert('Incorrect username or password.')
    } else return alert('Incorrect username or password.')
}
