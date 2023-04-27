document.addEventListener("DOMContentLoaded", function() {
    var selectedFlag = document.querySelector(".iti__selected-flag");
    var title = selectedFlag.getAttribute("title");
    console.log(title);
  });

var input = document.querySelector("#tel");
    intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "fr";
          success(countryCode);
        });
      },
    });


const droparea = document.querySelector(".droparea");


droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("hover");
});

droparea.addEventListener("dragleave", () => {
  droparea.classList.remove("hover");
});

droparea.addEventListener("drop", (e) => {
  e.preventDefault();

  const image = e.dataTransfer.files[0];
  const type = image.type;

  if (
    type == "image/png" ||
    type == "image/jpg" ||
    type == "image/jpeg"
  ) {
    return upload(image);
  } else {
    droparea.setAttribute("class", "droparea invalid");
    droparea.innerText = "Format invalide déposez une image";
    return false;
  }
});

const upload = (image) => {
  droparea.setAttribute("class", "droparea valid");
  droparea.innerText = "Added " + image.name;
};
