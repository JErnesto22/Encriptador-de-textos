let inp1 = "command_input";
let inp2 = "text_input";
let inp3 = "input_selection";
let final_text;
let encript_command = "enc";
let desencript_command = "desec";
const line_one = document.getElementById("line_one");
const line_two = document.getElementById("line_two");
const line_third = document.getElementById("line_third");
const text_output = document.getElementById("text_output");
const input1 = document.getElementById(inp1);
const input2 = document.getElementById(inp2);
const input3 = document.getElementById(inp3);

hi();
initialState();

function UserAction(command, text) {
  console.log("ola0");
  if (command == encript_command) {
    console.log("ola1");
    Encript(text);
  } else if (command == desencript_command) {
    DesEncript(text);
  } else {
    write('text_output' , 'Error')
  }
}

function DesEncript(texti) {
  let ntext;
  ntext = texti
    .replace("5", "a")
    .replace("4", "e")
    .replace("9", "1")
    .replace("6", "o")
    .replace("8", "u");

  console.log(ntext);
  console.log("lr");
  write('text_output' , `El texto encriptado es: ${ntext}`) ;

}

function Encript(texti) {
  let ntext;
  ntext = texti
    .replace("a", "5")
    .replace("e", "4")
    .replace("i", "9")
    .replace("o", "6")
    .replace("u", "8");

  console.log(ntext);
  console.log("lr");
  write('text_output' , `El texto encriptado es: ${ntext}`) ;
}

function initialState() {
  write("command_root", "C:&#92;User&#92;Desktop&#92;Encripter>");
  write("text_root", "Ingresa el texto: ");
  write("label_selection", "Estas seguro de encrptar el texto? [Y/n]");
  line_one.style.display = "block";
  line_two.style.display = "none";
  line_third.style.display = "none";
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

function write(id, text) {
  const election = document.getElementById(id);
  election.innerHTML = text;
}
function hi() {
  input1.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      line_two.style.display = "block";
      input2.focus();
      event.preventDefault();
    }
  });
  input2.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      line_third.style.display = "block";
      input3.focus();
      event.preventDefault();
    }
  });
  input3.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      selection();
      console.log("hi");
      event.preventDefault();
    }
  });
}

function selection() {
  const selecUser = document.getElementById("input_selection").value;
  let command = input1.value;
  let text = input2.value;
  if (selecUser == "Y") {
    console.log(`El texto encriptado es: ${final_text}  k`);
    UserAction(command,text);
  } else if (selecUser == "n") {
    //llamar a funcion para reiniciar la pantalla
    initialState();
  } else {
    write("text_output", "Error");
    //llamar a funcion para reiniciar pantalla
    initialState();
  }
}
