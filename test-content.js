function receive_message(request) {
    alert(request.oms_number);
}

// alert('asdddd');

document.addEventListener('myCustomEvent', function(evn) {
    // do whatever is necessary
    alert(evn.request.oms_number);
    console.log(evn.request);
});