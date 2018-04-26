export interface IFilter {
  setValue: (v: any) => void;
  filter: (row: any) => boolean;
  isActive: () => boolean;
  setIsActive: (active: boolean) => void;
}
