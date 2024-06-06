import { TProcessCode } from 'types/navigation';

//6500 - 6999
const PAGE_ACTIONS_PROCESS_CODES = {
  PAGE_ACTION_EXIST: 6500,
  PAGE_ACTION_NOT_FOUND: 6501,
  PAGE_ACTION_EDITED: 6502,
  PAGE_ACTION_CREATED: 6503,
  PAGE_ACTION_DELETED: 6504,
} satisfies TProcessCode;

export default PAGE_ACTIONS_PROCESS_CODES;