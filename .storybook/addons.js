import { storiesOf, addDecorator } from '@storybook/react';
import '@storybook/addon-knobs/register';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);
