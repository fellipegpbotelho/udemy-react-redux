import React, { Component } from 'react';

import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de pagamento" small="Cadastro" />
        <Content>Ciclos de pagamento</Content>
      </div>
    );
  }
}

export default BillingCycle;
