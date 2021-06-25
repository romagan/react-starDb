const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((acc, value) => value(acc), comp);
}

export default compose;
