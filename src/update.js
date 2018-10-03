import * as R from "ramda"

const MSGS = {
  LEFT_INPUT_VALUE: "LEFT_INPUT_VALUE"
  , RIGHT_INPUT_VALUE: "RIGHT_INPUT_VALUE"
  , LEFT_INPUT_UNIT: "LEFT_INPUT_UNIT"
  , RIGHT_INPUT_UNIT: "RIGHT_INPUT_UNIT"
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

export function leftInputUnitMsg(_value) {
  return {
    type: MSGS.LEFT_INPUT_UNIT
    , leftInputUnit: _value
  }
}

export function rightInputUnitMsg(_value) {
  return {
    type: MSGS.RIGHT_INPUT_UNIT
    , rightInputUnit: _value
  }
}

function update(_msg, _model) {
  if (_msg.type === "LEFT_INPUT_VALUE") {
    // clear the input fields
    // if (_msg.leftInputValue === "") {
    //   return {
    //     ..._model
    //     , leftInputValue: ""
    //     , rightInputValue: ""
    //     , isLeftInputSource: true
    //   }
    // }

    // return new model with updated input values
    const value = toInt(_msg.leftInputValue)
    return {
      // spread the new obj and overwrite the value
      ..._model
      , leftInputValue: value
      , isLeftInputSource: true
    }
  }
  if (_msg.type === "RIGHT_INPUT_VALUE") {
    // clear the input fields
    // if (_msg.rightInputValue === "") {
    //   return {
    //     ..._model
    //     , leftInputValue: ""
    //     , rightInputValue: ""
    //     , isLeftInputSource: false
    //   }
    // }

    // return new model with updated input values
    const value = toInt(_msg.rightInputValue)
    return {
      // spread the new obj and overwrite the value
      ..._model
      , rightInputValue: value
      , isLeftInputSource: false
    }
  }

  if (_msg.type === "LEFT_INPUT_UNIT") {
    return {
      ..._model
      , leftInputUnit: _msg.leftInputUnit
    }
  }

  if (_msg.type === "RIGHT_INPUT_UNIT") {
    return {
      ..._model
      , rightInputUnit: _msg.rightInputUnit
    }
  }

  // default case
  return _model
}

// helpers
const toInt = R.compose(
  R.defaultTo(0)
  , parseInt
)


export default update
