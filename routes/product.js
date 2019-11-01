const express = require("express");
const router = express.Router();

const {
    create,
    read,
    remove,
    update,
    getList,
    getListRelated,
    getListCategory,
    postListBySearch,
    mwPhoto,
    mwProductById,
} = require("../controllers/product");
const { requireSignin, mwIsAuth, mwIsAdmin } = require("../controllers/auth");
const { mwUserById } = require("../controllers/user");

// CRUD
// @route  CRUD api/product
router.get("/:productId", read);
router.post("/:userId", requireSignin, mwIsAdmin, mwIsAdmin, create);
router.delete("/:productId/:userId", requireSignin, mwIsAuth, mwIsAdmin, remove); // user is requested here because it makes sure that only an admin account can delete a product.
router.put("/:productId/:userId", requireSignin, mwIsAuth, mwIsAdmin, update);
// END CRUD
//LISTS
router.get("/list/all", getList);
router.get("/list/related/:productId", getListRelated);
router.get("/list/categories", getListCategory);
router.post("/list/by-search", postListBySearch);
// END LISTS

router.get("/photo/:productId", mwPhoto);

router.param("userId", mwUserById);
router.param("productId", mwProductById);

module.exports = router;