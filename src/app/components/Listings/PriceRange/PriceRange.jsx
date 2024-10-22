"use client";

import React from "react";
import {Slider} from "primereact/slider";

export default function PriceRange({max, range = [0, 100], change = () => {}}) {
    return (
        <div className="card flex justify-content-center">
            <Slider
                value={range}
                onChange={(e) => {
                    // IF THE RANGE MAX IS EQUAL TO MIN OR LESS THAN MIN THEN RETURN
                    if (e.value[1] <= e.value[0]) return

                    // CHANGE RANGE
                    change(e.value)
                }}
                range
                min={0}
                max={max}
                style={{width: "100%"}}
                pt={{
                    root: { className: 'w-14rem' },
                    handle: { className: 'circle__white' },
                    range: { className: 'bg-orange-400' }
                }}
            />
        </div>
    )
}