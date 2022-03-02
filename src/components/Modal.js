import ReactDOM from 'react-dom';
import './Modal.scss';

const modalEl = document.getElementById('modal');

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onBgClick}>
      {props.children}
    </div>,
    modalEl
  );
};

export default Modal;

// const Modal = (props) => {
//   return props.active
//     ? ReactDOM.createPortal(
//         <div className="modal" onClick={props.onBgClick}>
//           {props.children}
//         </div>,
//         modalEl
//       )
//     : null;
// };
