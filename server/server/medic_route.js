import express from "express"
import medicCntrl from "./server"

const router = express.Router()

router.route("/").get(medicCntrl.getMedic)

router
    .route("/review")
    .post(NameCtrl.post)
    .put(NameCtrl.update)
    .delete(NameCtrl.delete)

export default router