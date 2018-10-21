import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectTab } from "./TabActions";

const TabHeader = ({ tab, target, selectTab, icon, label }) => {
  const selected = tab.selected === target;
  return (
    <li className={selected ? "active" : ""}>
      <a
        href="javascript:;"
        data-toggle="tab"
        data-target={target}
        onClick={() => selectTab(target)}
      >
        <i className={`fa fa-${icon}`} />
        &nbsp;
        {label}
      </a>
    </li>
  );
};
const mapStateToProps = state => ({
  tab: state.tab
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabHeader);
