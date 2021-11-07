import { Router } from "express";
import { getChannelById, getChannelByEcommerceId, postChannel, putChannel, deleteChannel } from "../controllers/channel";

const router = Router();

router.get('/', getChannelByEcommerceId);
router.get('/:id', getChannelById);
router.post('/', postChannel);
router.put('/:id', putChannel);
router.delete('/:id', deleteChannel);

export default router;