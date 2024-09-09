// atom step 3

import { atom } from "recoil";

export const userATom = atom({
   key: 'userATom',
   default: {
    isLoggedIn: false,
    data: {}
   },
})

// useRcoilSTate > if you need to change the atom state
// seRecoilValue > if use just need state only