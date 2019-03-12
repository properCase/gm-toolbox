export const randomTextFieldProps = (value, setValue, generateAction) => {
  return {
    value,
    showRandom: typeof generateAction === 'function',
    generateValue: () => {
      setValue(generateAction())
    },
    onChange: e => {
      setValue(e.target.value)
    }
  }
}

export const statsFieldProps = (value, setValue, generateAction) => {
  return {
    value,
    generateValue: () => {
      setValue(generateAction())
    },
    onChange: e => {
      setValue({
        ...value,
        [e.target.name]: parseInt(e.target.value, 10)
      })
    }
  }
}
