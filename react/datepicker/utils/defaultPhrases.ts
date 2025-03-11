const roleDescription = 'datovelger';

const jumpToPrevMonth = 'Gå til forrige måned.';
const jumpToNextMonth = 'Gå til neste måned.';
const dateIsSelected = (date: string) => `Valgt dato: ${date}`;
const dateIsSelectedAsStartDate = (date: string) => `Valgt startdato: ${date}`;
const dateIsSelectedAsEndDate = (date: string) => `Valgt sluttdato: ${date}`;
const dateIsUnavailable = (date: string) => `Dato ikke tilgjengelig (${date})`;

const phrases = {
  roleDescription,
  jumpToNextMonth,
  jumpToPrevMonth,
  dateIsSelected,
  dateIsUnavailable,
  dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate,
};

export type Phrases = typeof phrases;

export default phrases;
