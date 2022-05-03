// function init_widget() {
//     var modal = document.getElementById("bot_widget_modal");

//     if (!modal) {
//         modal = document.createElement("div");
//         modal.setAttribute('id', "bot_widget_modal");
//         modal.setAttribute('style', 'display: block; position: fixed; z-index: 2; left: 0; bottom: 0; width: 20%; overflow: auto;');
//         document.getElementsByTagName('body')[0].appendChild(modal);
//     }

//     modal = document.getElementById("bot_widget_modal");
//     $('#bot_widget_modal').draggable({ containment: "parent" }); // Включить перемещение

//     var modal_content = document.createElement("div");
//     modal_content.setAttribute('style', 'background-color: #fefefe; margin: 0; padding: 20px; border: 1px solid #888; border-radius: 25px; border: 2px solid #1E90FF;');
//     modal_content.setAttribute('id', 'bot-widget')

//     var text = document.createElement("p");
//     text.textContent = "Вспомогательный виджет";

//     var clear = document.createElement("p");
//     clear.setAttribute("id", "bot_clear");
//     clear.textContent = "Очистить";

//     modal_content.appendChild(text);
//     modal_content.appendChild(clear);

//     modal.appendChild(modal_content);
// }


function init_widget() {
    var modal = document.getElementById("bot_widget_modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.setAttribute('id', "bot_widget_modal");
        modal.setAttribute('class', 'modal');
        document.getElementsByTagName('body')[0].appendChild(modal);
    }

    modal = document.getElementById("bot_widget_modal");
    $('#bot_widget_modal').draggable({ containment: "parent" }); // Включить перемещение

    var body_widget = `
    <div class="modal-content">
            <div class="modal-header">
                <span class="close" id="bot_clear">&#10006;</span>
                <p>Вспомогательный виджет</p>
            </div>
            <div class="modal-body" id="bot_widget_body">
                <table class="styled-table">
                    <tbody id="bot_widget_content_body">

                    </tbody>
                </table>
            </div>
        </div>
    `;

    modal.innerHTML = body_widget;
}


function load_jquery() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css';
    document.head.appendChild(link);

    var style = document.createElement('style');
    style.innerText = '.modal{font-family:Arial,Helvetica,sans-serif;position:fixed;z-index:2;left:0;top:0;overflow:auto}.modal-content{position:fixed;bottom:0;background-color:#fefefe;border:1px solid #5cb85c;min-width:400px}.close{color:#fff;float:right;font-size:25px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}.modal-header{padding:2px 16px;background-color:#5cb85c;color:#fff}.modal-footer{padding:2px 16px;background-color:#5cb85c;color:#fff}.styled-table{border-collapse:collapse;font-size:.9em;font-family:sans-serif;min-width:100%;box-shadow:0 0 20px rgba(0,0,0,.15);overflow-x:clip;overflow-y:scroll;display:block}.styled-table thead tr{background-color:#009879;color:#fff;text-align:left}.styled-table td,.styled-table th{padding:10px 17px}.styled-table tbody{display:table;width:100%}.styled-table tbody tr{border-bottom:1px solid #ddd}.styled-table tbody tr:nth-of-type(even){background-color:#f3f3f3}.styled-table tbody tr:last-of-type{border-bottom:2px solid #009879}.styled-table tbody tr.active-row{font-weight:700;color:#009879}.button-2{background-color:rgba(51,51,51,.05);border-radius:8px;border-width:0;color:#333;cursor:pointer;display:inline-block;font-family:"Haas Grot Text R Web","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;line-height:20px;list-style:none;margin:0;padding:0 12px;text-align:center;transition:all .2s;vertical-align:baseline;white-space:nowrap;user-select:none;-webkit-user-select:none;touch-action:manipulation}'
    document.head.appendChild(style);

    // var link_bs = document.createElement('link');
    // link_bs.rel = 'stylesheet';
    // link_bs.type = 'text/css';
    // link_bs.href = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css';
    // document.body.appendChild(link_bs);

    // var myScript_jq = document.createElement("script");
    // myScript_jq.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js");
    // document.body.appendChild(myScript_jq);

    // myScript_jq.addEventListener("load", function() {
    //     console.log("JQeury is ready to rock and roll!");

    //     var myScript_ui = document.createElement("script");
    //     myScript_ui.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js");
    //     document.body.appendChild(myScript_ui);

    //     myScript_ui.addEventListener("load", function() {
    //         console.log("JQeury UI is ready to rock and roll!");
    //     }, false);

    // }, false);
}

function find_person(oms_number, birthday) {
    document.getElementsByClassName("editControlInner")[0].firstChild.value = birthday;

    var oms_element = document.getElementsByClassName("edit-input")[0].firstChild;
    oms_element.value = oms_number;
    oms_element.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
    oms_element.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
    oms_element.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
    oms_element.dispatchEvent(new Event('input', { bubbles: true }));
    oms_element.dispatchEvent(new Event('change', { bubbles: true }));

    document.getElementsByName('ButSearchPatient')[0].click()
}

