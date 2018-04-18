import '@babel/register';
import { configure } from '@storybook/react';

configure(() => require("../stories.tsx"), module);