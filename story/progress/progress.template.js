import { select } from '@storybook/addon-knobs'

export default () => {
  const colorClass = select(
    'Color Class',
    {
      default: '',
      'progress-orange': 'progress-orange',
      'progress-green': 'progress-green',
      'progress-red': 'progress-red',
      'progress-pink': 'progress-pink',
      'progress-blue': 'progress-blue',
      'progress-yellow': 'progress-yellow'
    },
    ''
  )

  const sizeClass = select(
    'Size Class',
    {
      default: 'progress-md',
      'progress-sm': 'progress-sm',
      'progress-md': 'progress-md',
      'progress-l': 'progress-l'
    },
    'progress-md'
  )

  return `
    <div class="progress ${colorClass} ${sizeClass}" style="--progress: 30"></div>
  `
}
