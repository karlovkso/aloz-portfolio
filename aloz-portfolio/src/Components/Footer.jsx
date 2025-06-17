import React from "react";

function Footer() {
  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("09853682632");
      if (window.toast) {
        window.toast("copied to clipboard");
      } else {
        // fallback: create a simple toast
        const toast = document.createElement("div");
        toast.innerText = "copied to clipboard";
        toast.className =
          "toast toast-top toast-end z-50 fixed right-4 top-4 bg-accent text-base-100 px-4 py-2 rounded shadow";
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.remove();
        }, 2000);
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <footer id="footer" className="bg-base-200 mt-52">
      <div id="contact" className="mx-4 md:mx-20 mt-32 mr-24 pt-10 mb-10">
        <p className="font-bold text-base-content text-3xl md:text-4xl text-center sm:text-left">
          Contact Me
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-4 grid-cols-1 mr-24 sm:grid-cols-2 md:grid-cols-3 mx-4 md:mx-20 pb-16 text-base-content text-base font-semibold justify-items-center">
        <div>
          <button
            type="button"
            className="flex flex-col items-center focus:outline-none hover:text-accent hover:font-bold transition-all duration-300"
            onClick={handleCopyPhone}
            title="Copy phone number"
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="50"
                width="50"
              >
                <path
                  className="fill-accent"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                ></path>
              </svg>
            </div>
            <div className="mt-5 text-center select-none">0985-368-2632</div>
          </button>
        </div>

        <div>
          <a
            href="mailto:karlojames.vequiso@gmail.com"
            className="hover:text-accent hover:font-bold transition-all duration-300"
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="50"
                width="50"
              >
                <path
                  className="fill-accent"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                ></path>
              </svg>
            </div>
            <div className="mt-5 text-center">karlojames.vequiso@gmail.com</div>
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/karlo-vequiso/"
            className="hover:text-accent hover:font-bold transition-all duration-300"
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="50"
                width="50"
              >
                <path
                  className="fill-accent"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                ></path>
              </svg>
            </div>
            <div className="mt-5 text-center">
              linkedin.com/in/karlo-vequiso
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
