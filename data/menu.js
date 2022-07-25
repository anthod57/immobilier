export const MENU_ITEMS = [
    {
        text: "Accueil",
        id: "nav-home",
        link: "/",
        side: "left",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Vendre",
        id: "nav-vendre",
        link: "/",
        side: "left",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Acheter",
        id: "nav-acheter",
        link: "/search?offerType=buy&propertyType=house",
        side: "left",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Louer",
        id: "nav-louer",
        link: "/search?offerType=rent&propertyType=house",
        side: "left",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Connexion",
        id: "nav-connexion",
        link: "login",
        side: "right",
        showIfLogged: false,
        hideIfNotLogged: false
    },
    {
        text: "Inscription",
        id: "nav-inscription",
        link: "register",
        side: "right",
        showIfLogged: false,
        hideIfNotLogged: false
    },
    {
        text: "Ajouter une annonce",
        id: "nav-ajouter-une-annonce",
        link: "/ajouter-une-annonce",
        side: "right",
        showIfLogged: true,
        hideIfNotLogged: true
    },
    {
        text: "Mon compte",
        id: "nav-mon-compte",
        link: "/mon-compte",
        side: "right",
        showIfLogged: true,
        hideIfNotLogged: true
    },
    {
        text: "Se déconnecter",
        link: "signout",
        side: "right",
        showIfLogged: true,
        hideIfNotLogged: true
    },
    {
        text: "Mentions légales",
        link: "/",
        side: "bottom",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Cookies",
        link: "/",
        side: "bottom",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Contact",
        link: "/",
        side: "bottom",
        showIfLogged: true,
        hideIfNotLogged: false
    },
    {
        text: "Données personnelles",
        link: "/",
        side: "bottom",
        showIfLogged: true,
        hideIfNotLogged: false
    },
]