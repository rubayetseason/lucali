import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidation } from './review.validation';
import { ReviewController } from './review.controller';

const router = express.Router();

router.get('/', ReviewController.getAllReviews);

router.get('/:id', ReviewController.getReviews);

router.post(
  '/create-review',
  validateRequest(ReviewValidation.createReviewZodSchema),
  ReviewController.createReview
);
router.patch(
  '/:id',
  validateRequest(ReviewValidation.updateReviewZodSchema),
  ReviewController.updateReview
);

router.delete('/:id', ReviewController.deleteReview);

export const ReviewRoutes = router;
