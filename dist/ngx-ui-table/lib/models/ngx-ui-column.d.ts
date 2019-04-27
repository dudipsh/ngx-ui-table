export declare class NgxUiColumn {
    field?: string;
    name?: string;
    size?: string;
    template?: TableTemplate | null;
    sort?: 'asc' | 'desc';
    className?: string;
    hide?: boolean;
    isSelected?: boolean;
    notSorted?: boolean;
    isHaveFilter?: boolean;
}
export declare class TableTemplate {
    htmlString?: any;
    ngTemplate?: any;
}
