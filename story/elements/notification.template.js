import { select, text } from '@storybook/addon-knobs'
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

  const containerClasses = classNames(colorClass)

  const notificationMaxWidth = text('--notification-max-width', '')
  // prettier-ignore
  const customProperties = `
  ${notificationMaxWidth ? `--notification-max-width:${notificationMaxWidth};` : ''}
 `

  return `
  <div class="notification ${containerClasses}" style="${customProperties}">
  <button class="delete" onclick="event.target.parentElement.remove()"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet,
  consectetur adipiscing elit
</div>
  `
}