function clear_widget() {
    document.getElementById('bot_widget_content_body').innerHTML = "";
    init_widget();
}

function executeFuncAfterLoadDom(iterator_control, max_cycle, func) {
    const el = $('a:contains("Участковые врачи МО прикрепления")');
    console.log('iterator_control: ' + iterator_control);
    if (el.length) {
        func();
        return;
    } else {
        if (iterator_control < max_cycle) {
            iterator_control++;
            setTimeout(executeFuncAfterLoadDom, 500, iterator_control, max_cycle, func);
        } else {
            console.log('Element is not found!');
        }
    }
}

function create_line(name, val, elem_id = null, action_id = null) {
    var bot_widget_content_body = document.getElementById('bot_widget_content_body');

    var tr = document.createElement('tr');
    var td_name = document.createElement('td');
    td_name.textContent = name;
    var td_val = document.createElement('td');
    // td_val.innerHTML = '&#9998;' + val;
    td_val.textContent = val;
    td_val.setAttribute('class', 'bot_bt_copy');
    if (elem_id)
        td_val.setAttribute('id', elem_id);
    var td_action = document.createElement('td');

    if (action_id) {
        var btn = document.createElement('button');
        btn.setAttribute('class', 'button-2');
        btn.setAttribute('id', action_id);
        btn.textContent = '+'
        td_action.appendChild(btn);
    }

    tr.appendChild(td_name);
    tr.appendChild(td_val);
    tr.appendChild(td_action);
    bot_widget_content_body.appendChild(tr);
}

$(document).ready(function() {
    load_jquery();

    $(document).on("click", ".bot_bt_copy", function() {
        console.log('clicked bot_bt_copy');
        var copyText = this.parentElement.childNodes[1].innerText;

        const el = document.createElement('textarea');
        el.value = copyText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    });

    $(document).on("click", "#bot_service_bt_set", function() {
        console.log('clicked bot_service_bt_set');
        $('a:contains("Вызов врача на дом")').parent().trigger('click');
    });

    $(document).on("click", "#bot_phone_bt_set", function() {
        console.log('clicked bot_phone_bt_set');
        document.getElementsByName('PATIENT_PHONE')[1].childNodes[0].childNodes[0].value = $('#bot_phone').text()
    });

    $(document).on("click", "#bot_clear", function() {
        console.log('clicked bot_clear');
        clear_widget();
    });

    $(document).on("click", "#refreshBtn", function() {
        console.log('clicked bot_clear');
        clear_widget();
    });

    if ($('#refreshBtn').length) {
        init_widget();
    };

    console.log("ready!");
});

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.message == "clicked_browser_action") {
//             clear_widget();
//             find_person(request.oms_number, request.birthday);

//             switch (request.service_id) {
//                 case 1:
//                     executeFuncAfterLoadDom(0, 10, function() { $('a:contains("Вызов врача на дом")').parent().trigger('click'); });
//                 case 2:
//                     executeFuncAfterLoadDom(0, 10, function() { $('a:contains("Запись к врачу в МО по прикреплению")').parent().trigger('click'); });
//                 case 3:
//                     executeFuncAfterLoadDom(0, 10, function() { $('a:contains("Запись к врачу в другие МО")').parent().trigger('click'); });
//             };

//             create_line('Услуга', request.service, null, 'bot_service_bt_set');
//             create_line('Номер телефона', request.full_phonenumber, 'bot_phone', 'bot_phone_bt_set');
//             create_line('ОМС', request.oms_number);
//             create_line('День рождения', request.birthday);
//         }
//     }
// );

document.addEventListener('clicked_browser_action', function(evn) {
    clear_widget();
    // var request = evn.detail;
    var request = Object.assign({}, evn.detail);

    // var request = cloneInto(
    //     evn.detail,
    //     window, { cloneFunctions: true });

    find_person(request.oms_number, request.birthday);

    switch (request.service_id) {
        case 1:
            executeFuncAfterLoadDom(0, 10, function() { $('a:contains("Вызов врача на дом")').parent().trigger('click'); });
        case 2:
            executeFuncAfterLoadDom(0, 10, function() { $('a:contains("Запись к врачу в МО по прикреплению")').parent().trigger('click'); });
        case 3:
            executeFuncAfterLoadDom(0, 10, function() { $('a:contains("Запись к врачу в другие МО")').parent().trigger('click'); });
    };

    create_line('Услуга', request.service, null, 'bot_service_bt_set');
    create_line('Номер телефона', request.full_phonenumber, 'bot_phone', 'bot_phone_bt_set');
    create_line('ОМС', request.oms_number);
    create_line('День рождения', request.birthday);
});