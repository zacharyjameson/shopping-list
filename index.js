$(function () {
  $("#js-shopping-list-form").submit((event) => {
    event.preventDefault();
    const inputText = $(event.currentTarget).find("#shopping-list-entry");
    $(".shopping-list").append(
      <li>
        <span class="shopping-item">inputText</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    );
  });
});
