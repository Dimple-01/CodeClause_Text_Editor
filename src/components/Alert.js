import React from 'react'
import PropTypes from 'prop-types';

export default function Alert(props) {
  return (
    <div style={{height:'70px'}}>
   { props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.type}:{props.alert.msg}
</div>}
</div>
  )
}
