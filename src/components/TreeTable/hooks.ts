import { useMemo } from 'react';
import { TreeItemType } from '../../types/treeTable';

export const useGetKeys = (item: TreeItemType) => {
  const childrenKey = useMemo(() => {
    let childrenKey = '';
    Object.keys(item.children).forEach((key) => {
      item.children[key];
      if (Array.isArray(item.children[key]?.records)) {
        childrenKey = key;
      }
    });
    return childrenKey;
  }, [item.children]);

  const childrens = useMemo(() => {
    return item.children[childrenKey]?.records || [];
  }, [item.children, childrenKey]);

  return { childrenKey, childrens };
};

export const useGetHeader = (data: TreeItemType[]) => {
  const header = useMemo(() => {
    return Object.keys(data?.[0]?.data || {});
  }, [data?.[0]?.data.length]);

  return header;
};
