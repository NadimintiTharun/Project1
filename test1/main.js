
  const links = document.querySelectorAll(".navigation-menu a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((otherLink) => {
        otherLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  

  
  
               
  

