export type TreeItemType = {
  data: { [key: string]: string };
  children: { [key: string]: { records: TreeItemType[] } } | Record<string, never>;
};

export type TreeItemSelectors = (string | number)[];
