onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ("Hey Wissem, It wasnt easy but we made it through our first year together, here's a gift for you, Tulips! Your favorites!").split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 150); // 300ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};