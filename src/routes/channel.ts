import { Router } from "express";
import { getChannel, getChannels, postChannel, putChannel, deleteChannel } from "../controllers/channel";

const router = Router();

router.get('/', getChannels);
router.get('/:id', getChannel);
router.post('/', postChannel);
router.put('/:id', putChannel);
router.delete('/:id', deleteChannel);

export default router;