import {h} from "virtual-dom"
import hh from "hyperscript-helpers"
import * as R from "ramda"

const {
  pre
  , div
  , h1
  , select
  , option
  , input
} = hh(h)

const UNITS = ["Celcius", "Fahrenheit", "Kelvin"]

function unitOptions(_selected) {
  // transform selected unit into option tag
  return R.map(_item =>
    option({value: _item, selected: _selected === _item}, _item), UNITS)
}

function unitSection(_value, _unit) {
  return div({className: "mw-50 ma1"}
    , [
      input({
        className: "w-100 pa2 mv2 br2 dim"
        , type: "text"
        , value: _value
        // oninput triggers call to update fn and passes msg and updated state
        // , oninput: e => _dispatch()
      })
      , select(
        {className: "w-100 pa2 mv2 br2 ba bg--black-40 dim input-reset"}
        // unit select options
        , unitOptions(_unit)
      )
    ])
}

function view(_model) {
  return div(
    {className: "mw6 center"}
    , [
      h1({className: "f2 pv2 bb"}, "Temperature Unit Converter")
      , div({className: "flex"}, [
        unitSection(50, "Celcius")
        , unitSection(100, "Fahrenheit")
      ])
      , pre( JSON.stringify(_model, null, 2) )
    ]
  )
}

export default view
