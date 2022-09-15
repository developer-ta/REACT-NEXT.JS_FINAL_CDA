import { ImUsers, ImManWoman } from 'react-icons/im';
import { MdOutlineLocalDrink } from 'react-icons/md';
import { GiFullPizza, GiCakeSlice } from 'react-icons/gi';
import {
  FaChild,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaConciergeBell,
  FaHandHoldingUsd,
} from 'react-icons/fa';
// {menu === 'boissons' && <MdOutlineLocalDrink />}
// {menu === 'dessert' && <GiCakeSlice />}
// {menu === 'menu adult' && <ImManWoman />}
// {menu === 'menu enfent' && <FaChild />}
// {menu === 'pizza seul' && <GiFullPizza />}

const listIcon = {
  fish: <FaChild />,
  boissons: <MdOutlineLocalDrink />,
  dessert: <GiCakeSlice />,
  pizza: <GiFullPizza />,
};
export function fineIcon() {
  return listIcon;
}
