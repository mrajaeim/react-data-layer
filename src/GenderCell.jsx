const GENDERS = {
  MALE: 'male',
  NA: 'n/a',
  FEMALE: 'female',
};

const styles = {
  [GENDERS.MALE]: 'text-red-700',
  [GENDERS.FEMALE]: 'text-blue-700',
  [GENDERS.NA]: 'text-yellow-700',
};
const formatter = {
  [GENDERS.MALE]: capitalizeFirstLetter,
  [GENDERS.FEMALE]: capitalizeFirstLetter,
  [GENDERS.NA]: uppercaseLetters,
};

export default function GenderCell({ gender }) {
  return <span className={styles[gender]}>{formatter[gender](gender)}</span>;
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function uppercaseLetters(str) {
  return str.toUpperCase();
}
