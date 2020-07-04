const $ = (selector) => {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    on: (event, callback) => {
      document.addEventListener(event, callback)
    },
    hide: () => {
      self.element.style.display = "none"
    },
    attr: (name, value) => {
      if(value === null) {
        self.element.getAttribute(name)
      } else {
        self.element.setAttribute(name, value)
      }
    }
  }
  return self
}

$('h3').on("click", function () {
  alert("clicked")
})
  