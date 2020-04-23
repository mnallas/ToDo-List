$(document).ready(function () {
  var textInput = "";
  var arrayInput = [];
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    textInput = $("#textInput").val();

    if (textInput.length > 0) {
      console.log("Greater than 0");
      arrayInput.push(textInput);
      showAlert("Your have successfully added a todo", "success");
      renderTodos();
    } else {
      showAlert("text cannot be empty!", "danger");
    }
  });

  $(document).on("click", ".btn", function () {
    console.log($(this).text());
  });

  $("#alert").on("click", function () {
    $("#alert").hide();
  });

  $("#delete").html("");

  $(document).on("click", ".btnDelete", function () {
    var todoId = parseInt($(this).attr("data-id"));

    arrayInput.splice(todoId, 1);
    renderTodos();
  });

  $(document).on("click", ".btnEdit", function () {
    var todoId = parseInt($(this).attr("data-id"));
    arrayInput[todoId] = $("#textInput").val();
    showAlert("Edit Success!", "success");
    renderTodos();
  });

  function renderTodos() {
    $("#textInput").val("");
    $("#cardContainer").html("");
    for (i = 0; i < arrayInput.length; i++) {
      $("#cardContainer").prepend(`
      <div id="cardContainer">
        <div class="card mb-3">
          <div class="card-body">
          <p>${arrayInput[i]}</p>
            <div class="text-right">
              <button data-id = ${i} class = "btnEdit btn btn-success"> Edit </button>
              <button data-id = ${i} class = "btnDelete btn btn-danger"> Delete </button>
            </div> 
          </div>
        </div>
      </div>`);
    }
  }

  function showAlert(str, type) {
    $("#alert").show();

    $("#alert").attr("class", `alert alert-${type}`);

    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 3000);
  }
});
