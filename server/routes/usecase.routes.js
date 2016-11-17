import { Router } from 'express';
import * as UseCaseController from '../controllers/usecase.controller';
const router = new Router();

// Get all usecases
router.route('/usecases').get(UseCaseController.getUseCases);

// Add a new usecase
router.route('/usecases').post(UseCaseController.addUseCase);

export default router;
