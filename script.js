function mostrarModal(periodo) {
  var modal = document.getElementById("taskModal");
  modal.style.display = "block";
  modal.setAttribute("data-periodo", periodo);
}

function fecharModal() {
  var modal = document.getElementById("taskModal");
  modal.style.display = "none";
  document.getElementById("taskInput").value = "";
}

function salvarTarefa() {
  var modal = document.getElementById("taskModal");
  var periodo = modal.getAttribute("data-periodo");
  var ul = document.getElementById(periodo + "Tasks");
  var li = document.createElement("li");
  var inputVal = document.getElementById("taskInput").value;
  li.textContent = inputVal;

  if (inputVal) {
    li.onclick = function () {
      this.remove();
    };
    ul.appendChild(li);
  }

  fecharModal();
}
