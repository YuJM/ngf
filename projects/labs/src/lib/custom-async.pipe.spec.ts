import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';
import { CustomAsyncPipe } from './custom-async.pipe';

describe('CustomAsyncPipe ', () => {
  let spectator: SpectatorPipe<CustomAsyncPipe>;
  const createPipe = createPipeFactory(CustomAsyncPipe);

  it('should change the background color', () => {
    spectator = createPipe(`<div>{{ 'Testing' | customAsync }}</div>`);
    expect(spectator.element).toHaveText('');
  });
});
