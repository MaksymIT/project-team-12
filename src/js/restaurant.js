// const gallery = document.querySelector(".slider-room");

// document.addEventListener("click", (e) => {
//   e.preventDefault();
//   // console.log(e);
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `
//     <img src = ${e.target.dataset} width="800" height="600">
// `,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", closeByEsc);
//       },
//       onClose: (instance) => {
//         document.removeEventListener("keydown", closeByEsc);
//       },
//     }
//   );
//   instance.show();

//   function closeByEsc(event) {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   }
// });