
/*
   document.getElementById('speedSubmit').addEventListener('mouseup', function() {
   console.log('here');
   try {
   var val = parseFloat(document.getElementById('speedField').value);
   localStorage["youtube-settings"] = val;
   } catch (ex) {
   alert(ex.message);
   }
   });
   */

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
