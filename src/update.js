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
    const conversion = convertValue(value, _model)
    return {
      // spread the new obj and overwrite the value
      ..._model
      , leftInputValue: value
      , rightInputValue: conversion
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
    const conversion = convertValue(value, _model)
    return {
      // spread the new obj and overwrite the value
      ..._model
      , leftInputValue: conversion
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

function convertValue(_value, _model) {
  if (_model.isLeftInputSource) {
    if (_model.leftInputUnit === _model.rightInputUnit) {
      return _value
    }
    if (_model.leftInputUnit === "Celcius" &&
      _model.rightInputUnit === "Fahrenheit") {
      return celciusToFahrenheit(_value)
    }
    if (_model.leftInputUnit === "Fahrenheit" &&
      _model.rightInputUnit === "Celcius") {
      return fahrenheitToCelcius(_value)
    }
    if (_model.leftInputUnit === "Celcius" &&
      _model.rightInputUnit === "Kelvin") {
      return celciusToKelvin(_value)
    }
    if (_model.leftInputUnit === "Kelvin" &&
      _model.rightInputUnit === "Celcius") {
      return kelvinToCelcius(_value)
    }
    if (_model.leftInputUnit === "Fahrenheit" &&
      _model.rightInputUnit === "Kelvin") {
      return fahrenheitToKelvin(_value)
    }
    if (_model.leftInputUnit === "Kelvin" &&
      _model.rightInputUnit === "Fahrenheit") {
      return kelvinToFahrenheit(_value)
    }
  } else {
    if (_model.leftInputUnit === _model.rightInputUnit) {
      return _value
    }
    if (_model.leftInputUnit === "Celcius" &&
      _model.rightInputUnit === "Fahrenheit") {
      return celciusToFahrenheit(_value)
    }
    if (_model.leftInputUnit === "Fahrenheit" &&
      _model.rightInputUnit === "Celcius") {
      return fahrenheitToCelcius(_value)
    }
    if (_model.leftInputUnit === "Celcius" &&
      _model.rightInputUnit === "Kelvin") {
      return celciusToKelvin(_value)
    }
    if (_model.leftInputUnit === "Kelvin" &&
      _model.rightInputUnit === "Celcius") {
      return kelvinToCelcius(_value)
    }
    if (_model.leftInputUnit === "Fahrenheit" &&
      _model.rightInputUnit === "Kelvin") {
      return fahrenheitToKelvin(_value)
    }
    if (_model.leftInputUnit === "Kelvin" &&
      _model.rightInputUnit === "Fahrenheit") {
      return kelvinToFahrenheit(_value)
    }
  }
}

function celciusToFahrenheit(_value) {
  return (9/5) * _value + 32
}

function fahrenheitToCelcius(_value) {
  return (5/9) * (_value - 32)
}

function celciusToKelvin(_value) {
  return _value + 273.15
}

function kelvinToCelcius(_value) {
  return _value - 273.15
}

// point-free
const fahrenheitToKelvin = R.compose(
  celciusToKelvin
  , fahrenheitToCelcius
)

const kelvinToFahrenheit = R.compose(
  celciusToFahrenheit
  , kelvinToCelcius
)

export default update
