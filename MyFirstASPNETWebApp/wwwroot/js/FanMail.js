﻿$("#btnSend").click( function () {
    alert("From: " + $("txtFrom").val() + " Subject: " +
        $("#txtSubject").val() + " Message: " +
        $("#txtMessage").val());

    $("#anderson").fadeOut("slow");
})