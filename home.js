import { books } from "./data.js";
import { displayboxes } from "./books.js";
import { applyFilters} from "./filter.js";
import {searchFilter} from "./search.js"
import {hide_show} from "./hide_show.js"
//  DOM ELEMENTS 
const middle_div = document.getElementById("middle_div");
const login_div = document.getElementById("login_div");
const container = document.getElementById("container");

const typeButtons = document.querySelectorAll("#navigation2 .btn");
const gradeSelect = document.getElementById("grade-level");
const navigation2 = document.getElementById("navigation2");

const searchInput = document.getElementById("searchInput");

// ===================== STATE =====================

let selectedType = "All";
let searchQuery = "";


// RESPONSIVE NAV 
hide_show(middle_div, login_div,container,navigation2)
//  MAIN DISPLAY PIPELINE 
function updateDisplay() {
  let filtered = applyFilters(
    books,
    gradeSelect.value,
    selectedType
  );

  filtered = searchFilter(filtered, searchQuery);

  displayboxes(filtered);
}

//  FILTER EVENTS 
gradeSelect.addEventListener("change", updateDisplay);

typeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedType = btn.dataset.type;
    updateDisplay();
  });
});

// SEARCH 
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim();
  updateDisplay();
});

//  INITIAL RENDER 
updateDisplay();
 
//  SCROLL NAV EFFECT 
let ticking = false;

window.addEventListener("scroll", () => {
  if (ticking) return;

  ticking = true;
  requestAnimationFrame(() => {
    const nav = document.getElementById("navigation1");
    if (!nav) return;

    nav.style.backgroundColor =
      window.scrollY <= 20
        ? "rgba(225, 226, 164, 1)"
        : "rgba(222, 223, 156, 1)";

    ticking = false;
  });
});
