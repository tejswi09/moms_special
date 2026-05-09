function nextPage(){

  document
  .getElementById("page1")
  .classList.remove("active");

  document
  .getElementById("page2")
  .classList.add("active");
}

function openMemory(){

  document
  .getElementById("page2")
  .classList.remove("active");

  document
  .getElementById("page3")
  .classList.add("active");
}