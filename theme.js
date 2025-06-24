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
    id: "cyberGreenTheme",
    name: "Cyber Green",
    backgroundColor: "#0f0f0f",
    primaryColor: "#39ff14",
    secondryColor: "#1e1e1e",
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
    primaryColor: "#00796b",
    secondryColor: "#b2ebf2",
    tetiaryColor: "#00acc1",
    dangerColor: "#d32f2f",
    selected: false,
  },
  {
    id: "desertSunsetTheme",
    name: "Desert Sunset",
    backgroundColor: "#fff8e7",
    primaryColor: "#c97b63",
    secondryColor: "#f6c28b",
    tetiaryColor: "#ff9f1c",
    dangerColor: "#e63946",
    selected: false,
  },
  {
    id: "midnightPurpleTheme",
    name: "Midnight Purple",
    backgroundColor: "#1a1a2e",
    primaryColor: "#c084fc",
    secondryColor: "#3f3f5e",
    tetiaryColor: "#9f7aea",
    dangerColor: "#f56565",
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
          if (obj === themes) {
            root.style.setProperty("--background-color", theme.backgroundColor);
            root.style.setProperty("--primary-color", theme.primaryColor);
            root.style.setProperty("--secondry-color", theme.secondryColor);
            root.style.setProperty("--tetiary-color", theme.tetiaryColor);
            root.style.setProperty("--danger-color", theme.dangerColor);
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
