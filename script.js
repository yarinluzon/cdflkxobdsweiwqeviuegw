function go() {
    let inputname = document.getElementById('usereName');
    localStorage.setItem('name' , inputname.value);
    location.href = 'yarin.html';
}