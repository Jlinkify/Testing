    const cursorAnimation = document.querySelector(".cursor");
    const cursors = document.querySelectorAll(".cursor");

    document.addEventListener("click", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      cursorAnimation.style.top = y + "px";
      cursorAnimation.style.left = x + "px";

      cursors.forEach((cursor) => {
        cursor.classList.add("active");

        function removeCursorActive(){
          cursor.classList.remove("active");
        }

        setTimeout(removeCursorActive, 1000);
      });
      
      let cursorClone = cursorAnimation.cloneNode(true);
      document.querySelector("body").appendChild(cursorClone);

      setTimeout(() => {
        cursorClone.remove();
      }, 1000);
    });

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
