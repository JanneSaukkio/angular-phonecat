export const checkmarkFilter: angular.FilterFactory = function() {
  return function(input: boolean) {
    return input ? '\u2713' : '\u2718';
  };
};
