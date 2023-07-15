import * as express from 'express';

import partner from './partner/partner.route';

const router = express.Router();

router.use('/google-fonts', partner);

export default router;
