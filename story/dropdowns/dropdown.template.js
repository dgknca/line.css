import { boolean } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
  const noShadow = boolean('no-shadow', false)

  const containerClasses = classNames({
    'no-shadow': noShadow
  })

  return `
  <div class="dropdown ${containerClasses}">
    <a href="#0" class="dropdown-trigger">dropdown menu</a>
    <div class="dropdown-container">
      <ul class="dropdown-menu">
        <li class="dropdown-item"><button class="dropdown-link">Action</button>
          <ul class="dropdown-sub-list">
            <li class="dropdown-item"><a href="#0" class="dropdown-link">Sub item 1</a></li>
            <li class="dropdown-item"><a href="#0" class="dropdown-link">Sub item 2</a></li>
          </ul>
        </li>
        <li class="dropdown-item"><a href="#0" class="dropdown-link">Another action</a></li>
        <li class="dropdown-item"><a href="#0" class="dropdown-link">Something else here</a></li>
      </ul>
    </div>
  </div>
  `
}
