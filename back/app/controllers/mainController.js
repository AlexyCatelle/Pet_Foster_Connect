const mainController = {
    async home(req, res) {
        try {
            res.status(200).send("<h1>Accueil</h1>")

        } catch (error) {
            console.error(error);
            res.status(500).send("<h1>Erreur ! La page demandée n'a pas pu être trouvée</h1>");
        }
    },
};

export default mainController;