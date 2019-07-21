 <html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MADMUC LAB VIZ-WALL Survey</title>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://pingendo.github.io/pingendo-bootstrap/themes/default/bootstrap.css" rel="stylesheet" type="text/css">
</head>

<body id="viewarea" style="text-align:center;background-color:#0f6177;color:#fff">

 <?php
    $servername = "localhost";
    $username = "root";
    $password = "q1w2e3r4";
    $dbname = "dataviz";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO survey (user_type, page_feedback, email)
    VALUES ('$_POST[user]', '$_POST[page]', '$_POST[email]')";

    if ($conn->query($sql) === TRUE) {
        echo '<div class="col-sm-12 jumbotron text-xs-center" style="text-align:center;background-color:#0f6177;color:#fff;margin-top:150px">
<div class="col-sm-12" style="text-align:center;background-color:#0f6177;color:#fff">
    <h1 class="display-3">Thank You!</h1>
    <p class="lead"><strong>Thank you for your feedback!</strong> Visit us again to get more updated information.</p>
   
    <p>
        <strong>Click</strong> the button below to go to homepage.
    </p>
    <p class="lead">
        <a class="btn btn-primary btn-sm" href="index.html" role="button" style="background:#fff;color:#0f6177;font-size:20px;border-radius:7px;font-weight:bold;padding:10px 20px">Continue to homepage</a>
    </p>
</div>
</div>';
    } else {
        echo "Error: " . $sql . "<br>

</body>