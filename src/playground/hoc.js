import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>this is the info {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info blet, please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

//require authenticaiton
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You need to login</p>}
    </div>
  )
}


const AdminInfo = withAdminWarning(Info) //galima prideti beekiek componentu
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="bybiai" />, document.querySelector('#app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="perduodama info per props" />, document.querySelector('#app'))