function SendData()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "database9157@gmail.com",
        Password : "0B8923DD51AE0F33B82752963F72BED6E2DD",
        To : 'database9157@gmail.com',
        From : document.getElementById("E1").value,
        Subject : "Portfolio Mail",
        Body : "Name: " + document.getElementById("name1").value
            + "<br> Email: " + document.getElementById("E2").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Data sent successfully")
    );
}