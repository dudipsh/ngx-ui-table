export class NgxUiColumn {
  field?: string;
  name?: string;
  template?: TableTemplate | null;
  sort?: 'asc' | 'desc';
  className?: string;
  hide?: boolean;
  isSelected?: boolean;
  filterFunction?: Function;
  notSorted?: boolean;
  isHaveFilter?: boolean;
}
export class TableTemplate {
  htmlString?: any;
  ngTemplate?: any;
}
