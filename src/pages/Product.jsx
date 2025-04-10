// import React from "react";

// export default function Product() {
//   return <div></div>;
// }

import React from "react";
import { Link } from "react-router-dom";
export default function Product() {
    return (
        <Link to={`/product/1`}>
            <div>Alo</div>
        </Link>
    );
}
