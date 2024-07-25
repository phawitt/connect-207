import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';

// import { post } from '../controllers/job.controller.js';

// Create the router for our app
const jobRouter = Router();

jobRouter.post('/', async (req, res, next) => {
  let d = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
  logger.info(d);
  res.status(200);
  res.send();
  // next()
  // console.log(req)
  // try {
  //   await post(req, res);
  //   next();
  // } catch (error) {
  //   next(error);
  // }
});

export default jobRouter;
