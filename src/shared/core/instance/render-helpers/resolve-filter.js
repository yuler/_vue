import { resolveAsset, identity } from '../../util/index'

export function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}