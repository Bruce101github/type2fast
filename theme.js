const screenBlock = document.getElementById("screen-block");
const root = document.querySelector(":root");
const themeBtn = document.getElementById("theme-btn");
const fontBtn = document.getElementById("font-btn");
const themeDropdown = document.getElementById("theme-dropdown");
const fontDropdown = document.getElementById("font-dropdown");

const themes = [
  {
    name: "Dark",
    id: "dark-theme",
    backgroundColor: "#010b01",
    primaryColor: "#5e6572",
    secondryColor: "#e2dcde",
    tetiaryColor: "#00b761",
    dangerColor: "#e71d36",
    selected: true,
  },
  {
    id: "cyberGreenTheme",
    name: "Cyber Green",
    backgroundColor: "#0f0f0f",
    primaryColor: "#1e1e1e",
    secondryColor: "#39ff14",
    tetiaryColor: "#00ffcc",
    dangerColor: "#ff073a",
    selected: false,
  },
  {
    id: "softPastelTheme",
    name: "Soft Pastel",
    backgroundColor: "#fef6f9",
    primaryColor: "#6c5b7b",
    secondryColor: "#c06c84",
    tetiaryColor: "#f67280",
    dangerColor: "#c0392b",
    selected: false,
  },
  {
    id: "oceanBreezeTheme",
    name: "Ocean Breeze",
    backgroundColor: "#e0f7fa",
    primaryColor: "#b2ebf2",
    secondryColor: "#00796b",
    tetiaryColor: "#00acc1",
    dangerColor: "#d32f2f",
    selected: false,
  },
  {
    id: "desertSunsetTheme",
    name: "Desert Sunset",
    backgroundColor: "#fff8e7",
    primaryColor: "#f6c28b",
    secondryColor: "#c97b63",
    tetiaryColor: "#ff9f1c",
    dangerColor: "#e63946",
    selected: false,
  },
  {
    id: "midnightPurpleTheme",
    name: "Midnight Purple",
    backgroundColor: "#1a1a2e",
    primaryColor: "#3f3f5e",
    secondryColor: "#c084fc",
    tetiaryColor: "#9f7aea",
    dangerColor: "#f56565",
    selected: false,
  },
];

const fonts = [
  {
    name: "Monospace",
    id: "Monospace",
    fontFamily: "Monospace",
    selected: true,
  },
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
    selected: false,
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
];

loadState();
renderThemeAndFont();

themeBtn.addEventListener("click", () => {
  console.log("Theme button clicked");
  fontDropdown.classList.add("hide");
  themeDropdown.classList.toggle("hide");
  if (!themeDropdown.classList.contains("hide")) {
    screenBlock.classList.remove("hide");
    themeDropdown.innerHTML = "";
    renderDropdown(themes, themeDropdown);
    dropdownListener(themes);
  } else {
    screenBlock.classList.add("hide");
  }
});

fontBtn.addEventListener("click", () => {
  console.log("Font button clicked");
  themeDropdown.classList.add("hide");
  fontDropdown.classList.toggle("hide");
  if (!fontDropdown.classList.contains("hide")) {
    screenBlock.classList.remove("hide");
    renderDropdown(fonts, fontDropdown);
    dropdownListener(fonts);
  } else {
    screenBlock.classList.add("hide");
  }
});

screenBlock.addEventListener("click", () => {
  fontDropdown.classList.add("hide");
  themeDropdown.classList.add("hide");
  screenBlock.classList.add("hide");
});

document.addEventListener("keydown", () => {
  fontDropdown.classList.add("hide");
  themeDropdown.classList.add("hide");
  screenBlock.classList.add("hide");
  console.log(screenBlock.classList.contains("hide"));
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
          saveState();
          renderThemeAndFont();
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

function renderThemeAndFont() {
  for (let i = 0; i < themes.length; i++) {
    if (themes[i].selected) {
      root.style.setProperty("--background-color", themes[i].backgroundColor);
      root.style.setProperty("--primary-color", themes[i].primaryColor);
      root.style.setProperty("--secondry-color", themes[i].secondryColor);
      root.style.setProperty("--tetiary-color", themes[i].tetiaryColor);
      root.style.setProperty("--danger-color", themes[i].dangerColor);
    }
  }

  for (let i = 0; i < fonts.length; i++) {
    if (fonts[i].selected) {
      root.style.setProperty("--font", fonts[i].fontFamily);
    }
  }
}

function saveState() {
  for (let i = 0; i < themes.length; i++) {
    if (themes[i].selected) {
      localStorage.setItem(
        "theme",
        JSON.stringify({
          backgroundColor: themes[i].backgroundColor,
          primaryColor: themes[i].primaryColor,
          secondryColor: themes[i].secondryColor,
          tetiaryColor: themes[i].tetiaryColor,
          dangerColor: themes[i].dangerColor,
          selected: themes[i].id,
        }),
      );
    }
  }
  for (let i = 0; i < fonts.length; i++) {
    if (fonts[i].selected) {
      localStorage.setItem(
        "font",
        JSON.stringify({
          fontFamily: fonts[i].fontFamily,
          selected: fonts[i].id,
        }),
      );
    }
  }
}

function loadState() {
  const savedTheme = JSON.parse(localStorage.getItem("theme"));
  const savedFont = JSON.parse(localStorage.getItem("font"));
  if (savedFont || savedTheme) {
    for (let i = 0; i < themes.length; i++) {
      if (savedTheme.selected === themes[i].id) {
        themes[i].selected = true;
      } else {
        themes[i].selected = false;
      }
    }

    for (let i = 0; i < fonts.length; i++) {
      if (savedFont.selected === fonts[i].id) {
        fonts[i].selected = true;
      } else {
        fonts[i].selected = false;
      }
    }
  } else {
    return;
  }
}
