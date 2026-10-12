function AlertMessage(props) {
  return (
    <div className="alert alert-info alert-dismissible mb-4">
      {props.message}
      <button className="btn-close" onClick={props.onClose}></button>
    </div>
  );
}

export default AlertMessage;
