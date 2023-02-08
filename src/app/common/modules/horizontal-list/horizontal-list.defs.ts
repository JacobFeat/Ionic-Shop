export interface HorizontalListItem<InterfaceKeysOrString = string> {
  imgUrl: InterfaceKeysOrString;
  imgAlt: InterfaceKeysOrString;
  firstLine: InterfaceKeysOrString;
  secondLine: InterfaceKeysOrString;
  title?: string;
  route?: string;
  secondRoute?: string;
  thirdRoute?: string;
  idName?: string;
  secondIdName?: string;
  thirdIdName?: string;
}
