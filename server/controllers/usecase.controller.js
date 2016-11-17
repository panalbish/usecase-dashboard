import UseCase from '../models/usecase';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all usecases
 * @param req
 * @param res
 * @returns void
 */
export function getUseCases(req, res) {
  UseCase.find().sort({ title: 1 }).exec((err, usecases) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ usecases });
  });
}

/** Util Method
 * get the body parameter from request and return the schema
 * @param req
 * @param res
 * @returns {UseCase}
 * @private
 */
function _retrieveusecaseBody(req, res) {
  const useCaseModel = new UseCase();
  const useCaseBody = req.body;
  if (useCaseBody.length === 0) {
    res.send('No body received from client');
    return true;
  }
  Object.keys(useCaseBody).forEach((key) => {
    if (useCaseModel && useCaseModel.hasOwnProperty(key)) {
      useCaseModel[key] = useCaseBody[key];
    }
  });
  return useCaseModel;
}

/**
 * Save a usecase
 * @param req
 * @param res
 * @returns void
 */
export function addUseCase(req, res) {
  if (!req.body.usecase.title || !req.body.usecase.body || !req.body.usecase.milestones) {
    res.status(403).end();
  }

  const newUseCase = new UseCase(req.body.usecase);

  // Let's sanitize inputs
  newUseCase.title = sanitizeHtml(newUseCase.title);
  newUseCase.body = sanitizeHtml(newUseCase.body);
  newUseCase.milestones = newUseCase.milestones;

  newUseCase.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ usecase: saved });
  });
}

/**
 * Save a usecase
 * @param req
 * @param res
 * @returns void
 */
export function addUseCase1(req, res) {
  const useCaseModel = _retrieveusecaseBody(req, res);
  useCaseModel.save((err) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json({
      message: 'Success',
      data: useCaseModel
    });
  });
}
