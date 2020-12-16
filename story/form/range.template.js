import { color, text, boolean } from '@storybook/addon-knobs'

export default () => {
  const disabled = boolean('disabled', false)

  const trackColor = color('--track-color', '')
  const focusTrackColor = color('--focus-track-color', '')
  const disabledTrackColor = color('--disabled-track-color', '')
  const trackWidth = text('--track-width', '')
  const trackHeight = text('--track-height', '')
  const trackBorderWidth = text('--track-border-width', '')
  const trackBorderColor = color('--track-border-color', '')
  const disabledTrackBorderColor = color('--disabled-track-border-color', '')
  const trackRadius = text('--track-radius', '')
  const thumbColor = color('--thumb-color', '')
  const disabledThumbColor = color('--disabled-thumb-color', '')
  const thumbRadius = text('--thumb-radius', '')
  const thumbHeight = text('--thumb-height', '')
  const thumbWidth = text('--thumb-width', '')
  const thumbBorderWidth = text('--thumb-border-width', '')
  const thumbBorderColor = color('--thumb-border-color', '')
  const disabledThumbBorderColor = color('--disabled-thumb-border-color', '')

  // prettier-ignore
  const customProperties = `
  ${trackColor ? `--track-color:${trackColor};` : ''}
  ${focusTrackColor ? `--focus-track-color:${focusTrackColor};` : ''}
  ${disabledTrackColor ? `--disabled-track-color:${disabledTrackColor};` : ''}
  ${trackWidth ? `--track-width:${trackWidth};` : ''}
  ${trackHeight ? `--track-height:${trackHeight};` : ''}
  ${trackBorderWidth ? `--track-border-width:${trackBorderWidth};` : ''}
  ${trackBorderColor ? `--track-border-color:${trackBorderColor};` : ''}
  ${disabledTrackBorderColor ? `--disabled-track-border-color:${disabledTrackBorderColor};` : ''}
  ${trackRadius ? `--track-radius:${trackRadius};` : ''}
  ${thumbColor ? `--thumb-color:${thumbColor};` : ''}
  ${disabledThumbColor ? `--disabled-thumb-color:${disabledThumbColor};` : ''}
  ${thumbRadius ? `--thumb-radius:${thumbRadius};` : ''}
  ${thumbHeight ? `--thumb-height:${thumbHeight};` : ''}
  ${thumbWidth ? `--thumb-width:${thumbWidth};` : ''}
  ${thumbBorderWidth ? `--thumb-border-width:${thumbBorderWidth};` : ''}
  ${thumbBorderColor ? `--thumb-border-color:${thumbBorderColor};` : ''}
  ${disabledThumbBorderColor ? `--disabled-thumb-border-color:${disabledThumbBorderColor};` : ''}
`

  // prettier-ignore
  return `<input type="range" class="range" style="${customProperties}" ${disabled ? 'disabled' : ''}/>`
}
