export interface LinkInterface {
	/** 链接的名字，用于图标下的展示 */
	v: string;
	/** 链接的位置，用于点击的时候，打开的位置 */
	value: string;
	/** 图片的路径 */
	img: string;
	/** type 类型 m multiple，多个的，点击弹出单个路径  s single单个的，点击直接跳转 */
	type: 'm' | 's';
	children?: LinkInterface[];
	flagShowDelete: boolean;
}
export interface DesktopArrInterface {
	v: string;
	children: LinkInterface[];
}
