import React from 'react';
import "./style.css";
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu width={285}>

            <p id="navHead">
                I N D I C A T O R S
      </p>

            <a className="menu-item" href="/">
                <i class="fa fa-home"></i>&nbsp;
                  Home
      </a>

            {/* <a className="menu-item" onClick={props.dialOption}>
      <i class="fa fa-phone"></i>&nbsp;
          Dialing Tool
      </a> */}

            <a className="menu-item" href="/"  onClick={props.createOption}>
                <i class="fa fa-pencil"></i>&nbsp;
                  Create
      </a>

            {/* <a className="menu-item" onClick={props.createOption}>
        <i class="fa fa-paper-plane"></i>&nbsp;
          Creation Tool
      </a> */}

            <a className="menu-item" href="/" onClick={props.analyticsOption}>
                <i class="fa fa-area-chart"></i>&nbsp;
                  Analytics
      </a>

            <a className="menu-item" href="/" onClick={props.salesOption}>
                <i class="fa fa-trophy"></i>&nbsp;
                  Sales
      </a>

      <a className="menu-item" href="/" onClick={props.reportsOption}>
                <i class="fa fa-area-chart"></i>&nbsp;
                  Reports
      </a>

            <a className="menu-item" href="/" >
                <i class="fa fa-sign-out"></i>&nbsp;
                  Logout
      </a>

            {/* Admin Options Below - do not appear on User nav panel */}

        </Menu>
    );
};

// export default SideNavPage;