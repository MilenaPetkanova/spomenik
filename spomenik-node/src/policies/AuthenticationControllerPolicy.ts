import {Request, Response, NextFunction} from 'express'
import Joi from 'joi'

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().regex(
      new RegExp('^[a-zA-Z0-9]{8,32}$')
    )
  })

  try {
    await schema.validateAsync(req.body);
    next()
  }
  catch (error: any) {
    switch (error?.details[0].context?.key) {
      case 'email':
        res.status(400).json({
          error: 'You must provide a valid email address'
        })
        break
        case 'password':
          res.status(400).json({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics.
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
        })
        break
      default:
        res.status(400).json({
          error: 'Invalid registration information'
        })    
    }
  }
}
