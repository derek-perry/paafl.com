import { useState } from 'react';

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const Form = (): JSX.Element => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const formData = new FormData(event.target as HTMLFormElement);
      const urlSearchParams = new URLSearchParams();
      formData.forEach((value, key) => {
        urlSearchParams.append(key, value.toString());
      });
      const formDataString = urlSearchParams.toString();
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataString
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  return (
    <form
      name="contact"
      onSubmit={handleFormSubmit}
      className="w-full flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="flex flex-col gap-y-1">
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" id="name" required placeholder="Your Name" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="email">Email*</label>
        <input type="email" name="email" id="email" required placeholder="Your Email Address" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col gap-y-1">
        <label htmlFor="message">Message*</label>
        <textarea name="message" id="message" required rows={6} placeholder="Your Message" className="p-2 border rounded" />
      </div>

      <button type="submit" className="button text-xl" disabled={status === 'pending'}>Send</button>

      {status === 'ok' && (
        <div className="alert alert-success">
          <SuccessIcon />
          Submitted!
        </div>
      )}
      {status === 'error' && (
        <div className="alert alert-error">
          <ErrorIcon />
          {error}
        </div>
      )}
    </form>
  );
};

export default Form;