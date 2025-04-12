import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathNames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="bg-gray-100 py-2">
      <nav
        className="w-6xl mx-auto text-sm text-gray-500 "
        aria-label="Breadcrumb"
      >
        <ol className="list-reset flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
          </li>

          {pathNames.map((name, index) => {
            const routeTo = "/" + pathNames.slice(0, index + 1).join("/");
            const isLast = index === pathNames.length - 1;

            return (
              <React.Fragment key={index}>
                <li>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
                <li>
                  {isLast ? (
                    <span className="text-gray-700 font-medium capitalize">
                      {decodeURIComponent(name)}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-gray-500 hover:text-gray-900 capitalize"
                    >
                      {decodeURIComponent(name)}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
