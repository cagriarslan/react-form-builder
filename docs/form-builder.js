/* eslint-disable no-undef */
// const e = React.createElement;
const FormBuilder = ReactFormBuilder.ReactFormBuilder;
const domContainer = document.querySelector('#form-builder');
function guid() {
  function _p8(s) {
    const p = (`${Math.random().toString(16)}000000000`).substr(2, 8);
    return s ? `_${p.substr(0, 4)}_${p.substr(4, 4)}` : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
}

let cid = window.localStorage.getItem('cid');
if (!cid) {
  cid = guid();
  window.localStorage.setItem('cid', cid);
}

const url = `https://safe-springs-35306.herokuapp.com/api/formdata?cid=${cid}`;
const saveUrl = `https://safe-springs-35306.herokuapp.com/api/formdata?cid=${cid}`;

ReactDOM.render(e(FormBuilder, { url, saveUrl }), domContainer);
