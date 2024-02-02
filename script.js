//your code here!

document.addEventListener("DOMContentLoaded", function () {
  // Get the list and add initial items
  const infiList = document.getElementById("infi-list");
  addInitialItems();

  // Add scroll event listener
  infiList.addEventListener("scroll", function () {
    if (isScrolledToBottom(infiList)) {
      // When scrolled to the bottom, add more items
      addMoreItems();
    }
  });

  function addInitialItems() {
    // Add about 10 list items by default
    for (let i = 1; i <= 10; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${i}`;
      infiList.appendChild(listItem);
    }
  }

  function addMoreItems() {
    // Add 2 more list items
    for (let i = 1; i <= 2; i++) {
      const listItem = document.createElement("li");
      const totalItems = infiList.childElementCount + i;
      listItem.textContent = `Item ${totalItems}`;
      infiList.appendChild(listItem);
    }
  }

  function isScrolledToBottom(element) {
    // Check if the user has scrolled to the bottom of the list
    return element.scrollHeight - element.scrollTop <= element.clientHeight;
  }
});
