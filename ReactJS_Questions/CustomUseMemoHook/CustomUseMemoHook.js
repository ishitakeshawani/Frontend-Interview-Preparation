import React, { useEffect, useRef, useState } from "react";

const areEqual = (deps, prev) => {
  if (prev == null) return false;
  if (deps.length != prev.length) return false;
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== deps[i]) {
      return false;
    }
  }
  return true;
};

const CustomUseMemoHook = (cb, deps) => {
  let calculatedVal = useRef({
    value: undefined,
    deps: [],
  });

  if (!areEqual(deps, calculatedVal.current.deps)) {
    const newVal = cb();
    calculatedVal.current = {
      value: newVal,
      deps: deps,
    };
  }

  return calculatedVal.current.value;
};

export default CustomUseMemoHook;
