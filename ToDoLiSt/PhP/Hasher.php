
    <?php
    $dataFromLocalStorage = $_POST['params'];

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $responseData = array('PassWord' => $hashedPassword);

    $jcode = json_encode($responseData);
    ?>
