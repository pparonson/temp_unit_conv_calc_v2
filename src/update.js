import * as R from "ramda"

const MSGS = {
  LEFT_INPUT_VALUE: "LEFT_INPUT_VALUE"
  , RIGHT_INPUT_VALUE: "RIGHT_INPUT_VALUE"
}

export function leftInputValueMsg(_value) {
  return {
    type: MSGS.LEFT_INPUT_VALUE
    , leftInputValue: _value
  }
}

export function rightInputValueMsg(_value) {
  return {
    type: MSGS.RIGHT_INPUT_VALUE
    , rightInputValue: _value
  }
}

function update(_msg, _model) {
  if (_msg.type === "LEFT_INPUT_VALUE") {
    // clear the input fields

    // return new model with updated input values
    const _value = toInt(_msg.leftInputValue)
    return {
      // spread the new obj and overwrite the value
      ..._model
      , leftInputValue: _value
      , isLeftInputSource: true
    }
  }
  if (_msg.type === "RIGHT_INPUT_VALUE") {
    // clear the input fields

    // return new model with updated input values
    const _value = toInt(_msg.rightInputValue)
    return {
      // spread the new obj and overwrite the value
      ..._model
      , rightInputValue: _value
      , isLeftInputSource: false
    }
  }
  return _model
}

// helpers
function toInt() {
  return R.compose(
    R.defaultTo0
    , parseInt
  )
}

export default update
