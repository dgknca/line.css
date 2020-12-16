import { select } from '@storybook/addon-knobs'
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

  const sizeClass = select(
    'Size Class',
    {
      default: '',
      'delete-sm': 'delete-sm',
      'delete-l': 'delete-l'
    },
    ''
  )

  const containerClasses = classNames(colorClass, sizeClass)

  return `
  <a class="delete ${containerClasses}"></a>
  `
}
