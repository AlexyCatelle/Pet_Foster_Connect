import { createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "./utils/ProtectedRoute.js";

// Import pages
import Root from "../pages/Root/index.js";
import Home from "../pages/Home/index.js";

// import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";
// import Board from "./pages/Board.jsx";
// import Associations from "./pages/Associations.jsx";
// import Pet from "./pages/Pet.jsx";
// import { Pets } from "./pages/Pets.jsx";
// import { Error404 } from "./pages/Error404.jsx";
// import Asso from "./pages/Asso.jsx";
// import Family from "./pages/Family.jsx"

// Import footer components
// import About from "./components/Footer/About/index.js";
// import Cookies from "./components/Footer/Cookies/index.js";
// import Legals from "./components/Footer/Legals/index.js";
// import PrivacyPolicy from "./components/Footer/PrivacyPolicy/index.js";
// import Accessibility from "./components/Footer/Accessibility/index.js";
// import Sitemap from "./components/Footer/Sitemap/index.js";

// Import other pages
// import ProfilForm from "./pages/NewProfilForm.jsx";
// import PetProfilForm from "./pages/NewProfilPet.jsx";
// import UpdateProfilForm from "./pages/UpdateProfilForm.jsx";
// import UpdateProfilFormPet from "./pages/UpdateProfilFormPet.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [

      // ROUTE HOME
      {
        path: "/",
        element: <Home />,
      },

      // ROUTES AUTH
      // {
      //   path: "/inscription",
      //   element: <Register />,
      // },
      // {
      //   path: "/connexion",
      //   element: <Login />,
      // },

      // ROUTES LISTS
      // {
      //   path: "/associations",
      //   element: <Associations />,
      // },
      // {
      //   path: "/animaux",
      //   element: <Pets />,
      // },

      // ROUTES PROFILES
      // {
      //   path: "/associations/profil/:id",
      //   element: <Asso />
      // },
      // {
      //   path: "/families/profil/:id",
      //   element: <Family />
      // },
      // {
      //   path: "/animaux/profil/:id",
      //   element: <Pet />,
      // },

      // ROUTES CREATE PROFILES
      // {
      //   path: "/formulaire_profil",
      //   element: <ProfilForm />,
      // },
      // {
      //   path: "/formulaire_profil_animal",
      //   element: <PetProfilForm />
      // },

      // ROUTES UPDATE PROFILES
      // {
      //   path: "/modification_profil",
      //   element: <UpdateProfilForm />
      // },
      // {
      //   path: "/modification_profil_animal/:id",
      //   element: <UpdateProfilFormPet />
      // },
      // ROUTE BOARDS
      // route protégée pour que l'utilisateur puisse accéder ou non à une page donnée si il a le rôle association
      // element: <ProtectedRoute role="association" />,
      // {
      //   children: [
      //     {
      //       path: "/tableau_de_bord",
      //       element: <Board />,
      //     },
      //   ],
      // },
      // {

      //   children: [
      //     {
      //       path: "/tableau_de_bord",
      //       element: <Board />,
      //     },
      //   ],
      // },
      // route protégée pour que l'utilisateur puisse accéder ou non à une page donnée si il a le rôle admin
      // {
      //   element: <ProtectedRoute role="admin" />,
      //   children: [
      //     {
      //       path: "/admin",
      //       element: <Admin />,
      //     },
      //   ],
      // },

      // ROUTES FOOTER
      // {
      //   path: "/a_propos",
      //   element: <About />,
      // },
      // {
      //   path: "/mentions_legales",
      //   element: <Legals />,
      // },
      // {
      //   path: "/accessibilite",
      //   element: <Accessibility />,
      // },
      // {
      //   path: "/plan_du_site",
      //   element: <Sitemap />,
      // },
      // {
      //   path: "/politique_de_confidentialite",
      //   element: <PrivacyPolicy />,
      // },
      // {
      //   path: "/cookies",
      //   element: <Cookies />,
      // },
      // // Catch-all route for 404 errors
      // {
      //   path: "*",
      //   element: <Error404 />,
      // },
    ],
  },
]);
