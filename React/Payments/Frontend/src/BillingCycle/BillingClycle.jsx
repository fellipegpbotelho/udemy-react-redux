import React, { Component } from 'react';

import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';
import Tabs from '../common/tab/Tabs';
import TabHeader from '../common/tab/TabHeader';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';

class BillingCycle extends Component {
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
            <TabsContent />
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
