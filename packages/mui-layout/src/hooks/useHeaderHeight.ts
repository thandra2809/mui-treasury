import { useWindowCtx } from '../contexts';
import { DEFAULT_HEADER_ID } from '../utils';

export const useHeaderHeight = (headerId: string = DEFAULT_HEADER_ID) => {
  const { iDocument } = useWindowCtx();
  const headerElm = iDocument
    ? iDocument.querySelector(`[mui-layout='${headerId}']`)
    : null;
  if (headerElm) {
    const { height, top } = headerElm.getBoundingClientRect();
    return height + top
  }
  return 0;
};

export default useHeaderHeight;
