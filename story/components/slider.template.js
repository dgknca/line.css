import { select, text, color } from '@storybook/addon-knobs'
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
      purple: 'purple',
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )

  const containerClasses = classNames(colorClass)

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const shadowBg = color('--shadow-bg', '')
  const shadowDistance = text('--shadow-distance', '')
  const sliderWidth = text('--slider-width', '')
  const sliderHeight = text('--slider-height', '')
  const sliderButtonSize = text('--slider-button-size', '')
  const sliderIcon = text('--slider-icon', '')
  const sliderIconSize = text('--slider-icon-size', '')
  const sliderIconBg = text('--slider-icon-bg', '')

  // prettier-ignore
  const customProperties = `
  ${borderColor ? `--border-color:${borderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${shadowBg ? `--shadow-bg:${shadowBg};` : ''}
  ${shadowDistance ? `--shadow-distance:${shadowDistance};` : ''}
  ${sliderWidth ? `--slider-width:${sliderWidth};` : ''}
  ${sliderHeight ? `--slider-height:${sliderHeight};` : ''}
  ${sliderButtonSize ? `--slider-button-size:${sliderButtonSize};` : ''}
  ${sliderIcon ? `--slider-icon:${sliderIcon};` : ''}
  ${sliderIconSize ? `--slider-icon-size:${sliderIconSize};` : ''}
  ${sliderIconBg ? `--slider-icon-bg:${sliderIconBg};` : ''}
  `

  return `
    <div class="slider ${containerClasses}" style="${customProperties}">
        <input type="radio" name="slide" checked id="slide-1" />
        <div class="slider-item">
            <img src="https://images.unsplash.com/photo-1604580776396-8c22ccfce18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" />
            <div class="slider-control">
                <label class="slider-next" for="slide-2"></label>
            </div>
        </div>

        <input type="radio" name="slide" id="slide-2" />
        <div class="slider-item">
            <img src="https://images.unsplash.com/photo-1604596024460-4d0bfd12bda9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2145&q=80" />
            <div class="slider-control">
                <label class="slider-prev" for="slide-1"></label>
                <label class="slider-next" for="slide-3"></label>
            </div>
        </div>

        <input type="radio" name="slide" id="slide-3" />
        <div class="slider-item">
            <img src="https://images.unsplash.com/photo-1604587275784-61faa5a898b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80" />
            <div class="slider-control">
                <label class="slider-prev" for="slide-2"></label>
                <label class="slider-next" for="slide-4"></label>
            </div>
        </div>

        <input type="radio" name="slide" id="slide-4" />
        <div class="slider-item">
            <img src="https://images.unsplash.com/photo-1604519583486-506f113ed35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80" />
            <div class="slider-control">
                <label class="slider-prev" for="slide-3"></label>
                <label class="slider-next" for="slide-5"></label>
            </div>
        </div>

        <input type="radio" name="slide" id="slide-5" />
        <div class="slider-item">
            <img src="https://images.unsplash.com/photo-1604419092402-cd55679bcdf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            <div class="slider-control">
                <label class="slider-prev" for="slide-4"></label>
            </div>
        </div>
    </div>
  `
}
