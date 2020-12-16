import { select, boolean, color, text } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
  const colorClass = select(
    'Color Class',
    {
      default: '',
      orange: 'orange',
      green: 'green',
      red: 'red',
      pink: 'pink',
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )

  const focus = boolean('focus', false)
  const disabled = boolean('disabled', false)
  const isDisabled = classNames({
    disabled: disabled
  })

  const containerClasses = classNames(
    {
      focus
    },
    colorClass
  )

  const borderColor = color('--border-color', '')
  const disabledBorderColor = color('--disabled-border-color', '')
  const borderRadius = text('--border-radius', '')
  const focusBoxShadowColor = color('--focus-box-shadow-color', '')
  const focusBoxShadowWidth = text('--focus-box-shadow-width', '')

  const customProperties = `${
    borderColor ? `--border-color:${borderColor};` : ''
  }
  ${
    disabledBorderColor ? `--disabled-border-color:${disabledBorderColor};` : ''
  }
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${
    focusBoxShadowColor
      ? `--focus-box-shadow-color:${focusBoxShadowColor};`
      : ''
  }
  ${
    focusBoxShadowWidth
      ? `--focus-box-shadow-width:${focusBoxShadowWidth};`
      : ''
  }`

  return `<label class="radio ${containerClasses}" style="${customProperties}"  ${isDisabled}>
  <input type="radio" name="answer" checked> Yes
</label>
<label class="radio ${containerClasses}" style="${customProperties}"  ${isDisabled}>
  <input type="radio" name="answer"> No
</label>`
}
