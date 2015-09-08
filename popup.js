
$(document).ready(function() {

    $("#speedSubmit").mouseup(function() {
        //alert('pressed submit, value: ' + $("#speedField").val());
        try {
            var val = parseFloat($("#speedField").val());
            localStorage["youtube-settings"] = val;
            chrome.storage.local.set({'youtube-settings': val}, function() {
                alert('val set');
            });
            $("#speedField").val("");
        } catch (ex) {
            alert(ex.message);
        }
    });
});
