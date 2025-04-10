import React from "react";
import { Link } from "react-router-dom";
export default function ProductDetail() {
    return (
        <div className="container py-12 h-[1000000px]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                <figure className="col-span-3">
                    <div className="flex justify-center">
                        <img
                            src="../../public/images/product/ring1_a.png"
                            alt=""
                            className="border border-stone-400 object-cover rounded-sm h-[550px] w-[90%]"
                        />
                    </div>
                    <div className="mt-5 flex justify-center">
                        <div className="flex gap-5 w-[90%] justify-center">
                            <img
                                src="../../public/images/product/ring1_a.png"
                                alt=""
                                className="h-[6rem] object-cover border border-stone-400 cursor-pointer opacity-70 hover:opacity-100"
                            />
                            <img
                                src="../../public/images/product/ring1_b.png"
                                alt=""
                                className="h-[6rem] object-cover border border-stone-400 cursor-pointer opacity-70 hover:opacity-100"
                            />
                        </div>
                    </div>
                </figure>
                <section className="col-span-2"></section>
            </div>
        </div>
    );
}
