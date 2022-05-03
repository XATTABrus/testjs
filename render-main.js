var head = `
<title>IS.Halper</title>
<link rel="stylesheet" type="text/css" media="screen" href="https://xattabrus.github.io/testjs/main.css" />
`;
document.head.innerHTML = head;

var main = `
<form class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner">
        <h3>Данные от робота</h3>
        <input type="text" placeholder="4 последние цифры номера телефона" id="phone-number" autocomplete="off">
        <input id="search_push" type="button" value="Извлечь и применить">
        <input id="search" type="button" value="Извлечь и отобразить данные">
        <div id="result">
            <br>
            <textarea id="result_area" placeholder="Результаты..." rows="4"></textarea>
        </div>
    </div>
</form>
`;
document.getElementById('indexId').innerHTML = main;

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://xattabrus.github.io/testjs/main.html', true);
// xhr.onreadystatechange = function() {
//     if (this.readyState !== 4) return;
//     if (this.status !== 200) return; // or whatever error handling you want
//     document.getElementById('indexId').innerHTML = this.responseText;
// };
// xhr.send();