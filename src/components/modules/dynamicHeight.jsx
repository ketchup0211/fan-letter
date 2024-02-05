const DEFAULT_HEIGHT = 20;
const dynamicHeight = (event) => {
  //  dynamic height
  event.target.style.height = 0;
  event.target.style.height = DEFAULT_HEIGHT + event.target.scrollHeight + "px";
};

export default dynamicHeight;
