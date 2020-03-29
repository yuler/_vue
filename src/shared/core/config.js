import {
  no,
  noop,
  identity
} from '../../shared/util'
import { LIFECYCLE_HOOKS } from '../../shared/constants'

export default({
  optionMergeStrategies: Object.create(null),
  slient: false,
  productionTip: process.env.NODE !== 'production',
  devtools: process.env.NODE !== 'production',
  performance: false,
  errorHandler: null,
  warnHandler: null,
  ignoredElements: [],
  keyCodes: Object.create(null),
  isReservedTag: no,
  isReservedAttr: no,
  isUnknownElement: no,
  getTagNamespace: noop,
  parsePlatformTagName: identity,
  mustUseProp: no,
  async: true,
  _lifecycles: LIFECYCLE_HOOKS
})