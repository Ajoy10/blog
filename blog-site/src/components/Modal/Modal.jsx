import { Close } from "@carbon/icons-react";
import React from "react";
import "./style.scss";

export default function Modal({
  title,
  visibility,
  onOk,
  okText = "Ok",
  onCancel,
  children,
}) {
  if (!visibility) {
    return <></>;
  } else {
    return (
      <div className="modal-wrapper">
        <div className="modal-background" onClick={onCancel}></div>
        <div className="modal-area">
          <div className="modal-header">
            <div className="modal-heading">{title}</div>
            <button id="modal-close-btn" onClick={onCancel}>
              <Close />
            </button>
          </div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">
            {onOk && (
              <button className="modal-ok primary" onClick={onOk}>
                {okText}
              </button>
            )}
            <button className="modal-cancel other" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
