import createElement from "virtual-dom/create-element"
import {diff, patch} from "virtual-dom"

// WARNING: IMPURE CODE BELOW
function app(_view, _update, _node, _model) {
  let model = _model
  let currentView = _view(model)
  let rootNode = createElement(currentView)

  // render the currentView to the DOM
  _node.appendChild(rootNode)
}

export default app
