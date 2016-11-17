import usecase from '../models/usecase';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all usecases
 * @param req
 * @param res
 * @returns void
 */
export function getusecases(req, res) {
  usecase.find().sort('-dateAdded').exec((err, usecases) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ usecases });
  });
}

/**
 * Save a usecase
 * @param req
 * @param res
 * @returns void
 */
export function addusecase(req, res) {
  if (!req.body.usecase.name || !req.body.usecase.title || !req.body.usecase.content) {
    res.status(403).end();
  }

  const newusecase = new usecase(req.body.usecase);

  // Let's sanitize inputs
  newusecase.title = sanitizeHtml(newusecase.title);
  newusecase.name = sanitizeHtml(newusecase.name);
  newusecase.content = sanitizeHtml(newusecase.content);

  newusecase.slug = slug(newusecase.title.toLowerCase(), { lowercase: true });
  newusecase.cuid = cuid();
  newusecase.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ usecase: saved });
  });
}

/**
 * Get a single usecase
 * @param req
 * @param res
 * @returns void
 */
export function getusecase(req, res) {
  usecase.findOne({ cuid: req.params.cuid }).exec((err, usecase) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ usecase });
  });
}

/**
 * Delete a usecase
 * @param req
 * @param res
 * @returns void
 */
export function deleteusecase(req, res) {
  usecase.findOne({ cuid: req.params.cuid }).exec((err, usecase) => {
    if (err) {
      res.status(500).send(err);
    }

    usecase.remove(() => {
      res.status(200).end();
    });
  });
}
