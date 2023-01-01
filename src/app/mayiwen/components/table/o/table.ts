export interface Table {
  /** 用于指定绑定的值 */
  value: any;
  /** 用于绑定的值 */
  v?: any;
  save?: any;
}
export interface TableHead {
  /** 对应的参数 */
  value: string;
  /** 对应的列的显示 */
  v: string;
  /** 对应的宽度 */
  w: number;
  /** 指定
   * content 当前需要指定插槽
   */
  type?: 'content';
  /**
   * 根据不同的类型，指定不同的值。
   */
  typeKey?: string;
}
export interface TableSetting {
  tableHead?: TableHead[];
  tableHeadDefault?: TableHead;
}
