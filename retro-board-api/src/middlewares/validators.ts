import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'

import Task from '../entities/Task'
import BoardColumn from '../entities/BoardColumn'

const uuidV4Format = new RegExp(
	/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
)

const Validators = {
	validateColumn: async (
		request: Request,
		response: Response,
		next: NextFunction
	) => {
		const { title } = request.body

		const errors = await validate(new BoardColumn(title))

		if (errors.length > 0) {
			response.status(400).send(errors)
			return
		}

		next()
	},

	validateUUID: async (
		request: Request,
		response: Response,
		next: NextFunction
	) => {
		const uuid = request.params.uuid
		if (!uuid.match(uuidV4Format)) {
			return response.status(400).send({ message: 'Invalid UUID format' })
		}
		next()
	},

	validateTask: async (
		request: Request,
		response: Response,
		next: NextFunction
	) => {
		const { content, columnId } = request.body

		const errors = await validate(new Task({ content, column: columnId }))

		if (errors.length > 0) {
			response.status(400).send(errors.map(error => error.constraints))
			return
		}

		const referencedColumn = await getRepository(BoardColumn).findOne(columnId)

		if (referencedColumn === undefined) {
			response.status(400).send(`Column with id "${columnId}" does not exist!`)
			return
		}

		next()
	}
}

export default Validators
