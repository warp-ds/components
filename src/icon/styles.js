import { css } from 'lit';

export default css`
.w-icon {
    color: var(--w-s-color-icon);
}

.w-icon--small > svg {
    width: 16px;
    height: 16px;
}

.w-icon--medium > svg {
    width: 24px;
    height: 24px;
}

.w-icon--large > svg {
    width: 32px;
    height: 32px;
}

.w-icon--xtralarge > svg {
    width: 48px;
    height: 48px;
}
`;