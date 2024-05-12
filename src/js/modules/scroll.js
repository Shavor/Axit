function smoothScroll() {
  const menu = document.querySelector(".nav");
  const links = document.querySelectorAll(".nav .nav-link");

  if (window.location.hash != "") {
    scrollToID(window.location.hash);
  }
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      e.preventDefault();
      let link = e.target;
      scrollToID(link.hash);
    }
  });

  //   change activeLink in header menu
  window.addEventListener("scroll", function(e) {
    let pos = window.pageYOffset;
    for (let i = links.length - 1; i >= 0; i--) {
      let link = links[i]; //nav-link
      //   console.log(("link: ", link));

      let header = document.querySelector(link.hash);

      if (pos > elemOffsetTop(header) - window.innerHeight / 2) {
        menu.querySelector(".active").classList.remove("active");
        link.classList.add("active");
        break;
      }
    }
  });

  function scrollToID(id) {
    let target = document.querySelector(id);
    // console.log(target);
    if (target !== null) {
      let pos = target.offsetTop - menu.clientHeight;
      scrollToY(pos);
    }
  }
}

function scrollToY(pos) {
  window.scrollTo({
    top: pos,
    behavior: "smooth",
  });
}

function elemOffsetTop(node) {
  let coords = node.getBoundingClientRect();
  return coords.top + window.pageYOffset;
}

export default smoothScroll;
