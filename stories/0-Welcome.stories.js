import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('My test space', module);
stories.addDecorator(withKnobs);
stories.addDecorator(addReadme);

const text1 = () => <Button onClick={action('clicked')}>Hello Button</Button>;

const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯 {text('a', 'dfd')}
    </span>
    <input disabled={false} />
  </Button>
);


stories.addParameters({
  readme: {
    // Show readme before story
    content: "Apple",
    // Show readme at the addons panel
    sidebar: "Apple",
  },
}).add('text1', text1);
stories.add('emoji', emoji);