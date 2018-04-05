export interface Filter {
  setOperator:(v: string) => void;
  setValue:(v:any) => void;
  boolean:(data:any) => boolean;
}