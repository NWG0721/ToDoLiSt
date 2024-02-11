<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/Todo_Style.css">
    <link rel="stylesheet" href="../CSS/bootstrap.css">

    <title>ToDo List</title>
</head>

<body onload="getUserName(), DataSender()">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">ToDoLiSt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <label class="nav-link" id="U-N-L"></label>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Add New
                            Work</button>
                    </li>
                    <li class="nav-item">
                        <form method="GET" action="Todo.php"> <!-- Hide Form -->
                            <div style="display: none;">
                                <input type="text" name="UserNamePut" id="UserNamePut" />
                                <input type="text" name="NumbrelaPut" id="NumbrelaPut" />
                            </div>
                            <input type="submit" value="Refresh" class="nav-link" id="R-F-B"> <!-- Refresh button -->
                        </form> <!-- Hide Form -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Modal1 -->
    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Items</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form><!--  -->

                    <div class="modal-body">
                        <div class="form-floating mb-3">

                            <input name="Subject" type="text" class="form-control" id="Subject" placeholder="Subject">

                            <label for="Subject">Subject</label>
                        </div>
                        <div class="form-floating">

                            <input type="text" class="form-control" id="Caption" placeholder="Caption" name="Caption">

                            <label for="Caption">Caption</label>
                            <div class='checkbox-wrapper-11 mt-3'>

                                <input id='Check' type='checkbox' name='Check'>

                                <label for='Check'>To-do</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success" onclick="DBSetter(document.getElementById('Check').value, document.getElementById('Subject').value, document.getElementById('Caption').value)">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <!-- Modal1 -->
    <!-- Modal2 -->
    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit item</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form><!--  -->

                    <div class="modal-body">
                        <div class="form-floating mb-3">

                            <input name="Re-Subject" type="text" class="form-control" id="Re-Subject" placeholder="Re-Subject">

                            <label for="Re-Subject">Re-Subject</label>
                        </div>
                        <div class="form-floating">

                            <input type="text" class="form-control" id="Re-Caption" placeholder="Re-Caption" name="Re-Caption">

                            <label for="Re-Caption">Re-Caption</label>
                            <div style="display: none;">
                                <input type="number" name="Re-hiden" id="Re-hiden">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success" onclick="DataEditor(document.getElementById('Re-hiden').value,document.getElementById('Re-Subject').value, document.getElementById('Re-Caption').value)">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <!-- Modal2 -->
    <main>
        <div class="innerDiv">
            <p id="caption">🥰ToTo Do Work🥰</p>

            <table class="tbl">

                <thead>
                    <tr>
                        <th>Checked</th>
                        <th>Subject</th>
                        <th>Caption</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $Numbrela = 0;
                    $UserName = "";

                    // اگر فرم POST شده است، مقادیر را دریافت کنید
                    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['UserNamePut']) && isset($_GET['NumbrelaPut'])) {
                        $UserName = $_GET['UserNamePut'];
                        $Numbrela = $_GET['NumbrelaPut'];
                    }

                    // حلقه برای چاپ ردیف‌ها
                    for ($i = 1; $i <= $Numbrela; $i++) {
                        echo "<tr id='$i'>";
                        echo "<td>";
                        echo "<div class='checkbox-wrapper-11 mt-1'>";
                        echo "<input id='Check$i' type='checkbox' name='Check$i'>";
                        echo "<label for='Check$i'>To-do</label>";
                        echo "</div>";
                        echo "</td>";
                        echo "<td>";
                        echo "<p class='mb-0' id='Subject$i'></p>";
                        echo "</td>";
                        echo "<td>";
                        echo "<p class='mb-0' id='Caption$i'></p>";
                        echo "</td>";
                        echo "<td>";
                        echo "<input type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop2' value='Edit' onclick='DEDS($i)'>";
                        echo "<input type='button' class='btn btn-danger ms-2' value='Delete' onclick='DataDeleter($i)'>";
                        echo "</td>";
                        echo "</tr>";
                    }
                    echo "<script>";
                    echo "let Item_Ch;";
                    echo "let Item_Sub;";
                    echo "let Item_Cap;";
                    for ($i = 1; $i <= $Numbrela; $i++) {
                        echo "Item_Ch = localStorage.getItem('$UserName-DB-Check-$i');
                        document.getElementById('Check$i').value = Item_Ch;
                        Item_Sub = localStorage.getItem('$UserName-DB-Sub-$i');
                        document.getElementById('Subject$i').innerHTML = Item_Sub;
                        Item_Cap = localStorage.getItem('$UserName-DB-Cap-$i');
                        document.getElementById('Caption$i').innerHTML = Item_Cap;";
                    }
                    echo "</script>";
                    ?>
                </tbody>
            </table>
        </div>
    </main>

    <script src="../Script/Scripts.js">

    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>