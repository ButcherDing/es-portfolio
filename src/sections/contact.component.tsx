import GuestbookEntries from "../features/guestbook/guestbook-entries/guestbook-entries.component";
import GuestbookForm from "../features/guestbook/guestbook-form/guestbook-form.component";
import Guestbook from "../features/guestbook/guestbook.component";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg px-8 py-16 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
      >
        <div className="flex flex-col justify-between gap-2">
          <div className="space-y-2">
            <h2 className="text-4xl font-thin leading-tight lg:text-5xl">{`Let's talk!`}</h2>
            <div className="max-w-xs pb-3 dark:text-stone-400">
              Get in touch to chat about work, coding, or just sign the
              guestbook.
            </div>
            <div className="flex max-w-xs items-center gap-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-rose-600 dark:text-stone-900 sm:h-10 sm:w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ionicon h-7 w-7"
                  viewBox="0 0 512 512"
                >
                  <title>Mail</title>
                  <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
                </svg>
              </a>
              <a href="mailto:evon.scott@gmail.com">evon.scott@gmail.com</a>
            </div>
            <div className="flex max-w-xs items-center gap-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-rose-600 dark:text-stone-900 sm:h-10 sm:w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ionicon h-7 w-7"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Github</title>
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </a>
              <a href="https://github.com/ButcherDing">ButcherDing</a>
            </div>

            <div className="flex max-w-xs items-center gap-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full dark:bg-rose-600 dark:text-stone-900 sm:h-10 sm:w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ionicon h-7 w-7"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Linkedin</title>
                  <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/evon-c-scott/">
                evon-c-scott
              </a>
            </div>
          </div>
        </div>
        {/* <form className=" space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full rounded p-3 dark:bg-stone-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded p-3 dark:bg-stone-700"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full rounded p-3 dark:bg-stone-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded p-3 text-sm  uppercase tracking-wide dark:bg-rose-600 dark:text-stone-900"
          >
            Send Message
          </button>
        </form> */}
        <div className="">
          <GuestbookForm />
          <GuestbookEntries />
        </div>
      </div>
    </div>
  );
};

export default Contact;
