import React from "react";

export default function NewsletterForm() {
  return (
    <div>
      <form className="text-center pt-1 pb-5">
        <div className="mb-3">
          <input
            type="email "
            className="form-control w-50 m-auto "
            aria-describedby="emailHelp"
            placeholder="Votre e-mail"
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">
          Send !
        </button>
      </form>
    </div>
  );
}
