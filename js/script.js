/* ==========================================================
   Ramune × Lemon Commission v2.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const CONFIG = {
        status: "OPEN", // OPEN | CLOSED
        contact: "https://x.com/to9__s"
    };

    const status = document.getElementById("status");
    const contact = document.getElementById("contactButton");

    if (status) {

        if (CONFIG.status === "OPEN") {

            status.innerHTML =
                '<span class="status-dot"></span>OPEN';

            status.classList.add("status-open");

        } else {

            status.innerHTML =
                '<span class="status-dot closed"></span>CLOSED';

            status.classList.add("status-closed");

        }

    }

    if (contact) {

        contact.href = CONFIG.contact;

    }

});


/* ==========================================================
   Fade between pages
========================================================== */

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http")
    ) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            document.body.classList.add("page-leave");

            setTimeout(() => {

                window.location = href;

            }, 180);

        });

    }

});


/* ==========================================================
   Back to top (future use)
========================================================== */

function scrollTopSmooth() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}