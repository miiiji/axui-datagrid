import React from 'react';
import classNames from 'classnames';
import sass from '../scss/index.scss';

//~~~~~

class GridRoot extends React.Component {
  constructor(props) {
    super(props);
    // props에 추가된 액션만 호출 가능
    props.init(props);
  }

  componentDidMount(){

    // ReactDOM.findDOMNode(action.refs.gridRoot)

    this.props.didMount(this.props, this.refs);
  }

  render() {
    let style = {
      height: this.props.height
    };

    return (
      <div ref="gridRoot" className={classNames(sass.gridRoot)} style={style}>

      </div>
    );
  }
}

GridRoot.defaultProps = {
  height: "300px",
  columns: [],
  options: {
    frozenColumnIndex: 0,
    frozenRowIndex: 0,
    showLineNumber: false,
    showRowSelector: false,
    multipleSelect: true,
    virtualScrollY: true,
    virtualScrollX: true,

    columnMinWidth: 100,
    lineNumberColumnWidth: 30,
    rowSelectorColumnWidth: 26,
    sortable: undefined,
    remoteSort: false,

    header: {
      display: true,
      align: false,
      columnHeight: 26,
      columnPadding: 3,
      columnBorderWidth: 1,
      selector: true
    },
    body: {
      align: false,
      columnHeight: 26,
      columnPadding: 3,
      columnBorderWidth: 1,
      grouping: false,
      mergeCells: false
    },
    page: {
      height: 25,
      display: true,
      statusDisplay: true,
      navigationItemCount: 5
    },
    scroller: {
      size: 15,
      barMinSize: 15,
      trackPadding: 4
    },
    columnKeys: {
      selected: '__selected__',
      modified: '__modified__',
      deleted: '__deleted__',
      disableSelection: '__disable_selection__'
    },
    tree: {
      use: false,
      hashDigit: 8,
      indentWidth: 10,
      arrowWidth: 15,
      iconWidth: 18,
      icons: {
        openedArrow: '▾',
        collapsedArrow: '▸',
        groupIcon: '⊚',
        collapsedGroupIcon: '⊚',
        itemIcon: '⊙'
      },
      columnKeys: {
        parentKey: "pid",
        selfKey: "id",
        collapse: "collapse",
        hidden: "hidden",
        parentHash: "__hp__",
        selfHash: "__hs__",
        children: "__children__",
        depth: "__depth__",
      }
    }
  }
};

export default GridRoot;
