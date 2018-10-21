import React, { Component } from 'react';

import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader />
            <TabsContent />
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
