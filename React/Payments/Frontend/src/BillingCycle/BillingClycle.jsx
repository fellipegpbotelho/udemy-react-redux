import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import Tabs from '../common/tab/Tabs';
import TabHeader from '../common/tab/TabHeader';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabContent from '../common/tab/TabContent';

import List from './BillingClycleList';
import Form from './BillingCycleForm';

import { selectTab, showTabs } from '../common/tab/TabActions';
import { create, update, remove } from './BillingClycleActions';

class BillingCycle extends Component {
  componentWillMount() {
    const { selectTab, showTabs } = this.props;
    selectTab('tabList');
    showTabs('tabList', 'tabCreate');
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form onSubmit={this.props.update} />
              </TabContent>
              <TabContent id="tabDelete">
                <Form onSubmit={this.props.remove} readOnly />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    selectTab,
    showTabs,
    create,
    update,
    remove,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(BillingCycle);
