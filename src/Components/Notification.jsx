import React from "react";
import PropTypes from "prop-types";

const typeClass = {
  success: "text-success",
  error: "text-danger",
  info: "text-info",
  warning: "text-warning",
};

const Notification = ({ notification, wrapperClass = "col-12 text-center" }) => {
  if (!notification) return null;
  const cls = `${wrapperClass} ${typeClass[notification.type] || ""}`;
  return <div className={cls}>{notification.msg}</div>;
};

Notification.propTypes = {
  notification: PropTypes.shape({
    type: PropTypes.string,
    msg: PropTypes.string,
  }),
  wrapperClass: PropTypes.string,
};

export default Notification;