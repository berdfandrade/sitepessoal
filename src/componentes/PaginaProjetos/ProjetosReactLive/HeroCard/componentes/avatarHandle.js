

import male1 from "../assets/chars/male_1.png";
import male2 from "../assets/chars/male_2.png";
import male3 from "../assets/chars/male_3.png";
import male4 from "../assets/chars/male_4.png";
import male5 from "../assets/chars/male_5.png";
import male6 from "../assets/chars/male_6.png";
import male7 from "../assets/chars/male_7.png";
import male8 from "../assets/chars/male_8.png";
import male9 from "../assets/chars/male_9.png";
import male10 from "../assets/chars/male_10.png";
import male11 from "../assets/chars/male_11.png";
import male12 from "../assets/chars/male_12.png";
import male13 from "../assets/chars/male_13.png";
import male14 from "../assets/chars/male_14.png";
import male15 from "../assets/chars/male_15.png";
import male16 from "../assets/chars/male_16.png";
import male17 from "../assets/chars/male_17.png";

import female1 from "../assets/chars/famale_1.png";
import female2 from "../assets/chars/famale_2.png";
import female3 from "../assets/chars/female_3.png";
import female4 from "../assets/chars/famale_4.png";
import female5 from "../assets/chars/famale_5.png";

import neut1 from "../assets/chars/neut_1.png";
import neut2 from "../assets/chars/neut_2.png";
import neut3 from "../assets/chars/neut_3.png";

const avatarMasc = [
  male1,
  male2,
  male3,
  male4,
  male5,
  male6,
  male7,
  male8,
  male9,
  male10,
  male11,
  male12,
  male13,
  male14,
  male15,
  male16,
  male17,
];

const avatarFem = [female1, female2, female3, female4, female5];

const avatarNeut = [neut1, neut2, neut3];

function avatarHandle(heroi) {
  if (heroi.Gênero === "Masculino") {
    const randomIndex = Math.floor(Math.random() * avatarMasc.length);
    return avatarMasc[randomIndex];
  } else if (heroi.Gênero === "Feminino") {
    const randomIndex = Math.floor(Math.random() * avatarFem.length);
    return avatarFem[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * avatarNeut.length);
    return avatarNeut[randomIndex];
  }
}

export default avatarHandle;
