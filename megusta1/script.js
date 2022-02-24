var lk = document.querySelector("#likes")
console.log(lk)


var count = 3;
function increase(element) {
  lk.innerText = count++;
  lk.innerText = count+" like(s)";
}

