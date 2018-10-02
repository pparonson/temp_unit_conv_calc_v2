import {h} from "virtual-dom"
import hh from "hyperscript-helpers"
import * as R from "ramda"

import {
  leftInputValueMsg
  , rightInputValueMsg
} from "update"

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

function unitSection(_dispatch, _value, _unit, _inputMsg) {
  return div({className: "mw-50 ma1"}
    , [
      input({
        className: "w-100 pa2 mv2 br2 ba b--black-40 input-reset dim"
        , type: "text"
        , value: _value
        // oninput triggers call to update fn and passes msg and updated state
        , oninput: e => _dispatch(_inputMsg( e.target.value() ))
      })
      , select(
        {className: "w-100 pa2 mv2 br2 ba b--black-40 bg-white input-reset dim"}
        // unit select options
        , unitOptions(_unit)
      )
    ])
}

function view(_dispatch, _model) {
  return div(
    {className: "mw6 center"}
    , [
      h1({className: "f2 pv2 bb"}, "Temperature Unit Converter")
      , div({className: "flex"}, [
        unitSection(
          _dispatch
          , _model.leftInputValue
          , _model.leftInputType
          , leftInputValueMsg
        )
        , unitSection(_dispatch
          , _model.rightInputValue
          , _model.rightInputType
          , rightInputValueMsg
        )
      ])
      , pre( JSON.stringify(_model, null, 2) )
    ]
  )
}

export default view
