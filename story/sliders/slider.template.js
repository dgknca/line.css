export default () => {

  return `
    <div class="slider">
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
  `;
};