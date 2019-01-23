import React, { Component } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import { head, rows } from './content/sample-data';

type State = { showPagination: boolean };

export default class extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showPagination: true,
    };
  }

  togglePagination = () => {
    this.setState({
      showPagination: !this.state.showPagination,
    });
  };

  render() {
    return (
      <>
        <p>
          Pagination is enabled or disabled by setting or unsetting the{' '}
          <code>rowsPerPage</code>
          prop.
        </p>
        <DynamicTable
          caption={'hello'}
          head={head}
          rows={rows.slice(0, 5)}
          rowsPerPage={this.state.showPagination ? 10 : undefined}
          defaultPage={1}
          isFixedSize
          defaultSortKey="term"
          defaultSortOrder="ASC"
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
          rankable
        />
      </>
    );
  }
}
