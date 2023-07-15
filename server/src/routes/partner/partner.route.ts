import express from 'express';
import GoogleFontsController from '~/controllers/google-fonts.controller';

const router = express.Router();

const googleController = new GoogleFontsController();
router.get('/', googleController.getAllFonts);

export default router;
