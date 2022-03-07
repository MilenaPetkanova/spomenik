import {Request, Response} from 'express'
import {QueryResult} from 'pg'
import pool from '../database'

export const getLetters = async (req: Request, res: Response): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query('SELECT * FROM letters ORDER BY id DESC')
		return res.status(200).json(response.rows);
	} catch(e) {
		console.error(e);
		return res.status(500).json('Internal  error');
	}
}

export const getLetterById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query(`SELECT * FROM letters WHERE id=${req.params.id}`)
		return res.status(200).json(response.rows);
	} catch(e) {
		console.error(e);
		return res.status(500).json('Internal server error');
	}
}

export const createLetter = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { content } = req.body;
		await pool.query(`INSERT INTO letters (content) VALUES ('${content}')`)
		return res.status(201).json({
			message: 'Letter created successfully',
			body: {
				letter: { content }
			}
		});
	} catch(e) {
		console.error(e);
		return res.status(500).json('Internal server error');
	}
}

export const updateLetter = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);
		const { content } = req.body;
		await pool.query(`UPDATE letters SET content='${content}' WHERE id=${id}`)
		return res.status(200).json(`Letter ${id} updated successfully`);
	} catch(e) {
		console.error(e);
		return res.status(500).json('Internal server error');
	}
}

export const deleteLetter = async (req: Request, res: Response): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);
		await pool.query('DELETE FROM letters where id = $1', [id])
		return res.status(200).json(`Letter ${id} deleted successfully`);		
	} catch(e) {
		console.error(e);
		return res.status(500).json('Internal server error');
	}
}