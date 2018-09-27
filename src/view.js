import {h} from "virtual-dom"
import hh from "hyperscript-helpers"
import * as R from "ramda"

const {
  pre
  , div
  , h1
} = hh(h)

function view(_model) {
  return div(
    {className: "mw6 center"}
    , [
      h1({className: "f2 pv2 bb"}, "Temperature Unit Converter")
      , pre( JSON.stringify(_model, null, 2) )
    ]
  )
}

export default view
