// ToDo: need to get these translated
const roleDescription = 'datovelger';
const jumpToPrevMonth = 'Gå til forrige måned.';
const jumpToNextMonth = 'Gå til neste måned.';
const dateIsSelected = (date: string) => `Valgt dato: ${date}`;
const dateIsUnavailable = (date: string) => `Dato ikke tilgjengelig (${date})`;

const phrases = {
  roleDescription,
  jumpToNextMonth,
  jumpToPrevMonth,
  dateIsSelected,
  dateIsUnavailable,
};

export type Phrases = typeof phrases;

export default phrases;
