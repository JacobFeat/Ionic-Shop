export interface HorizontalListItem<InterfaceKeysOrString = string> {
  imgUrl: InterfaceKeysOrString;
  imgAlt: InterfaceKeysOrString;
  firstLine: InterfaceKeysOrString;
  secondLine: InterfaceKeysOrString;
  title?: string;
}
