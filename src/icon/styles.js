import { css } from 'lit';

export default css`
:host {
    line-height: unset;
}
.icon {
    color: var(--w-s-color-icon);
}

.icon--small > svg {
    width: 16px;
    height: 16px;
}

.icon--medium > svg {
    width: 24px;
    height: 24px;
}

.icon--large > svg {
    width: 32px;
    height: 32px;
}

.icon--xtralarge > svg {
    width: 48px;
    height: 48px;
}

@media (prefers-color-scheme: dark) {

    .icon {
        /*color: var(--w-s-color-icon-inverted);*/
    }

}

`;