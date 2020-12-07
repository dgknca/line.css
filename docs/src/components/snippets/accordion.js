const mixin = {
  data() {
    return {
      checkboxAccordion: `<div class="accordions">

  <div class="accordion">
    <input type="checkbox" id="accordion-checkbox-1"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-1" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  <div class="accordion">
    <input type="checkbox" id="accordion-checkbox-2"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-2" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  <div class="accordion">
    <input type="checkbox" id="accordion-checkbox-3"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-3" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

</div>`,
      radioAccordion: `<div class="accordions">

<div class="accordion">
  <input type="radio" name="group1" id="accordion-checkbox-4"/>
  <div class="accordion-container">
    <label for="accordion-checkbox-4" class="accordion-button">
      <span class="accordion-title">
        Accordion Menu
      </span>
    </label>
    <div class="accordion-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
    </div>
  </div>
</div>

<div class="accordion">
  <input type="radio" name="group1" id="accordion-checkbox-5"/>
  <div class="accordion-container">
    <label for="accordion-checkbox-5" class="accordion-button">
      <span class="accordion-title">
        Accordion Menu
      </span>
    </label>
    <div class="accordion-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
    </div>
  </div>
</div>

<div class="accordion">
  <input type="radio" name="group1" id="accordion-checkbox-6"/>
  <div class="accordion-container">
    <label for="accordion-checkbox-6" class="accordion-button">
      <span class="accordion-title">
        Accordion Menu
      </span>
    </label>
    <div class="accordion-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
    </div>
  </div>
</div>

</div>`
    }
  }
}

export { mixin as accordionMixin }
