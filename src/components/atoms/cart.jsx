// atom step 3

import { atom } from "recoil";

export const cartATom = atom({
   key: 'cartAtom',
   default: 0,
})

// useRcoilSTate > if you need to change the atom state
// seRecoilValue > if use just need state only