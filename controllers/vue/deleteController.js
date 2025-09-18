const db = require("../../models");
const Vue = db.Vue;

exports.delete = async (req, res) => {
    try {
        const vue = await Vue.findByPk(req.params.id);
        if (!vue) {
            return res.status(404).json({ message: "Vue non trouvée" });
        }

        await vue.destroy();
        res.json({ message: "Vue supprimée avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", details: err.message });
    }
};
