import { Consents } from './consent'
import { Data } from './data'
import { applyMixins } from './utils'
import { Base } from './base'

class SoulHIU extends Base { }
interface SoulHIU extends Consents, Data { }
applyMixins(SoulHIU, [Consents, Data])

export default SoulHIU