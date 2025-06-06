import React from 'react';

export interface SealColumnProps {
  title: React.ReactNode;
  render?: (text: any, record: any) => React.ReactNode;
  dataIndex: string;
  key?: string;
  width?: number;
  span: number;
  align?: 'left' | 'center' | 'right';
  headerStyle?: React.CSSProperties;
  sorter?: boolean;
  defaultSortOrder?: 'ascend' | 'descend';
  editable?:
    | boolean
    | {
        valueType?: 'text' | 'number' | 'date' | 'datetime' | 'time';
        title?: React.ReactNode;
      };
  valueType?: 'text' | 'number' | 'date' | 'datetime' | 'time';
  sortOrder?: 'ascend' | 'descend' | null;
  [key: string]: any;
}

export interface TableHeaderProps {
  sorter?: boolean;
  defaultSortOrder?: 'ascend' | 'descend';
  sortOrder?: 'ascend' | 'descend' | null;
  dataIndex: string;
  onSort?: (dataIndex: string, order: 'ascend' | 'descend') => void;
  title: React.ReactNode;
  style?: React.CSSProperties;
  firstCell?: boolean;
  lastCell?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface RowSelectionProps {
  selectedRowKeys: React.Key[];
  selectedRows: any[];
  enableSelection: boolean;
  removeSelectedKeys: (rowKeys: React.Key[]) => void;
  onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
}
export interface SealTableProps {
  columns?: SealColumnProps[];
  childParentKey?: string;
  expandedRowKeys?: React.Key[];
  rowSelection?: RowSelectionProps;
  children?: React.ReactElement<SealColumnProps>[];
  empty?: React.ReactNode;
  expandable?: React.ReactNode;
  dataSource: any[];
  pollingChildren?: boolean;
  watchChildren?: boolean;
  loading?: boolean;
  loadend?: boolean;
  onCell?: (record: any, dataIndex: string) => void;
  onSort?: (dataIndex: string, order: 'ascend' | 'descend') => void;
  onExpand?: (expanded: boolean, record: any, rowKey: any) => void;
  onExpandAll?: (expanded: boolean) => void;
  renderChildren?: (
    data: any,
    options: { parent?: any; [key: string]: any }
  ) => React.ReactNode;
  loadChildren?: (record: any, options?: any) => Promise<any[]>;
  loadChildrenAPI?: (record: any) => string;
  contentRendered?: () => void;
  rowKey: string;
}

export interface RowContextProps {
  record: Record<string, any>;
  pollingChildren?: boolean;
  rowIndex: number;
}
