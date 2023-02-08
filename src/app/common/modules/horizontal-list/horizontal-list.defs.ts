export interface HorizontalListItem<InterfaceKeysOrString = string> {
  imgUrl: InterfaceKeysOrString;
  imgAlt: InterfaceKeysOrString;
  firstLine: InterfaceKeysOrString;
  secondLine: InterfaceKeysOrString;
  isModal?: boolean;
  title?: string;
  routing?: routingItem[];
}

interface routingItem {
  pathName: string;
  idName: string;
}
