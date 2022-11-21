//  let string="";
//  let btn = document.querySelectorAll('.button');
//  Array.from(btn).forEach((item) => {
//     item.addEventListener('click', (e) => {
//         console.log(e.target);
//     })
//  })

window.onload = function () {
  let string = "";
  let btn = document.querySelectorAll(".button");
  Array.from(btn).forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        console.log(string);
        string = eval(string);

        document.querySelector(".input").value = string;
      } else if (e.target.innerHTML == "C") {
        document.querySelector("input").value = "";
        string = "";
      } else if (e.target.innerHTML == "Del") {
        console.log(string);
        string = string.slice(0,-1)
        document.querySelector(".input").value = string;
      } else {
        console.log(e.target.innerHTML);
        string = string + e.target.innerHTML;
        document.querySelector(".input").value = string;
      }
    });
  });
};
