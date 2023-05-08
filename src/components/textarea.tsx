import React from 'react'
import { useController } from 'react-hook-form'

const style = {
text: {
    fontSize: 25,
    fontFamily: 'Ropa Sans',
    marginBottom: '5px',
},
input: {
    marginBottom: '25px',
}
}
/**
 * @param label
 * @param name
 * @param rules
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Textarea({ label, name, rules, ...rest }) {
  const { field, fieldState } = useController({
    name,
    rules
  }) 

  return (
    <label>
      <p style={style.text}>{label}</p>
      <textarea style={style.input} {...rest} {...field} cols={68} rows={5}/>
      {fieldState.error && <div>{fieldState.error.message}</div>}
    </label>
  )
}

export default Textarea
