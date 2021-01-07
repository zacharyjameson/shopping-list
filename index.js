$(function () {
  $("#js-shopping-list-form").submit(function (event) {
    event.preventDefault();
    const $inputText = $(event).val("#shopping-list-entry");
    $(".shopping-list").append(
      '<li>\
      <span class="shopping-item>' + $inputText + '</span>\
      <div class="shopping-item-controls">\
        <button class="shopping-item-toggle">\
          <span class="button-label">check</span>\
        </button>\
        <button class="shopping-item-delete">\
          <span class="button-label">delete</span>\
        </button>\
      </div>'
    );
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function () {
    $(this).closest("li").remove();
  });

  $(".shopping-list").on("click", ".shopping-item-toggle", function () {
    $(this).closest(".shopping-item").toggleClass("shopping-item__checked");
  });

});
