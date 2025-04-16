import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import jewwelry from "../../data/jewelry.json";

const Breadcrumb = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);
  const [itemName, setItemName] = useState(null);

  useEffect(() => {
    const id = parseInt(pathNames[2]);
    if (id) {
      const matched = jewwelry.find((item) => item.id === id);
      if (matched) {
        setItemName(matched.name);
      } else {
        setItemName(null);
      }
    }
  }, [pathNames]);

  return (
    <>
      {pathNames.length !== 0 ? (
        <div className="bg-gray-100 py-0.5">
          <nav
            className="w-6xl mx-auto text-sm text-gray-500 py-3"
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

                // Nếu là phần tử cuối (ID), thay bằng tên
                let displayName = decodeURIComponent(name);
                if (index === 2 && itemName) {
                  displayName = itemName;
                }

                return (
                  <React.Fragment key={index}>
                    <li>
                      <span className="mx-2 text-gray-400">/</span>
                    </li>
                    <li>
                      {isLast ? (
                        <span className="text-gray-700 font-medium capitalize">
                          {displayName}
                        </span>
                      ) : (
                        <Link
                          to={routeTo}
                          className="text-gray-500 hover:text-gray-900 capitalize"
                        >
                          {displayName}
                        </Link>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Breadcrumb;
