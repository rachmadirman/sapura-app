import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 top-90 bg-izeno-main"
            : "relative") + " pb-0"
        }
      >
        <div className="container mx-auto my-0 px-1 py-0">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 x-0">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-white  text-sm font-semibold py-1"
                >
                </a>
              </div>
            </div>
            <div className="w-full md:w-4/12 x-0">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    className="text-white  text-sm font-semibold block py-1 px-3"
                  >
                    Powered by Snowflake
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}