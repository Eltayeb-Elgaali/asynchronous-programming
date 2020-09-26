/* 'use strict';

const usesParentVariable = (param) => {
  // write me!
};

let parentScopeVariable = "parentScope";

const result1 = usesParentVariable("arg");
console.assert(result1 === "argparentScopelocal", "assert 1");

const result2 = usesParentVariable(undefined);
console.assert(result2 === "undefinedparentScopelocal", "assert 2");

parentScopeVariable = usesParentVariable("spoon");
console.assert(parentScopeVariable === _, "assert 3");

const result3 = usesParentVariable(_);
console.assert(result3 === "spoonparentScopelocallocal", "assert 4");

parentScopeVariable = usesParentVariable("spoon");
console.assert(parentScopeVariable === _, "assert 5");
 */

'use strict';

const usesParentVariable = (param) => {
  // write me!
  return (ownParam) => {
    param += parentScopeVariable;
    const result = param + ownParam;
    
    return result;
  }
};

let parentScopeVariable = "parentScope";

const result1 = usesParentVariable("arg")('local');
console.assert(result1 === "argparentScopelocal", "assert 1");

const result2 = usesParentVariable(undefined)('local');
console.assert(result2 === "undefinedparentScopelocal", "assert 2");

parentScopeVariable = usesParentVariable("spoon")('local');
console.assert(parentScopeVariable ==='spoonparentScopelocal', "assert 3");

const result3 = usesParentVariable('')('local');
console.assert(result3 === "spoonparentScopelocallocal", "assert 4");

parentScopeVariable = usesParentVariable("spoon")('');
console.assert(parentScopeVariable === 'spoonspoonparentScopelocal', "assert 5");
