const loadGoogleTagManager = () => {
  // Inject the script tag into the <head>
  const headScript = document.createElement("script");
  headScript.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P8Q2DWL');`;
  document.head.appendChild(headScript);

  // Inject the noscript tag into the <body>
  const bodyNoScript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-P8Q2DWL";
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  bodyNoScript.appendChild(iframe);
  document.body.insertBefore(bodyNoScript, document.body.firstChild);
};

const loadingPace = () => {
  let preloader = document.querySelector("#preloader");
  if (!preloader) return;

  // Initialize Pace
  if (typeof window.Pace !== 'undefined') {
    window.Pace.on("start", () => {
      preloader.classList.remove("isdone");
      document.body.classList.remove("pace-done");
    });

    window.Pace.on("done", () => {
      preloader.classList.add("isdone");
      document.body.classList.add("pace-done");
      loadGoogleTagManager(); // Load GTM after page is loaded
    });
  } else {
    // Fallback if Pace is not loaded
    window.addEventListener("load", () => {
      preloader.classList.add("isdone");
      document.body.classList.add("pace-done");
      loadGoogleTagManager();
    });
  }
}

export default loadingPace;