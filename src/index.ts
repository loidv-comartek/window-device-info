/**
 * @packageDocumentation
 * @module index
 * @ignore
 * @internal
 * @hidden
 */
let uniqueId: string;

export const getUniqueIdFromUrl = () => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  uniqueId = url.searchParams.get('deviceId')?.toString() || '';
  console.log('DEVICE ID', uniqueId);
};

getUniqueIdFromUrl();

export const getUniqueId = () => {
  return uniqueId;
};
