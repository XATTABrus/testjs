// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.message == "clicked_browser_action") {
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

alert('test');