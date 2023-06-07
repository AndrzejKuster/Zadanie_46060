$(document).ready(function () {

    $('#get-data').click(function () {
        console.log('działa get-data');
        // wariant 1
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function(data) {
        //         console.log(data);

        //         let pId = $('<p></p>').text(`Post Id: ${data.id}`);
        //         let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
        //         let pTitleId = $('<p></p>').text(`Title: ${data.title}`);
        //         let pBody = $('<p></p>').text(`Body: ${data.body}`);
        //         let pHr = $('<hr />');

        //         let jqBody = $('body');

        //         jqBody.append(pId);
        //         jqBody.append(pUserId);
        //         jqBody.append(pTitleId);
        //         jqBody.append(pBody);
        //         jqBody.append(pHr);
        //     })
        //     .fail(function(error) {
        //         console.log(error);
        //     })


        // wariant 2
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                console.log(data);

                let pId = $('<p></p>').text(`Post Id: ${data.id}`);
                let pUserId = $('<p></p>').text(`User Id: ${data.userId}`);
                let pTitleId = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let pHr = $('<hr />');

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitleId);
                jqBody.append(pBody);
                jqBody.append(pHr);
            })
            .fail(function (error) {
                console.log(error);
            })

    })
})