export default function deleteFromArray<T>(array: T[], keysToDelete: (keyof T)[]): T[] {
  const [firstKey, ...restKeys] = keysToDelete;
  if (!restKeys.length) {
    return array.filter((item, index) => {
      return index !== firstKey;
    });
  }
  const newArray = [...array];
  if (typeof firstKey === 'number') {
    newArray[firstKey] = deleteFromObject(newArray[firstKey], restKeys);
  }
  return newArray;
}

function deleteFromObject<T>(obj: T, keysToDelete: (keyof T)[]): T {
  const [firstKey, ...restKeys] = keysToDelete;
  if (obj?.[firstKey] && typeof obj[firstKey] !== 'object') {
    return obj;
  }
  if (Array.isArray(obj[firstKey])) {
    return { ...obj, [firstKey]: deleteFromArray(obj[firstKey] as T[], restKeys) };
  }
  return { ...obj, [firstKey]: deleteFromObject(obj[firstKey] as T, restKeys) };
}
