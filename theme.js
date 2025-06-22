const root = document.querySelector(":root");
const themeBtn = document.getElementById("theme-btn");
const fontBtn = document.getElementById("font-btn");
const themeDropdown = document.getElementById("theme-dropdown");
const fontDropdown = document.getElementById("font-dropdown");

const themes = [
  {
    name: "dark",
    id: "dark-theme",
    backgroundColor: "#010b01",
    primaryColor: "#5e6572",
    secondryColor: "#e2dcde",
    tetiaryColor: "#00b761",
    dangerColor: "#e71d36",
    selected: true,
  },
  {
    name: "Light",
    id: "lightTheme",
    selected: false,
  },
  {
    name: "Retro",
    id: "retroTheme",
    selected: false,
  },
  {
    name: "Nature",
    id: "natureTheme",
    selected: false,
  },
  {
    name: "Luxury Gold",
    id: "luxuryGoldTheme",
    selected: false,
  },
];

const fonts = [
  {
    name: "Times New Roman",
    id: "timesNewRoman",
    fontFamily: "Times New Roman",
    selected: false,
  },
  {
    name: "Helvetica",
    id: "helvetica",
    fontFamily: "Helvetica",
    selected: true,
  },
  {
    name: "SF Pro Display",
    id: "sfProDisplay",
    fontFamily: "fonts/sf-pro-display",
    selected: false,
  },
  {
    name: "Poppins",
    id: "poppins",
    fontFamily: "fonts/poppins",
    selected: false,
  },
  {
    name: "Arial",
    id: "arial",
    fontFamily: "arial",
    selected: false,
  },
  {
    name: "Sans Sherif",
    id: "sansSherif",
    fontFamily: "sans-sherif",
    selected: false,
  },
  {
    name: "Monospace",
    id: "Monospace",
    fontFamily: "Monospace",
    selected: false,
  },
];

themeBtn.addEventListener("click", () => {
  console.log("Theme button clicked");
  fontDropdown.classList.add("hide");
  themeDropdown.classList.toggle("hide");
  if (!themeDropdown.classList.contains("hide")) {
    themeDropdown.innerHTML = "";
    renderDropdown(themes, themeDropdown);
    dropdownListener(themes);
  }
});

fontBtn.addEventListener("click", () => {
  console.log("Font button clicked");
  themeDropdown.classList.add("hide");
  fontDropdown.classList.toggle("hide");
  if (!fontDropdown.classList.contains("hide")) {
    renderDropdown(fonts, fontDropdown);
    dropdownListener(fonts);
  }
});

function renderDropdown(obj, dropdown) {
  dropdown.innerHTML = "";
  obj.forEach((item) => {
    if (!item.selected) {
      dropdown.innerHTML += `<a id="${item.id}">${item.name.toLowerCase()}</a>`;
    } else {
      dropdown.innerHTML += `<a class="selected" id="${item.id}">${item.name.toLowerCase()}</a>`;
    }
  });
}

function dropdownListener(obj) {
  obj.forEach((item) => {
    document.getElementById(item.id).addEventListener("click", (e) => {
      let itemId = e.target.getAttribute("id");
      obj.forEach((theme) => {
        if (theme.id === itemId) {
          theme.selected = true;
          if (obj === fonts) {
            root.style.setProperty("--font", theme.fontFamily);
          }
        } else {
          theme.selected = false;
        }
      });
      renderDropdown(fonts, fontDropdown);
      renderDropdown(themes, themeDropdown);
      dropdownListener(obj);
    });
  });
}
