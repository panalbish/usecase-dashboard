import { Router } from 'express';
import * as UseCaseController from '../controllers/usecase.controller';
const router = new Router();

// Get all Posts
router.route('/usecases').get(UseCaseController.getUseCases);

// Add a new Post
router.route('/usecases').post(UseCaseController.addUseCase);

export default router;
