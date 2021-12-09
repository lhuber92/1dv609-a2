// Disable eslint check (have to do like this for materializecss to work)
/*eslint-disable */
// Initializes all of the Materialize Components
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

document.addEventListener('DOMContentLoaded', function () {
  // Sidenav:
  const elems = document.querySelectorAll('.sidenav')
  const instances = M.Sidenav.init(elems, {})

  // Initializes all other Materialize Components with a single function call
  M.AutoInit();
})
/* eslint-enable */
