import "client-only";
/**
 * Hook that alerts clicks outside of the passed ref
 */
declare function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, handleClickOutsideCallback: () => void): void;
export default useOutsideAlerter;
