var counter = 0;

document.getElementById(btn).addEventListener(click, function() {
  counter++;
  document.getElementById(count).innerText = counter;
});