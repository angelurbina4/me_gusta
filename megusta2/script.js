var lk = document.querySelector("#likes")
console.log(lk)

var count = [3, 3, 3];
function increase(num) {
  count[num-1]++;
  var like = document.querySelector("#likes"+ num);

  like.innerText = `${count[num-1]} Like(s)`;
}

