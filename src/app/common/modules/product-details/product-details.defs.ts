export interface ActionSheetButtonsModel {
  text: string;
  role: string;
  data: Data;
}

interface Data {
  action?: string;
  size?: string;
}
