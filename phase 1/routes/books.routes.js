import express from 'express'
import { createBooks, deleteBook, getBook, getBooks, updateBook } from '../controllers/bookController.js';

const bookRouter= express.Router();

bookRouter.get('/',getBooks);
bookRouter.get('/:id',getBook);
bookRouter.post('/',createBooks);
bookRouter.put('/:id',updateBook);
bookRouter.delete('/:id',deleteBook);

export default bookRouter;