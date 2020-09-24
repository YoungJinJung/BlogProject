let index = {
    init: function () {
        $("#btn-save").on("click", () => {
            this.save();
        });
    },
    save: function () {
        let data = {
            title: $("#title").val(),
            content: $("#content").val(),
        }

        //ajax default : async call
        //ajax default type json
        $.ajax({
            type: "POST",
            url: "/api/board",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
        }).done(function (resp) {
            alert("Success Save Post");
            location.href = "/";
        }).fail(function (error) {
            alert(JSON.stringify(error))
        });
    },

    /*login: function () {
        let data = {
            userName: $("#username").val(),
            password: $("#password").val(),
        }

        //ajax default : async call
        //ajax default type json
        $.ajax({
            type: "POST",
            url: "/api/user/login",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
        }).done(function (resp) {
            alert("Success Sign In");
            location.href = "/";
        }).fail(function (error) {
            alert(JSON.stringify(error))
        });
    }*/
}

index.init();