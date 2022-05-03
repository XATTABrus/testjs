var api_url = 'https://api.github.com/post';
// var api_url = 'http://10.80.0.95:8090/select_data'; // local
// var api_url = 'http://10.77.20.35:8090/select_data'; //minzdrav

var oms_number = null;
var birthday = null;
var input_number = null;

function httpPost(url, key, show_block) {
    const params = {
        key: key
    };
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify(params)); // Make sure to stringify

    http.timeout = 1000; // Set timeout to 4 seconds (4000 milliseconds)
    http.ontimeout = function() {
        alert('Время ожидания истекло, обратитесь к администратору!');
    }

    http.onerror = function() {
        alert('API не доступно, обратитесь к администратору!')
    }
    http.onload = function() {
        result_json = JSON.parse(http.responseText);
        if (Object.keys(result_json).length === 0) {
            alert('Запись не найдена');
            document.getElementById('result').style.display = "none";
        } else {
            oms_number = result_json['Номер полиса'];
            birthday = result_json['Дата рождения1'];

            var birthday_2 = result_json['Дата рождения2'];
            var full_phonenumber = result_json['Номер телефона'];
            var last_name = result_json['Фамилия'];
            var first_name = result_json['Имя'];
            var second_name = result_json['Отчество'];

            // var service = "Вызов врача на дом";
            var service = "Запись ко врачу";
            var is_attachment = false;

            if (service == "Вызов врача на дом")
                var service_id = 1;
            else if (service == "Запись ко врачу" && is_attachment == true)
                var service_id = 2;
            else if (service == "Запись ко врачу" && is_attachment == false)
                var service_id = 3;
            else
                var service_id = 0;

            // Тестовая запись
            oms_number = '7449500886000184';
            birthday = '13.10.1994';
            birthday_2 = '13101994';
            full_phonenumber = '8779942649';
            last_name = 'Тестовая';
            first_name = 'Екатерина';
            second_name = 'Валерьевна';

            if (show_block == true) {
                document.getElementById('result').style.display = "inline";

                var text_result = `ОМС: ${oms_number} \nД.Р.: ${birthday} \nФамилия: ${last_name} \nИмя: ${first_name} \nОтчество: ${second_name} \nНомер телефона: ${full_phonenumber}`;
                document.getElementById('result_area').value = text_result;
            } else {
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, {
                        "message": "clicked_browser_action",
                        "input_number": input_number,
                        "oms_number": oms_number,
                        "birthday": birthday,
                        "full_phonenumber": full_phonenumber,
                        "service": service,
                        "service_id": service_id
                    });
                });
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var search_btn = document.getElementById('search');
    var search_push_btn = document.getElementById('search_push');
    var input_phone = document.getElementById('phone-number');

    input_phone.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            search_push_btn.click();
        }
    });

    search_btn.addEventListener('click', function() {
        input_number = document.getElementById('phone-number').value;
        httpPost(api_url, input_number, true);
    });

    search_push_btn.addEventListener('click', function() {
        input_number = document.getElementById('phone-number').value;
        httpPost(api_url, input_number, false)
        setTimeout(function() { window.close(); }, 700);
    });

    alert('loaded');
});