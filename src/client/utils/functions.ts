import { GASClient } from 'gas-client'
import * as server from '../../server/main'

export const { serverFunctions } = new GASClient<typeof server>()
