let count = 0;

document.getElementById("btn").addEventListener("click", function() {
  count++;
  document.getElementById("count").innerHTML = count;
});