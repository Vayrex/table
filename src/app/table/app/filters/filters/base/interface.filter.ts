export interface IFilter {
  setOperator: (v: string) => void;
  setValue: (v: any) => void;
  boolean: (data: any) => boolean;
  isActive: () => boolean;
}
