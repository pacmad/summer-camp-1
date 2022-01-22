import React from "react";

export default function NewsletterForm() {
  return (
    <div className="input-group w-50 mx-auto mb-5">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      ></input>

      <button class="btn btn-secondary" type="button">
        send !
      </button>
    </div>
  );
}
