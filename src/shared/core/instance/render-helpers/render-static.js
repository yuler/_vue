
export function renderStatic(index, isInFor) {
  const cached = this._staticTrees || (this._staticTrees = [])
  let tree = cached[index]
  if (tree && !isInFor) {
    return tree
  }
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  )
  markStatic(tree, `__static__${index}`, false)
  return tree
}

export function markOnce(tree, index, key) {
  markStatic(tree, `__static__${index}`, true)
  return tree
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], `${key}_${i}`, isOnce)
      }
    }
  } else {
    markStaticNode(tree, key, isOnce)
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true
  node.key = key
  node.isOnce = isOnce
}