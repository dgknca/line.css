import { select } from '@storybook/addon-knobs'

export default () => {
  const tooltipClasses = select(
    'Position Class',
    {
      default: 'tooltip-top',
      'tooltip-bottom': 'tooltip-bottom',
      'tooltip-right': 'tooltip-right',
      'tooltip-left': 'tooltip-left'
    },
    'tooltip-top'
  )

  return `
    <span class="tooltip ${tooltipClasses}" data-text="tooltip long text" style="--tooltip-width: 200px">hover me</span>
  `
}
