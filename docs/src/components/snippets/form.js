const mixin = {
  data() {
    return {
      form1: `<style>
  .my-custom-form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<form class="my-custom-form box">
  <h2 class="text-center">Form Title</h2>
  <div class="form-row">
    <div class="field">
      <div class="field-label">
        <label class="label">First name</label>
      </div>
      <div class="field-body">
        <input class="input" type="text" placeholder="First name">
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="field">
      <div class="field-label">
        <label class="label">Last name</label>
      </div>
      <div class="field-body">
        <input class="input" type="text" placeholder="Last name">
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="field">
      <div class="field-label">
        <label class="label">Country</label>
      </div>
      <div class="field-body">
        <select class="select" name="country">
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Brazil">Brazil</option>
          <option value="Chile">Chile</option>
          <option value="Colombia">Colombia</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Guyana">Guyana</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Suriname">Suriname</option>
          <option value="Turkey" selected>Turkey</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Venezuela">Venezuela</option>
        </select>
      </div>
    </div>

    <div class="field">
      <div class="field-label">
        <label class="label">City</label>
      </div>
      <div class="field-body">
        <select class="select" name="city">
          <option>Ankara</option>
          <option selected>Istanbul</option>
          <option>Izmir</option>
        </select>
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="field">
      <div class="field-label">
        <label class="label">Gender</label>
      </div>
      <div class="field-body">
        <label class="radio">
          <input type="radio" name="answer" checked> Male
        </label>
        <label class="radio">
          <input type="radio" name="answer"> Female
        </label>
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="field">
      <div class="field-body">
        <label class="checkbox">
          <input type="checkbox"> Receive our weekly newsletter and other occasional updates
        </label>
      </div>
    </div>
  </div>

  <div class="form-row justify-center">
    <button type="button" class="btn">Submit</button>
  </div>

</form>`
    }
  }
}

export { mixin as formMixin }
