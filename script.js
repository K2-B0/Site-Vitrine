// Sélection des éléments
const openMenuButton = document.getElementById("openMenu");
const closeMenuButton = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const submitInfoButton = document.getElementById("submitInfo");
const content = document.getElementById("content");
const body = document.querySelector("main_content");

// Ouvrir le menu
openMenuButton.addEventListener("click", () => {
    menu.classList.remove("hidden");
    main_content.classList.add("blurred"); // Ajoute le flou au contenu
});

// Fermer le menu
closeMenuButton.addEventListener("click", () => {
    menu.classList.add("hidden");
    content.classList.remove("blurred"); // Retire le flou
    main_content.classList.remove("blurred");
});

// Soumettre les informations
submitInfoButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (name && email && age) {
        // Utiliser SweetAlert2 pour afficher une alerte stylée
        Swal.fire({
            title: `<p class="good">Merci, ${name} !</p>`,
            html: `
                <p class="good">Nous avons bien reçu vos informations</p>
            `,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#28a745',
            background: '#1f2937',
            color: '#fff',
        }).then(() => {
            // Retirer le flou et fermer le menu après avoir cliqué sur OK
            menu.classList.add("hidden");
            content.classList.remove("blurred");
            menu.classList.remove("open"); // Ferme le menu
            main_content.classList.remove("blurred"); // Retire le flou du body
        });

        // Fermer le menu après l'envoi
        menu.classList.add("hidden");
    } else {
        // Alerte d'erreur si les champs ne sont pas remplis
        Swal.fire({
            title: `<p class="good">Oups, ${name} !</p>`,
            html: `
                <p class="good">Tu dois remplir toutes les informations.</p>
            `,
            icon: 'error',
            background: '#1f2937',
            color: '#fff',
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545',
        });
    }
});

    // MENU

// Ouvrir le second menu
document.getElementById("openMenu_2").addEventListener("click", function () {
    console.log("Bouton OpenMenu_2 cliqué");
    document.getElementById("sideMenu_2").classList.add("open");
});

// Fermer le second menu
document.getElementById("closeMenu_2").addEventListener("click", function () {
    console.log("Bouton CloseMenu_2 cliqué");
    document.getElementById("sideMenu_2").classList.remove("open");
});

