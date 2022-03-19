var likes = document.getElementsByClassName("like");
console.log(likes);

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}
var minusbtn = document.getElementsByClassName("minus-btn");
var counter = document.getElementsByClassName("Quant");
var plusBtn = document.getElementsByClassName("plus-btn");
console.log(minusbtn);

for (let i = 0; i < plusBtn.length; i++) {
  let plus = plusBtn[i];

  plus.addEventListener("click", function () {
    counter[i].value++;
    total();
  });
}

for (let i = 0; i < minusbtn.length; i++) {
  let minus = minusbtn[i];

  minus.addEventListener("click", function () {
    if (counter[i].value > 1) {
      counter[i].value--;
    }
    total();
  });
}
var deletes = document.getElementsByClassName("delete");

for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];
  del.addEventListener("click", function () {
    del.parentElement.remove();
    total();
  });
}
var items = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");
function total() {
  let s = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s =
      s +
      item.querySelector(".Quant").value *
        item.querySelector(".price").innerHTML;
  }
  return (final.value = s);
}
