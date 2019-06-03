const getCurrentDateObject = () => {
  const date = new Date();
  return {
    y: date.getFullYear(),
    m: date.getMonth(),
    d: date.getDate()
  };
};

module.exports = { getCurrentDateObject };
