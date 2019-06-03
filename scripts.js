const items = document.getElementsByClassName("carousel-item");

for (let i = 0, length1 = items.length; i < length1; i++) {
  items[i].addEventListener("click", function(el) {
    let expandedIndex;
    let clickedIndex = i;

    for (let index = 0, length1 = items.length; index < length1; index++) {
      if (items[index].classList.value.match(/selected/)) {
        expandedIndex = index;
      }
    }

    removeClass(items, "selected");

    toggleExpanded(items[i]);

    scrollToCard(items[i], expandedIndex, clickedIndex);
  });
}

function scrollToCard(card, expandedIndex, clickedIndex) {
  let adjustment = 0;

  if (clickedIndex === expandedIndex) {
    adjustment = 0;
  } else if (clickedIndex > expandedIndex) {
    adjustment = 200;
  } else {
    adjustment = -200;
  }

  let left = card.offsetLeft;

  let elementWidth = card.offsetWidth;

  let container = document.getElementsByClassName("container")[0];

  let screenwidth = container.offsetWidth;

  let target = left - adjustment - (screenwidth - elementWidth) / 2;

  document.getElementById("carousel").scrollTo({
    left: target,
    behavior: "smooth"
  });
}

function removeClass(els, className) {
  for (let i = 0, length1 = els.length; i < length1; i++) {
    els[i];
    if (els[i].classList) els[i].classList.remove(className);
    else
      els[i].className = el.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }
}

function toggleExpanded(el) {
  let className = "selected";
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    let classes = el.className.split(" ");
    let existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) classes.splice(existingIndex, 1);
    else classes.push(className);

    el.className = classes.join(" ");
  }
}

function onLoaded() {
  let firstCard = document.getElementsByClassName("carousel-item")[0];

  toggleExpanded(firstCard);

  setTimeout(function() {
    scrollToCard(firstCard);
  }, 250);
}

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(onLoaded);
