const initializeSkillFilter = () => {
  const filters = document.querySelectorAll(".skill-filter");
  const categories = document.querySelectorAll(".skill-category");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selectedCategory = filter.dataset.filter;

      filters.forEach((button) =>
        button.setAttribute("aria-pressed", String(button === filter)),
      );
      categories.forEach((category) => {
        const shouldShow =
          selectedCategory === "all" ||
          category.dataset.category === selectedCategory;
        category.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
};

document.addEventListener("astro:page-load", initializeSkillFilter);
initializeSkillFilter();